const mongoose = require('mongoose');

//Establece la conexión con la BBDD.
const dbConnection = async () => {

    try {
        await mongoose.connect(process.env.DB_CNN, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    console.log('DB Online');
    } catch (error) { 
        throw new Error('Error a la hora de establecer la conexión con la BBDD');
    }
}

module.exports = { dbConnection }