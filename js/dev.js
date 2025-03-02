// blog-section
function goIn() {
    window.location.href = 'blog.html';
}
// Color switcher
const colors = ["bg-gray-100", "bg-gray-800", "bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-red-500", "bg-purple-500"];
let index = 0;

document.getElementById('colorSwitcher').addEventListener('click', function () {
    const body = document.getElementById('body');
    body.classList.remove(...colors);
    index = (index + 1) % colors.length;
    body.classList.add(colors[index]);
});

//  Checkmark count navbar
let checkmarkCount = 23;
let assignedTaskCount = 6;
let completedTaskCount = 0;
const totalTasks = 6;

//  Current time format
function getCurrentTime() {
    const now = new Date();
    return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
}

//  Get formatted date
function getFormattedDate() {
    const today = new Date();
    const options = { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' };
    return today.toLocaleDateString('en-US', options);
}


// Apply date
document.getElementById("dateDisplay").textContent = getFormattedDate();

