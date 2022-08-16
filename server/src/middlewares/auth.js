const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").split(" ")[1];
    if (!token) return res.status(401).send({ msg: "Invalid token" });

    const decodedtoken = await jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodedtoken;

    next();
  } catch (error) {
    res.status(404).send({ msg: "authorization failed" });
  }
};

module.exports = auth;
