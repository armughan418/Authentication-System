require("dotenv").config();
const express = require("express");
const cors = require("cors");
const getConnection = require("./utils/getConnection");
const userRoutes = require("./routes/userRoute");

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use("/user", userRoutes);

app.use((err, req, res, next) => {
  const message = err.message || "Internal Server Error";
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({ message });
});

getConnection();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
