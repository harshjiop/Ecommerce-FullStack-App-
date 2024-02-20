import connectDB from "./db/index.js";
import { app } from "./app.js";
import { PORT } from "./constants.js";
import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running at PORT", PORT);
    });
  })
  .catch((err) => {
    console.log("RUN index.js catch part");
    console.log("mongodb connaction faild index.js", err);
  });
