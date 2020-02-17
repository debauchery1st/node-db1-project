const express = require("express");
const db = require("../data/dbConfig.js");
const router = express.Router();

// Create
router.post("/", (req, res) => {
  db("accounts")
    .insert(req.body)
    .then(cnt => {
      res.status(201).json({ message: `${cnt} record${cnt > 1 ? "s" : ""}` });
    })
    .catch(errors => {
      console.log(errors);
      res.status(400).json({ error: "failed to create record" });
    });
});

// Request
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

// Update

router.put("/:id", (req, res) => {
  db("accounts")
    .where({ id: req.params.id }) // remember to filter or ALL records will be updated
    .update(req.body) // will accept partial record; minimum 1 key.
    .then(count => {
      res.status(200).json(count);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "failed to update account" });
    });
});

// Delete
router.delete("/:id", (req, res) => {
  //
  db("accounts")
    .where({ id: req.params.id })
    .del()
    .then(cnt => {
      res.status(200).json({ message: "deleted" });
    });
});

module.exports = router;
