import mongoose, { Model, Connection } from 'mongoose';
import { ApolloError } from 'apollo-server-micro';
import CardModel, { ICard } from '../../db/models/card';

export default {
  Query: {
    getAllCards: async (
      _parent: any,
      _args: any,
      { con }: { con: Connection },
    ): Promise<ICard[]> => {
      const CardDB: Model<ICard> = CardModel(con);
      let list: ICard[];
      try {
        list = await CardDB.find().exec();
      } catch (error) {
        console.error('get all cards error', error);
        throw new ApolloError('Error getings all Cards');
      }
      return list;
    },

    getCard: async (
      _parent: any,
      { _id }: { _id: ICard['_id'] },
      { con }: { con: mongoose.Connection },
    ): Promise<ICard> => {
      const CardDB: Model<ICard> = CardModel(con);

      try {
        const card = await CardDB.findById(_id).exec();
        if (card === null) throw new Error('null card');
        return card;
      } catch (error) {
        console.error('get card by id error -', error);
        throw new ApolloError('get card by id error');
      }
    },
  },

  Mutation: {
    saveCard: async (
      _parent: any,
      { cardTitle, content }: { cardTitle: ICard['cardTitle']; content: ICard['content'] },
      { con }: { con: Connection },
    ): Promise<ICard> => {
      const CardDB: Model<ICard> = CardModel(con);
      const dateTime = new Date().toLocaleString();
      console.log(typeof dateTime, dateTime);
      try {
        const Card = await CardDB.create({
          cardTitle,
          content,
          creationDate: dateTime,
        });
        return Card;
      } catch (error) {
        console.error('error saving card: ', error);
        throw new ApolloError('error saving new card');
      }
    },

    deleteCard: async (
      _parent: any,
      { _id }: { _id: ICard['_id'] },
      { con }: { con: mongoose.Connection },
    ): Promise<ICard> => {
      const CardDB: Model<ICard> = CardModel(con);
      try {
        const card = await CardDB.findByIdAndDelete(_id).exec();
        if (card === null) throw new Error('delete card - null Card');
        return card;
      } catch (error) {
        console.error('error deleting card', error);
        throw new ApolloError('error deleting card');
      }
    },
  },

};
