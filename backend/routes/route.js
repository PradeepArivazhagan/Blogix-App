const express = require("express");
const router = express.Router();
const Articles = require("../model/model");

router.route("/").get((req, res) => {
  Articles.find()
    .then((article) => {
      res.status(200).json(article);
    })
    .catch((e) => {
      res.status(400).send({ error: e.message });
    });
});

router.route("/view/:id").get((req, res) => {
  Articles.findById()
    .then((article) => {
      res.status(200).json(article);
    })
    .catch((e) => {
      res.status(400).send({ error: e.message });
    });
});

router.route("/add").post((req, res) => {
  const { title, author, content, category } = req.body;
  Articles.create({ title, author, content, category })
    .then(() => {
      res.status(200).send("Article Created Successfully!");
    })
    .catch((e) => {
      res.status(400).send({ error: e.message });
    });
});

router.route("/delete/:id").delete((req, res) => {
  const { id } = req.params;
  Articles.findByIdAndDelete(id)
    .then(() => {
      res.status(200).send("User Deleted Successfully!");
    })
    .catch((e) => {
      res.status(400).send({ error: e.message });
    });
});

export default router;
