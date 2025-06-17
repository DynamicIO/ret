const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the current directory
app.use(express.static('.'));

// Handle clean URLs
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about', 'index.html'));
});

app.get('/application', (req, res) => {
    res.sendFile(path.join(__dirname, 'application', 'index.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact', 'index.html'));
});

app.get('/faculty', (req, res) => {
    res.sendFile(path.join(__dirname, 'faculty', 'index.html'));
});

app.get('/faq', (req, res) => {
    res.sendFile(path.join(__dirname, 'faq', 'index.html'));
});

app.get('/research', (req, res) => {
    res.sendFile(path.join(__dirname, 'research', 'index.html'));
});

app.get('/alumni', (req, res) => {
    res.sendFile(path.join(__dirname, 'alumni', 'index.html'));
});

// Handle trailing slashes
app.get('/about/', (req, res) => {
    res.sendFile(path.join(__dirname, 'about', 'index.html'));
});

app.get('/application/', (req, res) => {
    res.sendFile(path.join(__dirname, 'application', 'index.html'));
});

app.get('/contact/', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact', 'index.html'));
});

app.get('/faculty/', (req, res) => {
    res.sendFile(path.join(__dirname, 'faculty', 'index.html'));
});

app.get('/faq/', (req, res) => {
    res.sendFile(path.join(__dirname, 'faq', 'index.html'));
});

app.get('/research/', (req, res) => {
    res.sendFile(path.join(__dirname, 'research', 'index.html'));
});

app.get('/alumni/', (req, res) => {
    res.sendFile(path.join(__dirname, 'alumni', 'index.html'));
});

// Catch all handler for 404
app.get('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log('Clean URLs are now working!');
}); 