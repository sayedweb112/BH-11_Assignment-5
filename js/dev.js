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

// Update task counter
document.getElementById('taskCount').textContent = assignedTaskCount.toString().padStart(2, '0');

// Complete button click handler
document.querySelectorAll('.complete-btn').forEach(button => {
    button.addEventListener('click', function () {
        const taskName = this.getAttribute('data-task');
        const taskId = this.getAttribute('data-id');

        // First alert
        alert('Board updated successfully');

        // Disable the button
        this.disabled = true;
        this.classList.remove('bg-blue-500');
        this.classList.add('bg-blue-200');

        // Decrease assigned task count if greater than 0
        if (assignedTaskCount > 0) {
            assignedTaskCount--;
            document.getElementById('taskCount').textContent = assignedTaskCount.toString().padStart(2, '0');
        }

        // Increase checkmark count and update the navbar counter
        checkmarkCount++;
        document.getElementById('taskCounter').textContent = checkmarkCount;

        completedTaskCount++;

        // Add to activity log
        const activityLog = document.getElementById('activityLog');
        const activityItem = document.createElement('div');
        activityItem.className = 'text-sm text-gray-600 mb-3';
        activityItem.innerHTML = `You have Complete The Task <span class="font-medium">${taskName}</span> at ${getCurrentTime()}`;
        activityLog.prepend(activityItem);

        // Check if this is the sixth task completed
        if (completedTaskCount === totalTasks) {
            // Use setTimeout to ensure this alert 
            setTimeout(function () {
                alert('Congrats!!! You have completed all the current task');
            }, 100);
        }
    });
});

// Clear history button 
document.getElementById('clearHistory').addEventListener('click', function () {
    document.getElementById('activityLog').innerHTML = '';
});


