const express = require("express");
const router = express.Router();
const ctl = require("../controllers/TransactionController");

router.post("/", ctl.create);
router.get("/", ctl.list);
router.delete("/:id", ctl.remove);

module.exports = router;