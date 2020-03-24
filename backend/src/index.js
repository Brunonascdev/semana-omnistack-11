const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

/* comando utilizado para o express entender json e converter para um objeto */
app.use(cors());
app.use(express.json());

app.use(routes);

app.listen(3333);
