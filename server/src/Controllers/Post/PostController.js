const { postUser}=require('../../db')
const createPostC=async(name,userId)=>{
    const newPost= await postUser.create({name})
    await newPost.setUser(userId)
    return newPost

}
module.exports={createPostC}