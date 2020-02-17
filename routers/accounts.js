const express = require("express");
const db = require("../data/dbConfig.js");
const router = express.Router();

router.get("/", (req, res) => {
  db("accounts")
    .then(accounts => {
      // console.log(accounts);
      res.status(200).json(accounts);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "failed to get the list of accounts" });
    });
});

router.get("/:id", (req, res) => {
  //
});

module.exports = router;
