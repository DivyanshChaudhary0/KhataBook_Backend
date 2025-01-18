
const express = require("express");
const router = express.Router();

const {
  indexController,
  createController,
  createFileController,
  readFileController,
  editFileController,
  updateFileController,
  deleteController
} = require("../controllers/index.controller");

router.get("/", indexController);

router.get("/create", createController);

router.post("/createFile", createFileController);

router.get("/readFile/:name", readFileController);

router.get("/edit/:name", editFileController);

router.post("/update/:name", updateFileController);

router.get("/delete/:name", deleteController);

module.exports = router;
