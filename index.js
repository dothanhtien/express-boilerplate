"use strict";
const express = require("express");
const rootRouter = require("./src/routes");

const app = express();

app.use("/api", rootRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
