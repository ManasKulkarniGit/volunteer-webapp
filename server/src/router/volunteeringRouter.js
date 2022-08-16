const express = require("express");
const isAdmin = require("../middlewares/admin");
const auth = require("../middlewares/auth");
const volunteering = require("../models/volunteerwork");
const router = express.Router();

router.get("/", auth, (req, res) => {
  volunteering
    .find({ user: req.user._id })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

router.get("/all-list", auth, isAdmin, (req, res) => {
  volunteering
    .find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err.message);
    });
});

router.post("/add-volunteering", auth, async (req, res) => {
 
  try {
    const events = await volunteering.create({
      ...req.body,
      user: req.user._id,
    });
    res.send(events);
  } catch (error) {
    console.log(error);
    res.status(404).send({ msg: "invalid event" });
  }
});

router.delete("/delete-volunteering/:id", async (req, res) => {
  try {
    await volunteering.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: "deleted" });
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

module.exports = router;
