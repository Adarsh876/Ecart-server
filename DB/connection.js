const mongoose = require('mongoose')

const connection_string = process.env.connection_string

mongoose.connect(connection_string).then((res)=>{
    console.log('MongoDb connection was successful');
}).catch((err)=>{ 
    console.log(err);
})