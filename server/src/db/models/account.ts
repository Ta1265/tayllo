import {
  Document, Schema, model, Model,
} from 'mongoose';

export interface IAccount extends Document {
  _id: number;
  userName: string;
  password: string;
  decks: [_id: number];
}

const AccountSchema: Schema = new Schema({
  _id: { type: Number, require: true },
  userName: String,
  password: String,
  decks: [{
    type: Number,
    ref: 'Deck',
  }],
});

export const Account: Model<IAccount> = model('Account', AccountSchema);
