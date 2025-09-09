// Simple background animation with floating dots
function createDot() {
    const background = document.getElementById('background');
    const dot = document.createElement('div');
    dot.className = 'dot';
    
    // Random starting position
    dot.style.left = Math.random() * 100 + '%';
    dot.style.animationDuration = (Math.random() * 10 + 5) + 's';
    
    background.appendChild(dot);
    
    // Remove dot after animation completes
    setTimeout(() => {
        if (dot.parentNode) {
            dot.parentNode.removeChild(dot);
        }
    }, 15000);
}

// Create dots continuously
setInterval(createDot, 1000);

// Create initial dots when page loads
document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < 5; i++) {
        setTimeout(createDot, i * 200);
    }
});