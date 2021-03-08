import { Connection, createConnection } from 'mongoose';

const uri = 'mongodb://localhost:27017/tayllo';
let connection: Connection;

const getConnection = async (): Promise<Connection> => {
  if (!connection) {
    connection = await createConnection(uri, { useUnifiedTopology: true, useNewUrlParser: true });
  }
  return connection;
};
export default getConnection;
