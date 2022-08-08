const express = require('express');
const app = express();


app.use(express.json());
const solvesRouter = require('./routes/number');
app.use('/number', solvesRouter);

port = 3000 || process.env.PORT;
app.listen(port, () => {console.log("Server is running on port " + port)});