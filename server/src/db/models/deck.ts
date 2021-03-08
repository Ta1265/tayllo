import {
  Document, Schema, model, Model,
} from 'mongoose';

export interface IDeck extends Document {
  _id: number;
  deckTitle: string;
  categories:[{
    categoryTitle: string,
    cards: [_id: number],
  }],
}

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

export const Deck: Model<IDeck> = model('Deck', DeckSchema);
