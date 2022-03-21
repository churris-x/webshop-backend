const express = require('express');
const jsonParser = express.json();

const app = express();
const port = 4010;

app.use(jsonParser);

app.listen(port, () => console.log(`Listening on ${port}`));
