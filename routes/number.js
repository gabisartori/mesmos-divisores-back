const express = require('express');
const router = express.Router();

function P(n){
    var total = 0;
    for(var i = 1; i < n; i++){
        if (n%i == 0){
            total++;
        }
    }
    return total;
}

router.post('/:num', (req, res) => {
    try{
        let numbers = [];
        let coiso = req.params.num;
        for(var i = 0; i < coiso; i++){
            if (P(coiso) === P(i)){
                numbers.push(i);
            }
        }        
        res.status(200).json(numbers);
    }catch (err){
        res.status(500).json({message: err.message});
    }
})

module.exports = router;