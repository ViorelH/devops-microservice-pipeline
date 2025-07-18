const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/api', (req, res) => res.send('Hello from API!'));

app.listen(port, () => console.log(`API running on port ${port}`));
