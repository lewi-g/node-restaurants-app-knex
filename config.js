

// const DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL || 'postgresql://dev:dev@localhost/todos-app';

// postgres://USERNAME:PASSWORD@stampy.db.elephantsql.com:5432/DATABASE

exports.DATABASE = {
  client: 'pg',
  // connection: DATABASE_URL,
  debug: true,
  connection:
  'postgres://xrxgebfs:HaSCi8Cui1yXnDDGREp7WHYra52gd8zF@babar.elephantsql.com:5432/xrxgebfs'
};

  

exports.PORT = process.env.PORT || 8080; 



// Require Knex and make connection
const knex = require('knex')({
  client: 'pg',
   connection:
  'postgres://xrxgebfs:HaSCi8Cui1yXnDDGREp7WHYra52gd8zF@babar.elephantsql.com:5432/xrxgebfs'
});

//   connection: {
//     database: 'dev-restaurants-app'
//   },
// });

// If you're using ElephantSQL then the connection will look like this
/*
const knex = require('knex')({
  client: 'pg',
  connection:'postgres://USERNAME:PASSWORD@stampy.db.elephantsql.com:5432/DATABASE'
}
*/
