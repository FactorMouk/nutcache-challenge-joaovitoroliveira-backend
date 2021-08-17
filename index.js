const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.listen(8000, () => {
    console.log('Server running on port 8000!');
});