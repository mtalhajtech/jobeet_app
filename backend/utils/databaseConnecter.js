import mongoose from "mongoose";

export default function connectDb() {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(process.env.DB_URL, {
      auth: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
      },
    })
    .then(() => {
      console.debug("Connected to DB");
    })
    .catch((err) => {
      throw `There is an error in connecting DB ${err.message}`;
    });
}
