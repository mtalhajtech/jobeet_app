import express from "express";
import connectDb from "./utils/databaseConnecter.js";
import "dotenv/config";
import jobRoutes from "./routes/job.route.js";
import categoryRoutes from "./routes/category.route.js";
import authRoutes  from "./routes/auth.route.js"
import affiliateRoutes from "./routes/affiliates.route.js"
import apiRoutes from "../backend/routes/api.route.js"
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // Your front-end origin
  credentials: true,
  
}));
const port = process.env.PORT || 5000;
connectDb(); 
app.use(morgan("dev"));
app.use(cookieParser())
app.use(express.json({ limit: "50mb" }));
app.use('/media', express.static('media'));
app.use('/auth',authRoutes)
app.use("/job", jobRoutes);
app.use("/category", categoryRoutes);
app.use("/affiliate",affiliateRoutes)
app.use("/api/V1",apiRoutes)
app.listen(port, (error) => {
  if (!error)
    console.log(
      "Server is Successfully Running,  and App is listening on port " + port,
    );
  else console.log("Error occurred, server can't start", error);
});
