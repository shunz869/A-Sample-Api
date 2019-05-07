import mongoose from 'mongoose';

const lastestItemSchema = new mongoose.Schema({
  name: String,
  description:String,
  price: Number,
  img:String,
},{
  versionKey: false // You should be aware of the outcome after set to false
});

const Lastest_item = mongoose.model('Lastest_item', lastestItemSchema);

export default Lastest_item;