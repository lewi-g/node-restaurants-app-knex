const knex = require('knex')({
  client: 'pg',
  debug: true,
  connection:
  'postgres://xrxgebfs:HaSCi8Cui1yXnDDGREp7WHYra52gd8zF@babar.elephantsql.com:5432/xrxgebfs'});

// knex.select('id', 'name', 'borough', 'cuisine')
//   .from('restaurants')
//   .where( { borough: 'Manhattan'} )
//   .then(results => console.log(results));
//
// knex.select('id', 'name', 'borough', 'cuisine')
//     .from('restaurants')
//     .where({ borough: 'Manhattan' })
//     .limit(2)
//     .debug(true)
//     .then(results => console.log(JSON.stringify(results, null, 4)))
//     .catch( err => console.log( err ) );

// knex.select()
//   .table('restaurants')
//   .limit(3)
//   .then(results => console.log(JSON.stringify(results, null, 4)));

// knex.select()
//   .from('restaurants')
//   .where('cuisine', 'Italian')
//   .limit(3)
//   .then(results => console.log(JSON.stringify(results, null, 4)));
//
// knex.select('id', 'name')
//   .from('restaurants')
//   .where('cuisine', 'Italian')
//   .limit(10)
//   .then(results => console.log(JSON.stringify(results, null, 4)));

// knex.select()
//   .from('restaurants')
//   .where('cuisine', 'Thai')
//   .count('cuisine')
//   .then(results => console.log(JSON.stringify(results, null, 4)));

// knex.select()
//   .from('restaurants')
//   .count()
//   .then(results => console.log(JSON.stringify(results, null, 4)));

// knex.select()
//   .from('restaurants')
//   .where({
//     'cuisine': 'Thai',
//     'address_zipcode': 11372
//   })
//   .count()
//   .then(results => console.log(JSON.stringify(results, null, 4)));

// knex.select('id', 'name')
//   .from('restaurants')
//   // .where({
//   //   'cuisine': 'Italian',
//   //   'address_zipcode': 10012, 10013, 10014
//   // })
//   .where('cuisine', 'Italian')
//   .whereIn('address_zipcode', [10012, 10013, 10014])
//   .limit(5)
//   .orderBy('name', 'desc')
//   .then(results => console.log(JSON.stringify(results, null, 4)));
//

// knex('restaurants')
//   .insert({
//     'name': 'Byte Cafe',
//     'borough': 'Brooklyn',
//     'cuisine': 'coffee',
//     'address_building_number': '123',
//     'address_street': 'Atlantic Avenue',
//     'address_zipcode': '11231'
//   })
//   .returning(['id', 'name'])
//   .then(results => console.log(JSON.stringify(results, null, 4)));

// knex('restaurants')
  // .returning(['id', 'name'])
  // .insert([{
  //   'name': `Scott's Place`,
  //   'borough': 'Bronx',
  //   'cuisine': 'coffee',
  //   'address_building_number': '124',
  //   'address_street': '168th',
  //   'address_zipcode': '11232'
  // },{
  //   'name': 'Boo Cafe',
  //   'borough': 'Brooklyn',
  //   'cuisine': 'coffee',
  //   'address_building_number': '123',
  //   'address_street': 'Atlantic Avenue',
  //   'address_zipcode': '11231'
  // },{
  //   'name': 'Cafe Cafe',
  //   'borough': 'Brooklyn',
  //   'cuisine': 'coffee',
  //   'address_building_number': '123',
  //   'address_street': 'Atlantic Avenue',
  //   'address_zipcode': '11231'
  // }])
  // .then(results => console.log(JSON.stringify(results, null, 4)));

// knex('restaurants')
//   .where('nyc_restaurant_id', 30191841)
//   .update({'name':'DJ Reynolds Pub and Restaurant'})
//   .then(results => console.log(JSON.stringify(results, null, 4)));

// knex('grades')
//   .where('id', 10)
//   .del()
//   .then(results => console.log(JSON.stringify(results, null, 4)));

knex('restaurants')
  .where('id', 22)
  .del()
  .then(results => console.log(JSON.stringify(results, null, 4)));


