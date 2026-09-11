const mongoose = require('mongoose');
let dbConfig = require('./db.config');
async function main() {
    let conString = `${dbConfig.HOST}/${dbConfig.DB}`;
    console.log(`connect to ${conString}`);
    await mongoose.connect(`${conString}`);
}

//create movie schema
//??
//??
//??
//create movie model based on schema
//??

//call connection
main().catch(err => console.log(err))

//create function run with queries
async function run(){
    //select first 10 movies
//??
//??
//??
//??

    //select first 10 movies, where title contains string "Black".
    //show as result columns title, genres, casts
    await Movies
        .find({title: /Black/},{_id:0,title:1, genres:1, casts:1})
        .limit(10)
        .then(result => {
            console.log(result)
        })
        .catch(err => console.log(err));

    //show all possible ratings
    await Movies.distinct("rated")
        .then(result => {
            console.log(result)
        })
        .catch(err => console.log(err));

    //close connection
    await mongoose.connection.close()
    }
//execute run function
run().catch(err => console.log(err));

