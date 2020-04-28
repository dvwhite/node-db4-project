const express = require("express");
const router = express.Router();



function errDetail(res, err) {
  console.log(err);
  return res.status(500).json({
    message: "Unable to complete the required operation",
    validation: [],
    data: {}
  });
}

module.exports = router;
