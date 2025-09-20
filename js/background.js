// Frontend-themed code snippets
const htmlSnippets = [
    '<div class="container">',
    '<header>',
    '<nav class="navbar">',
    '<img src="logo.png" alt="Logo">',
    '<h1>Welcome</h1>',
    '<p class="intro">',
    '<button onclick="submit()">',
    '<form method="post">',
    '<input type="text">',
    '</div>',
    '</header>',
    '</nav>',
    '<section id="main">',
    '<footer>&copy; 2025</footer>'
];

const cssSnippets = [
    'display: flex;',
    'justify-content: center;',
    'background-color: #1a1a2e;',
    'font-family: Arial, sans-serif;',
    'border-radius: 10px;',
    'padding: 20px;',
    'margin: 0 auto;',
    'width: 100%;',
    'height: 100vh;',
    'position: relative;',
    'color: white;',
    'text-align: center;',
    'box-shadow: 0 4px 8px rgba(0,0,0,0.3);',
    'transition: all 0.3s ease;',
    'hover: scale(1.05);'
];

function createCodeSnippet() {
    const background = document.getElementById('background');
    if (!background) return;
    
    const snippet = document.createElement('div');
    snippet.className = 'code-snippet';
    
    // Randomly choose between HTML and CSS
    const isHtml = Math.random() > 0.5;
    const snippets = isHtml ? htmlSnippets : cssSnippets;
    const randomSnippet = snippets[Math.floor(Math.random() * snippets.length)];
    
    snippet.textContent = randomSnippet;
    
    // Add appropriate styling class
    if (isHtml) {
        snippet.classList.add(randomSnippet.startsWith('<') ? 'tag' : 'html');
    } else {
        snippet.classList.add('css');
    }
    
    // Add glow effect occasionally
    if (Math.random() > 0.8) {
        snippet.classList.add('glow');
    }
    
    // Random starting position and speed
    snippet.style.left = '-200px';
    snippet.style.top = Math.random() * 100 + '%';
    snippet.style.animationDuration = (Math.random() * 10 + 10) + 's';
    snippet.style.animationDelay = Math.random() * 2 + 's';
    
    background.appendChild(snippet);
    
    // Remove snippet after animation completes
    setTimeout(() => {
        if (snippet.parentNode) {
            snippet.parentNode.removeChild(snippet);
        }
    }, 20000);
}

// Create code snippets continuously
function startAnimation() {
    setInterval(createCodeSnippet, 1500); // New snippet every 1.5 seconds
}

// Create initial snippets when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Create a few initial snippets with staggered timing
    for (let i = 0; i < 3; i++) {
        setTimeout(createCodeSnippet, i * 500);
    }
    
    // Start the continuous animation
    setTimeout(startAnimation, 1000);
});