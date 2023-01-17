// connect to mongoose api
const mongoose = require('mongoose')

const connectDB = (url) =>{
   return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}) 
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

}


module.exports = connectDB
