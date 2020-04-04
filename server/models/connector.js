const mongoose = require('mongoose');

connect = () => {
    console.log(process.env.DB_URI)
    mongoose.connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch(error => {
        console.error(error)
        process.exit(201);
    });
}

exports.connect = connect;