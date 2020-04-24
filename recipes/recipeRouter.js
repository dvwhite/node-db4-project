const express = require("express");
const router = express.Router();

const { find, findById } = require("./recipeDb.js");

router.get("/", async (req, res) => {
  try {
    const recipes = await find();
    if (!recipes) {
      return res.status(404).json({
        message: "Not Found",
        validation: ["No recipes were found"],
        data: {},
      });
    } else {
      return res.status(200).json({
        message: "Success",
        validation: [],
        data: recipes,
      });
    }
  } catch (err) {
    errDetail(res, err);
  }
});

router.get("/:id", validateRecipeId, async (req, res) => {
  try {
    const id = Number(req.params.id);
    const recipe = findById(id);
    res.status(200).json({
      message: "Success",
      validation: [],
      data: recipe
    })
  } catch (err) {
    errDetail(res, err);
  }
});

async function validateRecipeId(req, res, next) {
  try {
    const id = Number(req.params.id);
    const recipe = await findById(id);
    if (!recipe) {
      return res.status(400).json({
        message: "Bad Request",
        validation: ["Recipe id doesn't exist"],
        data: {},
      });
    }
    next();
  } catch (err) {
    errDetail(res, err);
  }
}

function errDetail(res, err) {
  console.log(err);
  return res.status(500).json({
    message: "Unable to complete the required operation",
    validation: [],
    data: {},
  });
}

module.exports = router;
