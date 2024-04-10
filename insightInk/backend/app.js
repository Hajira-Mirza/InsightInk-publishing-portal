require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//import routes
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");
const booksRouter = require("./routes/booksRouter");
const authorRouter = require("./routes/authorRouter");
const publisherRouter = require("./routes/publisherRouter");

const app = express();
//middlewares
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(cookieParser());

app.use("/user", userRouter);
app.use("/auth", authRouter);
app.use("/books", booksRouter);
app.use("/author", authorRouter);
app.use("/publisher", publisherRouter);

const { db } = require("./models/index");
db.sequelize
  .sync({ alter: true, logging: false })
  .then(() => {
    server.listen(port);
    server.on("error", onError);
    server.on("listening", onListening);
  })
  .catch((error) => {
    console.log(error.message);
  });

//listen for requests
app.listen(process.env.PORT, () => {
  console.log("App is listening on post", process.env.PORT);
});
