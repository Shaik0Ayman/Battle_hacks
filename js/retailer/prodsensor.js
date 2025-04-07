// prodsensor.js

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Example: Attach event listeners or initialize functionality
    const sensorButton = document.getElementById("sensorButton");
    const sensorOutput = document.getElementById("sensorOutput");

    if (sensorButton && sensorOutput) {
        sensorButton.addEventListener("click", () => {
            // Simulate fetching product sensor data
            const sensorData = getSensorData();
            sensorOutput.textContent = `Sensor Data: ${sensorData}`;
        });
    }
});

// Simulate a function to fetch sensor data
function getSensorData() {
    // Replace this with actual logic to fetch sensor data
    return Math.random().toFixed(2); // Example: Random data
}