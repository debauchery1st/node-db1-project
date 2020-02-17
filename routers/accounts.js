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
  db("accounts")
    .where({ id: req.params.id })
    .then(account => res.status(200).json(account[0]))
    .catch(errors => res.status(400).json({ error: "failed to get account" }));
});

module.exports = router;
