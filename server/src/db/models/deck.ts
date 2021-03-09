import { ICategory } from './category';
import {
  Document, Schema, model, Model, Connection
} from 'mongoose';

export interface IDeck extends Document {
  _id: number;
  deckTitle: string;
  categories: [ICategory];
}

const DeckSchema = new Schema({
  deckTitle: String,
  categories: [{ type: Schema.Types.ObjectId, ref: 'category'}]
});

const Deck = (con: Connection): any => (con.model('deck', DeckSchema));
export default Deck;