
// JavaScript code will be added here
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

// Tab switching functionality
function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

// Login form submission
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Add login logic here
    showTab('assignment-list');
});

// CodeMirror initialization
const codeEditor = CodeMirror.fromTextArea(document.getElementById('code-editor'), {
    lineNumbers: true,
    mode: 'javascript',
    theme: 'default'
});

// Language selection
document.getElementById('language-select').addEventListener('change', (e) => {
    const language = e.target.value;
    let mode;
    switch (language) {
        case 'c':
            mode = 'text/x-csrc';
            break;
        case 'python':
            mode = 'python';
            break;
        case 'java':
            mode = 'text/x-java';
            break;
        default:
            mode = 'javascript';
    }
    codeEditor.setOption('mode', mode);
});

// Sample assignments data
const assignments = [
    { id: 1, name: 'Hello World', language: 'C', difficulty: 'Easy', timeLimit: '1 minute', description: 'Print "Hello, World!" to the console.' },
    { id: 2, name: 'Fibonacci Sequence', language: 'Python', difficulty: 'Medium', timeLimit: '5 minutes', description: 'Generate the Fibonacci sequence up to the nth term.' },
    { id: 3, name: 'Bubble Sort', language: 'Java', difficulty: 'Hard', timeLimit: '10 minutes', description: 'Implement the Bubble Sort algorithm.' },
];

// Populate assignment list
function populateAssignmentList(assignments) {
    const grid = document.getElementById('assignment-grid');
    grid.innerHTML = '';
    assignments.forEach(assignment => {
        const card = document.createElement('div');
        card.className = 'neumorphic p-4';
        card.innerHTML = `
            <h3 class="text-xl font-bold">${assignment.name}</h3>
            <p>Language: ${assignment.language}</p>
            <p>Difficulty: ${assignment.difficulty}</p>
            <p>Time Limit: ${assignment.timeLimit}</p>
            <button class="btn mt-2" onclick="startAssignment(${assignment.id})">Start</button>
        `;
        grid.appendChild(card);
    });
}

populateAssignmentList(assignments);

// Filter and search functionality
document.getElementById('language-filter').addEventListener('change', filterAssignments);
document.getElementById('search').addEventListener('input', filterAssignments);

function filterAssignments() {
    const languageFilter = document.getElementById('language-filter').value;
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredAssignments = assignments.filter(assignment => {
        const languageMatch = languageFilter === 'all' || assignment.language === languageFilter;
        const searchMatch = assignment.name.toLowerCase().includes(searchTerm) || 
                            assignment.description.toLowerCase().includes(searchTerm);
        return languageMatch && searchMatch;
    });
    populateAssignmentList(filteredAssignments);
}

// Start assignment
function startAssignment(id) {
    const assignment = assignments.find(a => a.id === id);
    document.getElementById('assignment-title').textContent = assignment.name;
    document.getElementById('assignment-description').textContent = assignment.description;
    document.getElementById('language-select').value = assignment.language;
    codeEditor.setValue('// Your code here');
    showTab('coding-environment');
}

// Run code
document.getElementById('run-code').addEventListener('click', () => {
    // Add code execution logic here
    alert('Code execution not implemented in this demo.');
});

// Reset code
document.getElementById('reset-code').addEventListener('click', () => {
    codeEditor.setValue('// Your code here');
});

// Submit code
document.getElementById('submit-code').addEventListener('click', () => {
    // Add code submission and grading logic here
    showTab('grading');
    document.getElementById('grading-status').textContent = 'Status: Success';
    document.getElementById('test-cases').innerHTML = '<p>Test Case 1: Passed</p><p>Test Case 2: Passed</p>';
    document.getElementById('performance').textContent = 'Score: 100';
});

// Retry
document.getElementById('retry').addEventListener('click', () => {
    showTab('coding-environment');
});

// Back to assignment list
document.getElementById('back-to-list').addEventListener('click', () => {
    showTab('assignment-list');
});