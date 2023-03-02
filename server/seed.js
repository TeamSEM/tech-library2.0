const {books, movies, shows} = require('./seedData.js');

const {sequelize} = require('./db');
const {Books, Movies, Shows } = require('./models');


const seed = async () => {

    try {
        // drop and recreate tables per model definitions
        await sequelize.sync({ force: true });
    
        // insert data
        await Promise.all(books.map(books => Books.create(books)));
        await Promise.all(movies.map(movies => Movies.create(movies)))
        await Promise.all(shows.map(shows => Shows.create(shows)))

        console.log("db populated!");
    } catch (error) {
        console.error(error);
    }
}

seed();
