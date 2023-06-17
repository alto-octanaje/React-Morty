const {Router} =require("express")
const { getApiUsers, getUsersId,postUser }= require("../../handler/users/HandlerUsers")

const usersRouter= Router();

const validate=(req,res,next)=>{
    const {name}= req.body;
    if(!name) return res.status(400).json({error:"Missing Name" })
    next();
}


usersRouter.get("/", getApiUsers)

usersRouter.get("/:id",getUsersId)
usersRouter.post("/",validate, postUser)

module.exports= usersRouter;