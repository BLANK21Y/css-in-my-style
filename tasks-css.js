// CSS Task definitions with 10 tasks each
const tasks = {
    beginner: [
        {
            title: "Text Color",
            instructions: "Change the text color of a paragraph to blue.",
            expectedAnswer: "p\\s*\\{[^}]*color\\s*:\\s*blue[^}]*\\}",
            hint: "Use color: blue; on a paragraph element",
            htmlStructure: "<p>This text should be blue</p>"
        },
        {
            title: "Font Size",
            instructions: "Increase heading font size using font-size.",
            expectedAnswer: "h[1-6]\\s*\\{[^}]*font-size\\s*:[^}]*\\}",
            hint: "Use font-size property on a heading element",
            htmlStructure: "<h1>This heading should have a larger font size</h1>"
        },
        {
            title: "Background Color",
            instructions: "Apply a background color to a div.",
            expectedAnswer: "div\\s*\\{[^}]*background-color\\s*:[^}]*\\}",
            hint: "Use background-color property on a div element",
            htmlStructure: "<div>This div should have a background color</div>"
        },
        {
            title: "Margins & Padding",
            instructions: "Add margin and padding to an element.",
            expectedAnswer: "[^}]*\\{[^}]*margin\\s*:[^}]*padding\\s*:[^}]*\\}|[^}]*\\{[^}]*padding\\s*:[^}]*margin\\s*:[^}]*\\}",
            hint: "Use margin and padding properties",
            htmlStructure: "<div class='box'>This element should have margin and padding</div>"
        },
        {
            title: "Border Styling",
            instructions: "Add a border with 2px solid red.",
            expectedAnswer: "[^}]*\\{[^}]*border\\s*:\\s*2px\\s+solid\\s+red[^}]*\\}",
            hint: "Use border: 2px solid red;",
            htmlStructure: "<div class='bordered'>This element should have a red border</div>"
        },
        {
            title: "Box Model",
            instructions: "Demonstrate padding, margin, and border around an element.",
            expectedAnswer: "[^}]*\\{[^}]*padding\\s*:[^}]*margin\\s*:[^}]*border\\s*:[^}]*\\}",
            hint: "Use padding, margin, and border properties together",
            htmlStructure: "<div class='box-model'>Box model demonstration</div>"
        },
        {
            title: "Class Selectors",
            instructions: "Style a class .highlight with yellow background.",
            expectedAnswer: "\\.highlight\\s*\\{[^}]*background[^}]*yellow[^}]*\\}",
            hint: "Use .highlight selector with background-color: yellow;",
            htmlStructure: "<p class='highlight'>This text should have a yellow background</p>"
        },
        {
            title: "ID Selectors",
            instructions: "Style an element with id='main' with bold text.",
            expectedAnswer: "#main\\s*\\{[^}]*font-weight\\s*:\\s*bold[^}]*\\}",
            hint: "Use #main selector with font-weight: bold;",
            htmlStructure: "<div id='main'>This text should be bold</div>"
        },
        {
            title: "Text Alignment",
            instructions: "Center-align a heading using text-align.",
            expectedAnswer: "h[1-6]\\s*\\{[^}]*text-align\\s*:\\s*center[^}]*\\}",
            hint: "Use text-align: center; on a heading",
            htmlStructure: "<h2>This heading should be centered</h2>"
        },
        {
            title: "Link Styling",
            instructions: "Remove underline from a link and change its color on hover.",
            expectedAnswer: "a\\s*\\{[^}]*text-decoration\\s*:\\s*none[^}]*\\}.*a:hover\\s*\\{[^}]*color\\s*:[^}]*\\}",
            hint: "Use text-decoration: none; and a:hover with color",
            htmlStructure: "<a href='#'>This link should have no underline and change color on hover</a>"
        }
    ],
    intermediate: [
        {
            title: "Flexbox Layout",
            instructions: "Create a two-column layout using flexbox.",
            expectedAnswer: "[^}]*\\{[^}]*display\\s*:\\s*flex[^}]*\\}",
            hint: "Use display: flex; to create a flexbox container",
            htmlStructure: "<div class='container'><div class='column'>Column 1</div><div class='column'>Column 2</div></div>"
        },
        {
            title: "Grid Layout",
            instructions: "Create a 2x2 grid using display: grid.",
            expectedAnswer: "[^}]*\\{[^}]*display\\s*:\\s*grid[^}]*grid-template[^}]*\\}",
            hint: "Use display: grid; and grid-template-columns or grid-template-rows",
            htmlStructure: "<div class='grid'><div>Item 1</div><div>Item 2</div><div>Item 3</div><div>Item 4</div></div>"
        },
        {
            title: "Hover Effects",
            instructions: "Add a hover effect to a button with background change.",
            expectedAnswer: "button:hover\\s*\\{[^}]*background[^}]*\\}",
            hint: "Use button:hover selector with background-color",
            htmlStructure: "<button>Hover over me</button>"
        },
        {
            title: "Transitions",
            instructions: "Smoothly change the background color of a box on hover.",
            expectedAnswer: "[^}]*\\{[^}]*transition\\s*:[^}]*\\}.*:hover\\s*\\{[^}]*background[^}]*\\}",
            hint: "Use transition property and :hover pseudo-class",
            htmlStructure: "<div class='transition-box'>Hover for smooth transition</div>"
        },
        {
            title: "Transform",
            instructions: "Rotate an image by 20 degrees on hover.",
            expectedAnswer: "img:hover\\s*\\{[^}]*transform\\s*:\\s*rotate\\(20deg\\)[^}]*\\}",
            hint: "Use transform: rotate(20deg); on img:hover",
            htmlStructure: "<img src='https://via.placeholder.com/100' alt='Rotate on hover'>"
        },
        {
            title: "Pseudo Classes",
            instructions: "Use :first-child to style the first list item differently.",
            expectedAnswer: "li:first-child\\s*\\{[^}]*\\}",
            hint: "Use li:first-child selector",
            htmlStructure: "<ul><li>First item (should be different)</li><li>Second item</li><li>Third item</li></ul>"
        },
        {
            title: "Pseudo Elements",
            instructions: "Add a custom arrow using ::before to a heading.",
            expectedAnswer: "h[1-6]::before\\s*\\{[^}]*content\\s*:[^}]*\\}",
            hint: "Use h1::before with content property",
            htmlStructure: "<h3>This heading should have an arrow before it</h3>"
        },
        {
            title: "Media Queries",
            instructions: "Change the background to black on screens less than 768px.",
            expectedAnswer: "@media\\s*\\([^)]*max-width\\s*:\\s*768px[^)]*\\)\\s*\\{[^}]*background[^}]*black[^}]*\\}",
            hint: "Use @media (max-width: 768px) with background-color: black;",
            htmlStructure: "<div class='responsive'>This should have black background on mobile</div>"
        },
        {
            title: "Positioning",
            instructions: "Use position: absolute to place an element in the corner.",
            expectedAnswer: "[^}]*\\{[^}]*position\\s*:\\s*absolute[^}]*\\}",
            hint: "Use position: absolute; with top, right, bottom, or left properties",
            htmlStructure: "<div class='container'><div class='absolute-element'>Positioned element</div></div>"
        },
        {
            title: "Z-index",
            instructions: "Use z-index to layer an image on top of text.",
            expectedAnswer: "[^}]*\\{[^}]*z-index\\s*:[^}]*\\}",
            hint: "Use z-index property to control stacking order",
            htmlStructure: "<div class='container'><p>Text below</p><img src='https://via.placeholder.com/50' class='overlay' alt='Overlay image'></div>"
        }
    ],
    advanced: [
        {
            title: "Animations",
            instructions: "Create a keyframe animation to move a box left to right.",
            expectedAnswer: "@keyframes\\s+[^{]+\\{[^}]*\\}.*animation\\s*:[^}]*",
            hint: "Use @keyframes and animation property",
            htmlStructure: "<div class='animated-box'>This box should move left to right</div>"
        },
        {
            title: "Custom Fonts",
            instructions: "Use @font-face or Google Fonts to apply a new font.",
            expectedAnswer: "@import\\s+url\\([^)]+\\)|@font-face\\s*\\{[^}]*\\}|font-family\\s*:[^}]*['\"](?!serif|sans-serif|monospace)[^'\"]+['\"]",
            hint: "Use @import for Google Fonts or @font-face for custom fonts",
            htmlStructure: "<p class='custom-font'>This text should use a custom font</p>"
        },
        {
            title: "Variables",
            instructions: "Define and use CSS variables (--main-color).",
            expectedAnswer: ":root\\s*\\{[^}]*--[^}]*\\}.*var\\(--[^)]+\\)",
            hint: "Use :root { --main-color: value; } and var(--main-color)",
            htmlStructure: "<div class='variable-styled'>This element uses CSS variables</div>"
        },
        {
            title: "Clip Path",
            instructions: "Create a circle-shaped image using clip-path.",
            expectedAnswer: "[^}]*\\{[^}]*clip-path\\s*:\\s*circle[^}]*\\}",
            hint: "Use clip-path: circle(50%);",
            htmlStructure: "<img src='https://via.placeholder.com/200' class='clipped' alt='Clipped image'>"
        },
        {
            title: "Flex-wrap and Gap",
            instructions: "Create a responsive flex container with wrapping.",
            expectedAnswer: "[^}]*\\{[^}]*display\\s*:\\s*flex[^}]*flex-wrap\\s*:\\s*wrap[^}]*gap\\s*:[^}]*\\}",
            hint: "Use display: flex; flex-wrap: wrap; and gap properties",
            htmlStructure: "<div class='flex-wrap'><div>Item 1</div><div>Item 2</div><div>Item 3</div><div>Item 4</div></div>"
        },
        {
            title: "Grid Template Areas",
            instructions: "Design a layout using named grid areas.",
            expectedAnswer: "[^}]*\\{[^}]*grid-template-areas\\s*:[^}]*\\}.*grid-area\\s*:[^}]*",
            hint: "Use grid-template-areas and grid-area properties",
            htmlStructure: "<div class='grid-areas'><header>Header</header><nav>Nav</nav><main>Main</main><footer>Footer</footer></div>"
        },
        {
            title: "Responsive Design",
            instructions: "Use vw, vh, % units for fluid layouts.",
            expectedAnswer: "[^}]*\\{[^}]*(\\d+vw|\\d+vh|\\d+%)[^}]*\\}",
            hint: "Use viewport units (vw, vh) and percentage units",
            htmlStructure: "<div class='fluid'>This element should use fluid units</div>"
        },
        {
            title: "Dark Mode Toggle",
            instructions: "Use data-theme and CSS variables to implement dark mode.",
            expectedAnswer: "\\[data-theme=['\"]dark['\"]\\]\\s*\\{[^}]*--[^}]*\\}",
            hint: "Use [data-theme='dark'] selector with CSS variables",
            htmlStructure: "<div data-theme='dark' class='theme-container'>Dark mode content</div>"
        },
        {
            title: "Custom Scrollbar",
            instructions: "Style the browser scrollbar using pseudo-elements.",
            expectedAnswer: "::-webkit-scrollbar[^{]*\\{[^}]*\\}",
            hint: "Use ::-webkit-scrollbar pseudo-elements",
            htmlStructure: "<div class='scrollable'>Long content that scrolls... ".repeat(20) + "</div>"
        },
        {
            title: "Backdrop Filter",
            instructions: "Add blur effect behind a modal using backdrop-filter.",
            expectedAnswer: "[^}]*\\{[^}]*backdrop-filter\\s*:\\s*blur[^}]*\\}",
            hint: "Use backdrop-filter: blur(10px);",
            htmlStructure: "<div class='modal-backdrop'><div class='modal'>Modal content with backdrop blur</div></div>"
        }
    ]
};

