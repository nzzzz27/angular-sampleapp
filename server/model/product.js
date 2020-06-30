const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const ObjectId = Schema.ObjectId;
 
const ProductShcema = new Schema({
  //入力必須項目
  name: { type: String, required: true, max:[60, '最大60文字までです'] },
  //任意入力
  price: Number,
  description: String,
  image: String
});

module.exports = mongoose.model('Product', ProductShcema);