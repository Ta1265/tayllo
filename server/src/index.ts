import 'dotenv';
import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import {Account, Deck, Card} from './mongoose_schema';

async function testDatabase() {
  const testAccount = await Account.create({
    _id: 3,
    userName: 'testaccount',
    passWord: 'testpassword',
    desks: [],
  });

  const account = await Account.findOne({_id: 1});
  console.log(account);
}


const server = new ApolloServer({ typeDefs });

server.listen().then(() => {
  console.log(`
    Server is running!
    Listening on port 4000
  `);
});

testDatabase();