// Progress tracking
let progress = {
    beginner: 0,
    intermediate: 0,
    advanced: 0
};

// Current active editor
let activeEditor = 'css';

// Theme management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
}

function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
    const themeIcon = document.querySelector('.theme-icon');
    if (themeIcon) {
        themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
}

// Progress management
function updateProgress() {
    const levels = ['beginner', 'intermediate', 'advanced'];
    let totalCompleted = 0;
    
    levels.forEach(level => {
        const progressBar = document.getElementById(`${level}Progress`);
        const progressText = progressBar.parentElement.nextElementSibling;
        const completed = progress[level];
        const total = tasks[level].length;
        
        progressBar.style.width = `${(completed / total) * 100}%`;
        progressBar.setAttribute('data-progress', (completed / total) * 100);
        progressText.textContent = `${completed}/${total} completed`;
        
        totalCompleted += completed;
    });
    
    // Update certificate status
    updateCertificateStatus(totalCompleted);
}

function updateCertificateStatus(completed) {
    const certificateStatus = document.getElementById('certificateStatus');
    const certificateGenerator = document.getElementById('certificateGenerator');
    
    if (completed === 30) {
        certificateStatus.innerHTML = '<div class="lock-icon">🏆</div><span>30/30 Tasks Completed - Certificate Available!</span>';
        certificateGenerator.style.display = 'block';
    } else {
        certificateStatus.innerHTML = `<div class="lock-icon">🔒</div><span>${completed}/30 Tasks Completed</span>`;
        certificateGenerator.style.display = 'none';
    }
}

