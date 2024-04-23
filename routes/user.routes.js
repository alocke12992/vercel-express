const users = require("../controllers/users.controller.js");
const router = require("express").Router();
router.get("/", users.listUsers);

module.exports = router;
