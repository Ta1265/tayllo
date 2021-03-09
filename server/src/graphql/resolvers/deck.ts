import { Model, Connection } from 'mongoose';
import { ApolloError } from 'apollo-server';
import DeckModel, {IDeck} from '../../db/models/deck';

export default {
  Query: {
    getAllDecks: async (
      _parent: any,
      _args: any,
      { con }: { con: Connection},
    ): Promise<IDeck[]> => {
      const DeckDB: Model<IDeck> = DeckModel(con);
      let decks: IDeck[];
      try {
        decks = await DeckDB.find().exec();
      } catch (error) {
        console.error('get all decks error', error);
        throw new ApolloError('Error getting all decks');
      }
      return decks;
    },

    getDeck: async (
      _parent: any,
      { _id }: { _id: IDeck['_id'] },
      { con }: { con: Connection },
    ): Promise<IDeck> => {
      const DeckDB: Model<IDeck> = DeckModel(con);
      try {
        const category = await DeckDB.findById(_id).exec();
        if (category === null) throw new Error('null Category');
        return category;
      } catch (error) {
        console.error('get category by id error -', error);
        throw new ApolloError('get category by id error');
      }
    }
  },

  Mutation: {
    saveDeck: async (
      _parent: any,
      { deckTitle }: { deckTitle: IDeck['deckTitle']},
      { con }: { con: Connection },
    ): Promise<IDeck> => {
      console.log('??');
      const DeckDB: Model<IDeck> = DeckModel(con);
      try {
        const deck = await DeckDB.create({
          deckTitle,
        });
        return deck;
      } catch (error) {
        console.error('error saving new deck - ', error);
        throw new ApolloError('error saving new deck');
      }
    },

    deleteDeck: async (
      _parent: any,
      { _id }: { _id: IDeck['_id']},
      { con }: { con: Connection },
    ): Promise<IDeck> => {
      const DeckDB: Model<IDeck> = DeckModel(con);
      try {
        const deck = await DeckDB.findByIdAndDelete(_id).exec();
        if (deck === null) throw new Error('delete deck null');
        return deck;
      } catch (error) {
        console.error('error deleting deck -', error);
        throw new ApolloError('error deleting deck');
      }
    }
  },
}