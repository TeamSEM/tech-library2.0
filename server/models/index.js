const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Books = sequelize.define("books", {
  Title: Sequelize.STRING,
  Author: Sequelize.STRING,
  Image: Sequelize.STRING,
});

const Movies = sequelize.define('movies', {
  Title: Sequelize.STRING,
  Image: Sequelize.STRING
})

const Shows = sequelize.define('shows', {
  Title: Sequelize.STRING,
  Image: Sequelize.STRING
})

const Users = sequelize.define('users', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
})

module.exports = {
  db: sequelize,
  Books,
  Movies,
  Shows,
  Users
};
