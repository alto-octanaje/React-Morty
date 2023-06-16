const {user} =require('../../db')

const CreateUser= async(name)=>{
    return  await user.create({name})

}
module.exports={CreateUser}