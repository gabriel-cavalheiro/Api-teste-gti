const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.get('/', (req, res) => res.json('up'));

app.listen(3333, () => console.log('Server running in port 3333'));