// Tab switching
function switchTab(tabName) {
    const htmlTab = document.getElementById('htmlTab');
    const cssTab = document.getElementById('cssTab');
    const htmlEditor = document.getElementById('htmlEditor');
    const cssEditor = document.getElementById('cssEditor');
    
    if (tabName === 'html') {
        htmlTab.classList.add('active');
        cssTab.classList.remove('active');
        htmlEditor.style.display = 'block';
        cssEditor.style.display = 'none';
        activeEditor = 'html';
    } else {
        cssTab.classList.add('active');
        htmlTab.classList.remove('active');
        cssEditor.style.display = 'block';
        htmlEditor.style.display = 'none';
        activeEditor = 'css';
    }
}

// Task management
function startTask(level, taskIndex) {
    const task = tasks[level][taskIndex];
    const mainContent = document.getElementById('mainContent');
    const editorInterface = document.getElementById('editorInterface');
    const taskInstructions = document.getElementById('taskInstructions');
    const htmlEditor = document.getElementById('htmlEditor');
    const cssEditor = document.getElementById('cssEditor');
    const backToMain = document.getElementById('backToMain');
    const previewPanel = document.getElementById('previewPanel');
    
    console.log('Starting task:', level, taskIndex, task);
    
    // Show editor interface
    mainContent.style.display = 'none';
    editorInterface.style.display = 'block';
    backToMain.style.display = 'block';
    
    // Always show preview panel
    previewPanel.style.display = 'flex';
    
    // Set task instructions
    taskInstructions.innerHTML = `
        <h3>${task.title}</h3>
        <p><strong>Instructions:</strong> ${task.instructions}</p>
        <p><strong>Hint:</strong> ${task.hint}</p>
    `;
    
    // Set up HTML structure
    htmlEditor.value = task.htmlStructure || '<div>Your HTML structure here</div>';
    
    // Clear CSS editor
    cssEditor.value = '';
    
    // Start with CSS tab active
    switchTab('css');
    
    // Store current task info
    window.currentTask = { level, taskIndex };
    
    // Update task status
    updateTaskStatus(level, taskIndex, 'in-progress');
    
    // Set up live preview
    setupLivePreview();
}

