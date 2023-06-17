const { Router} = require('express')
const {createPostH}= require("../../handler/post/handlerPost")

const postRouter=Router();

postRouter.post("/",createPostH)
// postRouter.get("/:id",getUsersId)
// postRouter.post("/",postUser)
module.exports= postRouter;