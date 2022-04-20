"use strict";
const express = require("express");
const rootRouter = require("./src/routes");
const { sequelize } = require("./src/database/models");

const app = express();

app.use("/api", rootRouter);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