function setupLivePreview() {
    const htmlEditor = document.getElementById('htmlEditor');
    const cssEditor = document.getElementById('cssEditor');
    
    // Remove existing event listeners
    htmlEditor.removeEventListener('input', updatePreview);
    cssEditor.removeEventListener('input', updatePreview);
    
    // Add new event listeners
    htmlEditor.addEventListener('input', updatePreview);
    cssEditor.addEventListener('input', updatePreview);
    
    // Initial preview update
    updatePreview();
}

function updatePreview() {
    const htmlCode = document.getElementById('htmlEditor').value;
    const cssCode = document.getElementById('cssEditor').value;
    const previewFrame = document.getElementById('previewFrame');
    
    // Create HTML document for preview
    const htmlDocument = `
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="UTF-8">
            <title>Live Preview</title>
            <style>
                body { 
                    font-family: Arial, sans-serif; 
                    margin: 20px; 
                    background: white;
                    color: #333;
                    padding: 20px;
                }
                /* User CSS */
                ${cssCode}
            </style>
        </head>
        <body>
            ${htmlCode || '<p style="color: #999; font-style: italic;">Add HTML structure and CSS styles to see the live preview...</p>'}
        </body>
        </html>
    `;
    
    // Update preview
    previewFrame.srcdoc = htmlDocument;
}

function updateTaskStatus(level, taskIndex, status) {
    const statusElement = document.getElementById(`${level}-${taskIndex}-status`);
    if (statusElement) {
        statusElement.textContent = status === 'completed' ? 'Completed' : 
                                   status === 'in-progress' ? 'In Progress' : 'Not Started';
        statusElement.className = `task-status ${status}`;
    }
}

