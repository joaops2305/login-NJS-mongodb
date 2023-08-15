import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose.connect(process.env.HOST_MONGODB)
.then(() =>{
     console.log('MongoDB Online');
}).catch(erro => {
     confirm.log(erro);
});

const db = mongoose.Connection;

export default db;