
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemSchema = new Schema({
  name: String,
  phone: String,
  address: String
})

const Item = mongoose.model('item', ItemSchema)

module.exports = Item
