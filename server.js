const http = require('http'); 
const fs = require('fs');
const path = require('path');

// Function to generate random temperature between 15°C and 35°C 
function generateRandomTemperature() {
    return Math.floor(Math.random() * (35 - 15 + 1) + 15); 
}

// Create a server
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile(path.join(__dirname, 'views', 'index.html'), 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading the HTML file');
            } else {
                // Generate a random temperature
                const temperature = generateRandomTemperature();
                console.log(temperature); 
                // Modify the HTML to display the temperature 
                const modifiedData = data.replace('{{temperature}}', temperature);
                // Set the content type 
                res.setHeader('Content-Type', 'text/html');
                // Send the modified HTML to the client
                res.end(modifiedData); 
            }
        });
    } else if (req.url === '/styles.css') {
        fs.readFile(path.join(__dirname, 'public', 'styles.css'), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading the CSS file');
            } else {
                res.setHeader('Content-Type', 'text/css');
                res.end(data);
            }
        });
    } else if (req.url === '/main.js') {
        fs.readFile(path.join(__dirname, 'public', 'main.js'), (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error loading the JavaScript file');
            } else {
                res.setHeader('Content-Type', 'application/javascript');
                res.end(data);
            }
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

// Start the server on port 3000 
server.listen(3000, () => {
    console.log('Server running on port 3000'); 
});