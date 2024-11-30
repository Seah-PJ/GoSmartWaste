// Hardcoded credentials for demonstration
const validUsername = "user@example.com";
const validPassword = "password123";

// Function to handle form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('username').value; // Get the username value
    const password = document.getElementById('password').value; // Get the password value
    const loginError = document.getElementById('login-error'); // Get the error message element

    // Clear any previous error message
    loginError.textContent = "";

    // Check credentials
    if (username === validUsername && password === validPassword) {
        // Redirect to the dashboard page
        window.location.href = "dashboard.html"; // Redirect to dashboard
    } else {
        // Display an error message
        loginError.textContent = "Invalid username or password."; // Show error message
    }
});

function chatWithAI() {
    // Redirect to the AI chat interface or open a chat window
    window.location.href = "chat.html"; // Example redirection
}

function navigateToCollectionPoints() {
    // Redirect to a map or list of nearby collection points
    window.location.href = "collection_points.html"; // Example redirection
}

function checkCollectionSchedule() {
    // Redirect to a page that shows collection schedules
    window.location.href = "collection_schedule.html"; // Example redirection
}

function viewNews() {
    // Redirect to a news/information page
    window.location.href = "news.html"; // Example redirection
}

function reportIssues() {
    // Redirect to a report issues page
    window.location.href = "report_issues.html"; // Example redirection
}

function identifyRecyclables() {
    // Redirect to a page or open a camera interface for identifying recyclables
    window.location.href = "identify_recyclables.html"; // Example redirection
}

function takeQuiz() {
    // Redirect to a quiz page
    window.location.href = "quiz.html"; // Example redirection
}
