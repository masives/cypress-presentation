const express = require('express');

var bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3010;

app.use(cors());
app.use(bodyParser.json());
app.post('/login', (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  if (username === 'admin' && password === 'admin') {
    res.status(200);
    res.send('someAuthToken');
  } else {
    res.status(401);
    res.send('Invalid credentials');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
