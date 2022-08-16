const express = require("express");
const isAdmin = require("../middlewares/admin");
const auth = require("../middlewares/auth");
const router = express.Router();
const Event = require("../models/events");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const sharp = require("sharp");

router.get("/", async (req, res) => {
  try {
    Event.find()
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  } catch (error) {
    res.status(404).send({ msg: error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    Event.findOne({ _id: req.params.id })
      .then((data) => res.send(data))
      .catch((err) => res.send(err));
  } catch (error) {
    res.status(404).send({ msg: error });
  }
});

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 },
  fileFilter: function (req, file, cb) {
    if (!file.originalname.endsWith(".jpg")) {
      return new Error("FileFormat invalid");
    }
    cb(null, true);
  },
});

router.post(
  "/add-events",
  auth,
  isAdmin,
  upload.single("event_image"),
  async (req, res) => {
    try {
      const events = await Event.create({
        ...req.body,
        event_image: {
          data: fs.readFileSync("./public/uploads/" + req.file.filename),
          contentType: "image/png",
        },
      });
      res.send({events});
    } catch (error) {
      console.log(error);
      res.status(404).send({ msg: "invalid event" });
    }
  }
);

router.delete("/delete-events/:id", async (req, res) => {
  try {
    await Event.deleteOne({ _id: req.params.id });
    res.status(200).send({ msg: "deleted" });
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
});

module.exports = router;
