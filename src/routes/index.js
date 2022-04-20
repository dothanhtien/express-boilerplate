"use strict";
const express = require("express");
const rootRouter = express.Router();

rootRouter.get("/", (req, res) => {
  res.json({ message: "hello world" });
});

module.exports = rootRouter;
