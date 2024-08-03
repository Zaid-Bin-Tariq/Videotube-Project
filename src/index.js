import connectDB from "./db/mongoose.js";
import { PORT } from "../config.js";
import { app } from "./express.js";

connectDB()
  .then(() => {
    app.listen(PORT || 8000, () => {
      console.log(`app listening at port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB connection failed: ", err);
  });
