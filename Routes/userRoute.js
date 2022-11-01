const express = require("express");
const controller = require("./../Controllers/userController")

const router = express.Router();

router.route("/users/:id?" )
.get(controller.getAllUsers)
.post(controller.createUser)
.put(controller.updateUser)
.delete(controller.deleteUser)

module.exports=router;