const express = require("express");
const controller = require("./../Controllers/noteController")

const router = express.Router();

router.route("/notes/:id?" )
.get(controller.getAllNotes)
.post(controller.createnote)
.put(controller.updatenote)
.delete(controller.deletenote)

module.exports=router;