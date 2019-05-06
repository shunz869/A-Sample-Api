import mongoose from 'mongoose';

const lastestItemSchema = new mongoose.Schema({
  name: String,
  description:Number,
  price: String,
  img:String,
});

const Lastest_item = mongoose.model('Lastest_item', lastestItemSchema);

export default Lastest_item;