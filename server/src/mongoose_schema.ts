// import mongoose, {
//   Document, Schema, model, Model,
// } from 'mongoose';
// import { composeWithMongoose } from 'graphql-compose-mongoose';

// // const url = 'mongodb://localhost:27017/tayllo';

// // const db = mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true });

// // db.once('open', () => {
// //   console.log('Database connected:', url);
// // });

// // db.on('error', (err: Error) => {
// //   console.error('connection error:', err);
// // });

// interface IAccount extends Document {
//   _id: number;
//   userName: string;
//   password: string;
//   decks: [_id: number];
// }

// interface IDeck extends Document {
//   _id: number;
//   deckTitle: string;
//   categories:[{
//     categoryTitle: string,
//     cards: [_id: number],
//   }],
// }

// interface ICard extends Document {
//   _id: number;
//   cardTitle: string;
//   creationDate: mongoose.Date;
//   content: string;
// }

// const AccountSchema: Schema = new Schema({
//   _id: { type: Number, require: true },
//   userName: String,
//   password: String,
//   decks: [{
//     type: Number,
//     ref: 'Deck',
//   }],
// });

// const DeckSchema = new Schema({
//   _id: { type: Number, require: true },
//   deckTitle: String,
//   categories: [{
//     categoryTitle: String,
//     cards: [{
//       type: Number,
//       ref: 'Card',
//     }],
//   }],
// });

// const CardSchema = new Schema({
//   _id: { type: Number, require: true },
//   cardTitle: String,
//   creationDate: Date,
//   content: String,
// });

// export const Account: Model<IAccount> = model('Account', AccountSchema);
// export const AccountTC = composeWithMongoose(model('Account', AccountSchema));

// export const Deck: Model<IDeck> = model('Deck', DeckSchema);
// export const DeckTC = composeWithMongoose(model('Deck', DeckSchema));

// export const Card: Model<ICard> = model('Card', CardSchema);
// export const CardTC = composeWithMongoose(model('Card', CardSchema));

// // const testAccount = new Account({
// //   _id: new mongoose.Types.ObjectId(),
// //   userName: 'test1',
// //   password: 'test1pass',
// // });
