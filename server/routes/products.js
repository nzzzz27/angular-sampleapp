const express = require("express");
const router = express.Router();
const Product = require("../model/product");

//productIdがない時
router.get('', (req, res) => {

    Product.find({}, (err, foundProducts) => {
        return res.json(foundProducts);
    })
    
})


//IDがある時 => IDに対応する商品データだけをDBから取得する
router.get('/:productId', (req, res) => {
    const productId = req.params.productId;

    Product.findById(productId, (err, foundProduct) => {
        
        if(err) {
            return res.status(422).send({
                errors: [{
                    title: "Product error",
                    detail: "Product is not found"
                }]
            })
        }

        return res.json(foundProduct);
    })
    
})

module.exports = router