const {Router}= require("express");
const { CreateDevoloper, DeleteDevoloper, updateDevolper } = require("../Controller/DevoloperController");
const router = Router();

router.post("/register",CreateDevoloper)
router.delete("/developers/:id",DeleteDevoloper);
router.patch("/developers/:id",updateDevolper)

module.exports = router