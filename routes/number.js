const express = require('express');
const router = express.Router();

function P(n){
    var total = 0;
    for(var i = 1; i <= n; i++){
        if (n%i == 0){
            total++;
        }
    }
    return total;
}

router.get('/:num', (req, res) => {
    let start = new Date();
    try{
        let numbers = [];
        let total = 0;
        let k = req.params.num;
        for(var i = 0; i < k; i++){
            if (P(i) === P(i+1)){
                numbers.push(i);
                total++;
            }
        }        
        //res.status(200).json([numbers, total]);
        let end = new Date();
        res.status(200).json([total, end.getTime() - start.getTime()]);
    }catch (err){
        res.status(500).json({message: err.message});
    }
})

module.exports = router;