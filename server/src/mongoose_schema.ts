import mongoose, { Document, Schema, model, Model } from 'mongoose';

const url = 'mongodb://localhost:27017/tayllo';

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection

db.once('open', () => {
  console.log('Database connected:', url);
});

db.on('error', (err: Error) => {
  console.error('connection error:', err);
});


interface IAccount extends Document {
  _id: Number;
  userName: String;
  password: String;
  deck: [_id: Number];
}

interface IDeck extends Document {
  _id: Number;
  deckTitle: String;
  categories:[{
    categoryTitle: String,
    cards: [_id: Number],
  }],
}

interface ICard extends Document {
  _id: Number;
  cardTitle: String;
  creationDate: mongoose.Date;
  content: String;
}

const AccountSchema: Schema = new Schema({
  _id: { type: Number, require: true },
  userName: String,
  password: String,
  deck_access: [{
    type: Number,
    ref: 'Deck',
  }],
});

const DeckSchema = new Schema({
  _id: { type: Number, require: true },
  deckTitle: String,
  categories: [{
    categoryTitle: String,
    cards: [{
      type: Number,
      ref: 'Card',
    }],
  }],
});

const CardSchema = new Schema({
  _id: { type: Number, require: true },
  cardTitle: String,
  creationDate: Date,
  content: String,
});


const Account: Model<IAccount> = model('Account', AccountSchema);
const Deck: Model<IDeck> = model('Deck', DeckSchema);
const Card: Model<ICard> = model('Card', CardSchema);

const testAccount = new Account({
  _id: new mongoose.Types.ObjectId(),
  userName: 'test1',
  password: 'test1pass',
});

export { Account, Deck, Card };
