// dashboard.js

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    // Example: Fetch and display user data
    fetchUserData();

    // Example: Add event listeners for dashboard actions
    const logoutButton = document.getElementById("logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", handleLogout);
    }
});

// Function to fetch user data and populate the dashboard
function fetchUserData() {
    // Simulate fetching user data (replace with actual API call)
    const userData = {
        name: "Ashwin",
        email: "ashwin@example.com",
        role: "Retailer",
    };

    // Populate user data in the dashboard
    const userNameElement = document.getElementById("userName");
    const userEmailElement = document.getElementById("userEmail");
    const userRoleElement = document.getElementById("userRole");

    if (userNameElement) userNameElement.textContent = userData.name;
    if (userEmailElement) userEmailElement.textContent = userData.email;
    if (userRoleElement) userRoleElement.textContent = userData.role;
}

// Function to handle logout
function handleLogout() {
    // Simulate logout process (replace with actual implementation)
    alert("You have been logged out.");
    window.location.href = "login.html"; // Redirect to login page
}