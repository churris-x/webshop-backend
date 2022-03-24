const express = require('express');
const jsonParcer = express.json()
const cors = require('cors')

const app = express();
const port = 4010;

const productRouter = require("./routers/productRouter");
const categoryRouter = require("./routers/categoryRouter");

app.use(jsonParcer);
app.use(cors());
app.use("/products", productRouter);
app.use("/categories", categoryRouter);

app.listen(port, () => console.log(`Listening on ${port}`));
