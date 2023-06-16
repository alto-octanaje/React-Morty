const {Router} =require("express")
const { getApiUsers, getUsersId,postUser }= require("../../handler/users/HandlerUsers")

const usersRouter= Router();


usersRouter.get("/", getApiUsers)

usersRouter.get("/:id",getUsersId)
usersRouter.post("/",postUser)

module.exports= usersRouter;