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



