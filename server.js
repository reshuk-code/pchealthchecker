const express = require('express');
const os = require('os');
const app = express();
const port = 3000;
const path = require('node:path/win32')
// Function to calculate the percentage of used memory
function getMemoryUsage() {
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = totalMemory - freeMemory;
    const memoryPercentage = (usedMemory / totalMemory) * 100;
    return memoryPercentage.toFixed(2); // Return memory usage percentage
}

// Function to get CPU usage
function getCpuUsage() {
    const cpus = os.cpus();
    let totalIdle = 0, totalTick = 0;

    cpus.forEach(cpu => {
        for (type in cpu.times) {
            totalTick += cpu.times[type];
        }
        totalIdle += cpu.times.idle;
    });

    const idlePercentage = (totalIdle / totalTick) * 100;
    const usagePercentage = 100 - idlePercentage;
    return usagePercentage.toFixed(2); // Return CPU usage percentage
}

// Health Check Endpoint
app.get('/health-check', (req, res) => {
    const cpuUsage = getCpuUsage();
    const memoryUsage = getMemoryUsage();
    
    let healthStatus = 'Good';  // Default status
    let score = 100;  // Default score for healthy PC

    // Evaluate status based on memory and CPU usage
    if (memoryUsage > 80 || cpuUsage > 80) {
        healthStatus = 'Critical';
        score = 40;  // Lower score for critical health
    } else if (memoryUsage > 60 || cpuUsage > 60) {
        healthStatus = 'Fair';
        score = 70;  // Medium score for fair health
    }

    // Send JSON response
    res.json({
        score: score,
        status: healthStatus,
        cpuUsage: `${cpuUsage}%`,
        memoryUsage: `${memoryUsage}%`
    });
});

// Serve static files (optional, for your front-end)
app.use(express.static('public')); // Make sure 'public' contains your front-end files
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});
// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
