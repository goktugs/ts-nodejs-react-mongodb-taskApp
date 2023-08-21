import dotenv from "dotenv";
import app from "./app";
import connectDB from "./config/database";

dotenv.config();

const port = process.env.PORT;

app.listen(port, () => {
  connectDB();
  console.log(`server is listening on ${port}`);
});
