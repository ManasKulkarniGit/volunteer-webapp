const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");

const stripe = require("stripe")(
  "sk_test_51LP01fBZbjGbFMy5vtFSQf47EYtAIJuqDk838RfiXNW5bHHQmm37BYIMoOTb6BEOS1z3UBfnI27ijYjPrpznIKSX00072OXUQl"
);

router.post("/", auth,  async (req, res) => {
  const { token, currency, price, email } = req.body;
  const charge = await stripe.charges.create({
    amount: price,
    currency,
    receipt_email : email,
    source: token,
  });

  res.send(charge);
});

module.exports = router;
