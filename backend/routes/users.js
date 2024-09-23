const epxress = require("express");
const router = epxress.Router();
const userController = require("../controllers/users");

// get users route
router.get("/", userController.getUsers);
router.get("/user", userController.getUser);
router.post("/add", userController.createUser);

module.exports = router;