function runCode() {
    // The preview is already live, but we can add a visual indication that code was run
    const runBtn = document.getElementById('runCode');
    const originalText = runBtn.textContent;
    
    runBtn.textContent = '✓ Running...';
    runBtn.style.background = '#38a169';
    
    setTimeout(() => {
        runBtn.textContent = originalText;
        runBtn.style.background = '';
    }, 1000);
    
    // Update preview (though it's already updating live)
    updatePreview();
}

function validateCode() {
    const cssCode = document.getElementById('cssEditor').value.trim();
    const validationResult = document.getElementById('validationResult');
    const currentTask = window.currentTask;
    
    console.log('Validating CSS code:', cssCode, 'Current task:', currentTask);
    
    if (!currentTask) {
        console.log('No current task found');
        return;
    }
    
    const task = tasks[currentTask.level][currentTask.taskIndex];
    const expectedRegex = new RegExp(task.expectedAnswer, 'is');
    
    // Remove extra whitespace and normalize code for comparison
    const normalizedCode = cssCode.replace(/\s+/g, ' ').trim();
    
    console.log('Expected regex:', task.expectedAnswer);
    console.log('Normalized code:', normalizedCode);
    console.log('Regex test result:', expectedRegex.test(normalizedCode));
    
    if (expectedRegex.test(normalizedCode)) {
        // Task completed successfully
        validationResult.innerHTML = '✅ Great job! Your CSS matches the requirements.';
        validationResult.className = 'validation-result success';
        validationResult.style.display = 'block';
        
        // Update progress
        progress[currentTask.level] = Math.max(progress[currentTask.level], currentTask.taskIndex + 1);
        updateTaskStatus(currentTask.level, currentTask.taskIndex, 'completed');
        updateProgress();
        
        // Save progress
        saveProgress();
        
        // Auto-hide validation result after 3 seconds
        setTimeout(() => {
            validationResult.style.display = 'none';
        }, 3000);
        
    } else {
        // Task not completed
        validationResult.innerHTML = '❌ Your CSS doesn\'t match the requirements. Please try again!';
        validationResult.className = 'validation-result error';
        validationResult.style.display = 'block';
        
        // Auto-hide validation result after 5 seconds
        setTimeout(() => {
            validationResult.style.display = 'none';
        }, 5000);
    }
}

function backToTasks() {
    const mainContent = document.getElementById('mainContent');
    const editorInterface = document.getElementById('editorInterface');
    const validationResult = document.getElementById('validationResult');
    const backToMain = document.getElementById('backToMain');
    const htmlEditor = document.getElementById('htmlEditor');
    const cssEditor = document.getElementById('cssEditor');
    
    // Hide editor interface
    editorInterface.style.display = 'none';
    mainContent.style.display = 'block';
    backToMain.style.display = 'none';
    
    // Hide validation result
    validationResult.style.display = 'none';
    
    // Remove live preview event listeners
    htmlEditor.removeEventListener('input', updatePreview);
    cssEditor.removeEventListener('input', updatePreview);
    
    // Clear current task
    window.currentTask = null;
}

