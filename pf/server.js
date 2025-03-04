const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the current directory
app.use(express.static(__dirname));

// Always serve index.html for any route
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
}); 