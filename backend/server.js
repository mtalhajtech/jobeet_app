import  express  from 'express';
import connectDb from './utilities/databaseConnecter.js';
import 'dotenv/config'
import jobRoutes from './routes/job.route.js'  
const app = express(); 

const port = process.env.PORT || 5000
connectDb()

app.use('/job',jobRoutes)



app.listen(port, (error) =>{ 
    if(!error) 
        console.log("Server is Successfully Running,  and App is listening on port "+ port) 
    else 
        console.log("Error occurred, server can't start", error); 
    } 
); 