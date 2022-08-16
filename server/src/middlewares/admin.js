const User = require("../models/user");

const isAdmin = async (req, res, next) => {
  try {
    await User.findOne({ _id: req.user }).then((user) => {
      if (!user.isAdmin) {
        return res.status(403).send({ message: "only admin is allowed" });
      }
      res.isAdmin = true;
      next();
    });
  } catch (error) {
    res.status(404).send(error.message);
  }
};
module.exports = isAdmin;
