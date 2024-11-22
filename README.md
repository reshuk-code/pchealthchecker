# PC Health Checker

PC Health Checker is a web application designed to monitor and display the system health of a computer or server. It provides a simple user interface that checks various system parameters like CPU, memory, and disk usage, and displays them through an animated speedometer-style visual. The app also features a toast message with copyright information, which appears when the app is accessed.

This project is developed with Node.js and uses the `os` module to gather system health data.

---

## Features

- Displays system health stats: CPU, memory, and disk usage.
- Speedometer-style animation to show health status.
- Responsive design, accessible from both desktop and mobile devices.
- Toast message showing copyright information on startup.
- Option to close the toast notification.
- Simple, clean, and minimal design with Poppins font.

---

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/reshuk-code/pchealthchecker.git
Navigate to the project directory:

bash
Copy code
cd pc-health-checker
Install dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
npm start
This will start the Node.js server on http://localhost:3000.

Usage
Home Page: The homepage features a speedometer-style animation that starts scanning your system health when the "Start Health Check" button is clicked.
Toast Message: A toast message will appear when the app starts, showing the copyright information. It can be dismissed using the close button.
System Health Check: Once the health check starts, the system's health stats are displayed in real-time, and the speedometer fills up according to the health score.
Technologies Used
Frontend: HTML, CSS (with Flexbox and CSS animations), JavaScript
Backend: Node.js, os module (for fetching system information)
Libraries:
Bootstrap (for responsive design)
Poppins Font (for a modern, readable typeface)
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
Inspired by various system monitoring tools.
Thanks to the open-source community for contributing to Node.js and related libraries.
Developer Information
Developed by: Reshuk Sapkota

GitHub: https://github.com/reshuk-code

Notes
For mobile devices, the health check will show the server's health status and not the device's health.
To integrate device health information for mobile, additional JavaScript APIs would be required.

