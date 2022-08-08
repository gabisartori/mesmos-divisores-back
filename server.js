const express = require('express');
const app = express();


// app.use(express.json());
app.use(
    (req, res, next) => {
        res.setHeader("Access-Control-Allow-Origin", 'http://localhost:3000');
        next();
    }
)

const solvesRouter = require('./routes/number');
app.use('/number', solvesRouter);

port = 3001 || process.env.PORT;
app.listen(port, () => {console.log("Server is running on port " + port)});