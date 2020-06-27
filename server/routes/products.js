const express = require("express");
const router = express.Router();
const Product = require("../model/product");

//全ての商品データをDBから取得する
router.get('', (req, res) => {

    Product.find({}, (err, foundProducts) => {
        return res.json(foundProducts);
    })
    
})


//IDに対応する商品データだけをDBから取得する
router.get('/:productId', (req, res) => {
    const productId = req.params.productId;

    //productIdがある時 => foundProductを返す
    //productIdがない時　=> errを返す
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