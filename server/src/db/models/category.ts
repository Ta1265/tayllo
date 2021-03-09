import {
  Document, Schema, Connection, ObjectId
} from 'mongoose';
import { ICard } from './card';

export interface ICategory extends Document {
  categoryTitle: string;
  cards: [ICard];
}

const CategorySchema = new Schema({
  categoryTitle: String,
  cards: [{type: Schema.Types.ObjectId, ref: 'card'}],
});

const Category = (con: Connection): any => (con.model('category', CategorySchema));
export default Category;