import  express  from 'express';
import connectDb from './utilities/databaseConnecter.js';
import 'dotenv/config'  
const app = express(); 

const port = process.env.PORT || 5000
connectDb()
app.listen(port, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running,  and App is listening on port "+ port) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 