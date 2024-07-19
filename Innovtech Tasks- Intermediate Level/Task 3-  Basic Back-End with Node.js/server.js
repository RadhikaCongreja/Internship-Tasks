const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Sample API endpoint
app.get('/api/posts', (req, res) => {
    res.json([
        { id: 1, title: 'First Post', body: 'This is the first post.' },
        { id: 2, title: 'Second Post', body: 'This is the second post.' },
    ]);
});

// Handle contact form submission
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Read existing data
    fs.readFile('contacts.json', (err, data) => {
        if (err && err.code !== 'ENOENT') {
            return res.status(500).json({ message: 'An error occurred while reading the file.' });
        }

        let contacts = [];
        if (data) {
            contacts = JSON.parse(data);
        }

        // Add new contact data
        contacts.push({ name, email, message });

        // Write updated data to file
        fs.writeFile('contacts.json', JSON.stringify(contacts, null, 2), (err) => {
            if (err) {
                return res.status(500).json({ message: 'An error occurred while saving the data.' });
            }
            res.json({ message: 'Thank you for your message!' });
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
