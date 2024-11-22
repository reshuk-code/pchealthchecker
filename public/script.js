document.getElementById('start-check').addEventListener('click', () => {
    const speedometer = document.getElementById('speedometer');
    const healthStatus = document.getElementById('health-status');

    // Reset UI to initial state
    speedometer.style.background = 'conic-gradient(#ccc 0% 100%)';
    speedometer.classList.add('loading'); // Add loading class for animation
    healthStatus.textContent = 'Checking...';
    healthStatus.style.opacity = 0.7; // Reduce opacity to indicate loading

    // Simulate loading effect
    setTimeout(() => {
        fetch('/health-check')
            .then(res => res.json())
            .then(data => {
                const score = data.score;

                // Update speedometer with score
                speedometer.style.background = `conic-gradient(
                    #00b894 0% ${score}%, 
                    #ccc ${score}% 100%
                )`;

                // Update health status
                healthStatus.textContent = `Score: ${score} - ${data.status}`;
                healthStatus.style.opacity = 1; // Reset opacity

                // Remove loading animation
                speedometer.classList.remove('loading');
            })
            .catch(err => {
                healthStatus.textContent = 'Error checking health!';
                healthStatus.style.opacity = 1; // Reset opacity on error
                console.error(err);

                // Remove loading animation
                speedometer.classList.remove('loading');
            });
    }, 1000); // Simulate loading delay
});

document.addEventListener('DOMContentLoaded', () => {
    // Set the current year dynamically
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Initialize and show the toast
    const toastElement = document.getElementById('copyrightToast');
    const toast = new bootstrap.Toast(toastElement, {
        autohide: false, // Prevent it from automatically disappearing
    });
    toast.show();
});
