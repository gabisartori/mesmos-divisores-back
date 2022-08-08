const express = require('express');
const app = express();


// app.use(express.json());
app.use(
    (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    }
)

const solvesRouter = require('./routes/number');
app.use('/number', solvesRouter);

port = 3001 || process.env.PORT;
app.listen(port, () => {console.log("Server is running on port " + port)});