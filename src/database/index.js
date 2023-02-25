const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const ToDo = require('../models/ToDo');

const connection = new Sequelize(dbConfig);

connection.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });

ToDo.init(connection);

// const todo_data = [
//    {id: 1, title : "John Baker", isDone: true},
//    {id: 2, title : "Max Butler", isDone: true},
//    {id: 3, title : "Ryan Fisher", description: "Man"},
//    {id: 4, title : "Robert Gray", description: "Man"},
//    {id: 5, title : "Sam Lewis", isDone: true}
//  ]

// connection.sync({ force: true }).then(() => {
//    console.log('ToDo table created successfully!');
//    ToDo.bulkCreate(todo_data, { validate: true }).then(() => {
//       ToDo.findAll().then(result => {
//           console.log(result)
//       }).catch((error) => {
//           console.error('Failed to retrieve data : ', error);
//       });
//     }).catch((err) => { console.log(err); });
//  }).catch((error) => {
//     console.error('Unable to create table : ', error);
//  });

module.exports = connection;