const {Router} =require("express")
const { getApiUsers, getUsersId,postUser }= require("../../handler/users/HandlerUsers");
const { crateUserV } = require("../../validate/userValidate/userValidate");

const usersRouter= Router();



usersRouter.get("/", getApiUsers)

usersRouter.get("/:id",getUsersId)
usersRouter.post("/",crateUserV, postUser)

module.exports= usersRouter;