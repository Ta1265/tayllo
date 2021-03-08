import {
  Document, Schema, Connection,
} from 'mongoose';

export interface ICard extends Document {
  cardTitle: string;
  creationDate: string;
  content: string;
}

const CardSchema = new Schema({
  cardTitle: String,
  creationDate: String,
  content: String,
});

const Card = (con: Connection): any => con.model('card', CardSchema);

export default Card;
