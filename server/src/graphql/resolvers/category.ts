import { Model, Connection } from 'mongoose';
import { ApolloError } from 'apollo-server';
import CategoryModel, {ICategory} from '../../db/models/category';
import Category from '../../db/models/category';

export default {
  Query: {
    getAllCategories: async (
      _parent: any,
      _args: any,
      { con }: { con: Connection},
    ): Promise<ICategory[]> => {
      const CatDB: Model<ICategory> = CategoryModel(con);
      let categories: ICategory[];
      try {
        categories = await CatDB.find().exec();
      } catch (error) {
        console.error('get all categories error', error);
        throw new ApolloError('Error getting all categories');
      }
      return categories;
    },

    getCategory: async (
      _parent: any,
      { _id }: { _id: ICategory['_id'] },
      { con }: { con: Connection },
    ): Promise<ICategory> => {
      const CatDB: Model<ICategory> = CategoryModel(con);
      try {
        const category = await CatDB.findById(_id).exec();
        if (category === null) throw new Error('null Category');
        return category;
      } catch (error) {
        console.error('get category by id error -', error);
        throw new ApolloError('get category by id error');
      }
    }
  },

  Mutation: {
    saveCategory: async (
      _parent: any,
      { categoryTitle }: { categoryTitle: ICategory['categoryTitle']},
      { con }: { con: Connection },
    ): Promise<ICategory> => {
      console.log('??');
      const CatDB: Model<ICategory> = CategoryModel(con);
      try {
        const category = await CatDB.create({
          categoryTitle,
        });
        return category;
      } catch (error) {
        console.error('error saving new category - ', error);
        throw new ApolloError('error saving new category');
      }
    },

    deleteCategory: async (
      _parent: any,
      { _id }: { _id: ICategory['_id']},
      { con }: { con: Connection },
    ): Promise<ICategory> => {
      const CatDB: Model<ICategory> = CategoryModel(con);
      try {
        const category = await CatDB.findByIdAndDelete(_id).exec();
        if (category === null) throw new Error('delete category null');
        return category;
      } catch (error) {
        console.error('error deleting category -', error);
        throw new ApolloError('error deleting category');
      }
    }
  },
};