// Certificate generation with high quality using 3.png template
function generateCertificate() {
    const userName = document.getElementById('userName').value || 'John Doe';
    const generatedCertificate = document.getElementById('generatedCertificate');
    const canvas = document.getElementById('certificateCanvas');
    const ctx = canvas.getContext('2d');
    
    console.log('Generating certificate for:', userName);
    
    // Set high-resolution canvas for crisp output
    const scale = window.devicePixelRatio || 2;
    const width = 1200;
    const height = 900;
    
    // Set actual canvas size
    canvas.width = width * scale;
    canvas.height = height * scale;
    
    // Scale the canvas back down using CSS
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    
    // Scale the drawing context so everything draws at the higher resolution
    ctx.scale(scale, scale);
    
    // Enable anti-aliasing for smoother text
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    
    // Show the certificate section
    generatedCertificate.style.display = 'block';
    
    // Load the certificate template (3.png)
    const img = new Image();
    img.crossOrigin = "anonymous"; // Enable cross-origin for better compatibility
    
    img.onload = function() {
        console.log('Certificate template loaded');
        // Clear canvas and draw template
        ctx.clearRect(0, 0, width, height);
        
        // Draw image with high quality
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';
        ctx.drawImage(img, 0, 0, width, height);
        
        // Add user name with high-quality text rendering
        ctx.font = 'bold 48px "Inter", Arial, sans-serif'; // Increased font size and better font
        ctx.fillStyle = '#2d3748';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Add text shadow for better visibility
        ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 4;
        
        ctx.fillText(userName, width / 2, 450); // Adjusted position for larger canvas
        
        // Reset shadow
        ctx.shadowColor = 'transparent';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
        
        // Add current date with high quality
        const currentDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        ctx.font = '24px "Inter", Arial, sans-serif'; // Increased font size
        ctx.fillStyle = '#666';
        ctx.fillText(`Completed on ${currentDate}`, width / 2, 720); // Adjusted position
    };
    
    img.onerror = function() {
        console.error('Failed to load certificate template');
        // Create a high-quality fallback certificate
        ctx.clearRect(0, 0, width, height);
        
        // Background with gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, '#f8f9fa');
        gradient.addColorStop(1, '#e9ecef');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
        
        // Decorative border
        ctx.strokeStyle = '#2965f1';
        ctx.lineWidth = 8;
        ctx.strokeRect(40, 40, width - 80, height - 80);
        
        // Inner border
        ctx.strokeStyle = '#1e4ed8';
        ctx.lineWidth = 4;
        ctx.strokeRect(60, 60, width - 120, height - 120);
        
        // Title with shadow
        ctx.fillStyle = '#2965f1';
        ctx.font = 'bold 72px "Inter", Arial, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        ctx.shadowColor = 'rgba(0, 0, 0, 0.2)';
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.shadowBlur = 6;
        
        ctx.fillText('Certificate of Completion', width / 2, 180);
        
        // Subtitle
        ctx.font = '36px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#1e4ed8';
        ctx.fillText('CSS Learning Platform', width / 2, 240);
        
        // Reset shadow for user name
        ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.shadowBlur = 4;
        
        // User name
        ctx.font = 'bold 48px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#2d3748';
        ctx.fillText(userName, width / 2, 450);
        
        // Description
        ctx.shadowColor = 'transparent';
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
        
        ctx.font = '28px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#4a5568';
        ctx.fillText('has successfully completed all 30 CSS learning tasks', width / 2, 510);
        
        // Achievement badge
        ctx.font = '24px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#48bb78';
        ctx.fillText('★ Outstanding Achievement ★', width / 2, 570);
        
        // Date
        const currentDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        ctx.font = '24px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#666';
        ctx.fillText(`Completed on ${currentDate}`, width / 2, 720);
        
        // Signatures placeholder
        ctx.font = '20px "Inter", Arial, sans-serif';
        ctx.fillStyle = '#888';
        ctx.fillText('CSS Learning Platform', width / 2, 780);
        
        // Decorative elements with CSS colors
        ctx.fillStyle = '#2965f1';
        ctx.beginPath();
        ctx.arc(150, 150, 30, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(width - 150, 150, 30, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(150, height - 150, 30, 0, 2 * Math.PI);
        ctx.fill();
        
        ctx.beginPath();
        ctx.arc(width - 150, height - 150, 30, 0, 2 * Math.PI);
        ctx.fill();
    };
    
    // Try to load the certificate template (3.png)
    img.src = '3.png';
}

function downloadCertificate(format) {
    const canvas = document.getElementById('certificateCanvas');
    const userName = document.getElementById('userName').value || 'John Doe';
    
    console.log('Downloading certificate as:', format);
    
    if (format === 'pdf') {
        // For PDF, use high-quality PNG conversion
        const imgData = canvas.toDataURL('image/png', 1.0);
        
        // Create a new window with the image for printing as PDF
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>Certificate - ${userName}</title>
                    <style>
                        @media print {
                            body { margin: 0; }
                            img { max-width: 100%; height: auto; page-break-inside: avoid; }
                        }
                    </style>
                </head>
                <body style="margin:0; display:flex; justify-content:center; align-items:center; min-height:100vh;">
                    <img src="${imgData}" style="max-width:100%; height:auto;">
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
        return;
    }
    
    // For image formats, use maximum quality
    let mimeType, quality;
    if (format === 'png') {
        mimeType = 'image/png';
        quality = 1.0;
    } else {
        mimeType = 'image/jpeg';
        quality = 0.95;
    }
    
    const link = document.createElement('a');
    link.download = `css-certificate-${userName.replace(/\s+/g, '-').toLowerCase()}.${format}`;
    link.href = canvas.toDataURL(mimeType, quality);
    link.click();
}

// Save progress to localStorage
function saveProgress() {
    const progressData = {
        progress: progress,
        timestamp: new Date().toISOString(),
        version: '1.0'
    };
    localStorage.setItem('cssLearningProgress', JSON.stringify(progressData));
    console.log('Progress saved:', progressData);
}

// Load progress from localStorage
function loadProgress() {
    const savedData = localStorage.getItem('cssLearningProgress');
    if (savedData) {
        try {
            const parsedData = JSON.parse(savedData);
            
            if (parsedData.progress) {
                progress = parsedData.progress;
                console.log('Progress loaded (new format):', parsedData);
            } else {
                progress = parsedData;
                console.log('Progress loaded (old format):', parsedData);
            }
            
            // Update task statuses
            Object.keys(progress).forEach(level => {
                for (let i = 0; i < progress[level]; i++) {
                    updateTaskStatus(level, i, 'completed');
                }
            });
        } catch (error) {
            console.error('Error loading progress:', error);
            progress = { beginner: 0, intermediate: 0, advanced: 0 };
        }
    }
}

// Reset progress function
function resetProgress() {
    if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
        progress = { beginner: 0, intermediate: 0, advanced: 0 };
        localStorage.removeItem('cssLearningProgress');
        
        // Reset all task statuses
        Object.keys(tasks).forEach(level => {
            tasks[level].forEach((task, index) => {
                updateTaskStatus(level, index, 'not-started');
            });
        });
        
        updateProgress();
        console.log('Progress reset');
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    
    // Initialize theme
    initializeTheme();
    
    // Load saved progress
    loadProgress();
    
    // Initialize progress display
    updateProgress();
    
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
        console.log('Theme toggle listener added');
    }
    
    // Back to home button
    const backToHomeBtn = document.getElementById('backToHome');
    if (backToHomeBtn) {
        backToHomeBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
        console.log('Back to home button listener added');
    }
    
    // Tab switching
    const htmlTab = document.getElementById('htmlTab');
    const cssTab = document.getElementById('cssTab');
    
    if (htmlTab) {
        htmlTab.addEventListener('click', () => switchTab('html'));
    }
    
    if (cssTab) {
        cssTab.addEventListener('click', () => switchTab('css'));
    }
    
    // Task start buttons
    document.querySelectorAll('.start-task-btn').forEach(button => {
        button.addEventListener('click', function() {
            const taskCard = this.closest('.task-card');
            const level = taskCard.getAttribute('data-level');
            const taskIndex = parseInt(taskCard.getAttribute('data-task'));
            startTask(level, taskIndex);
        });
    });
    
    // Editor actions
    const runCodeBtn = document.getElementById('runCode');
    const validateCodeBtn = document.getElementById('validateCode');
    const backToTasksBtn = document.getElementById('backToTasks');
    const backToMainBtn = document.getElementById('backToMain');
    
    if (runCodeBtn) {
        runCodeBtn.addEventListener('click', runCode);
        console.log('Run code button listener added');
    }
    
    if (validateCodeBtn) {
        validateCodeBtn.addEventListener('click', validateCode);
        console.log('Validate code button listener added');
    }
    
    if (backToTasksBtn) {
        backToTasksBtn.addEventListener('click', backToTasks);
        console.log('Back to tasks button listener added');
    }
    
    if (backToMainBtn) {
        backToMainBtn.addEventListener('click', backToTasks);
        console.log('Back to main button listener added');
    }
    
    // Certificate generation
    const generateCertBtn = document.getElementById('generateCertificate');
    if (generateCertBtn) {
        generateCertBtn.addEventListener('click', generateCertificate);
        console.log('Generate certificate button listener added');
    }
    
    console.log('All event listeners initialized');
});

// Add keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + Enter to validate code
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        if (window.currentTask) {
            validateCode();
        }
    }
    
    // Escape to go back to tasks
    if (e.key === 'Escape') {
        if (window.currentTask) {
            backToTasks();
        }
    }
    
    // Ctrl/Cmd + 1 for HTML tab, Ctrl/Cmd + 2 for CSS tab
    if ((e.ctrlKey || e.metaKey) && e.key === '1') {
        e.preventDefault();
        switchTab('html');
    }
    
    if ((e.ctrlKey || e.metaKey) && e.key === '2') {
        e.preventDefault();
        switchTab('css');
    }
});
