const express = require('express')
const app = express()
const path = require('path');
const PORT = process.env.PORT || 5000;


const cors = require('cors');
app.use(cors());


app.use(express.static(path.join(__dirname, '../frontend/dist')));


app.get('/api/students', (req, res) => {
  // // Static data
  const students = [
    { id: 1, name: 'Alice', grade: 'A' },
    { id: 2, name: 'Bob', grade: 'B' },
    { id: 3, name: 'Charlie', grade: 'C' }
  ];

  res.json(students);
});

// Wildcard route to serve index.html
app.get('/{*any}', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'));
});



// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
