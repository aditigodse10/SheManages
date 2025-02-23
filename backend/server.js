const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoute = require("./routes/user.route");
const productRoutes = require("./routes/productRoutes");
const app = express();
const ideaRoutes = require("./routes/ideaRoutes");

app.use(cors(
  {
    origin:["https://projectshemanages.vercel.app"],
    methods:["POST","GET"],
    credentials:true 
  }
));

dotenv.config();
app.use(express.json());

const PORT = process.env.PORT || 8080;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
  mongoose.connect(URI);
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error: ", error);
}

app.use("/api/ideas", ideaRoutes);
app.use("/user", userRoute);
app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
