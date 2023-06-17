const { Model } = require("sequelize")
const {createPostC} =require("../../Controllers/Post/PostController")

const createPostH= async (req,res )=>{
    try {
        const {name,userId}= req.body
    const newPost =await createPostC(name, userId)
    res.status(201).json(newPost)
    
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


module.exports={
    createPostH
}