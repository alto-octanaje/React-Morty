const crateUserV=(req,res,next)=>{
    const {name}= req.body;
    if(!name) return res.status(400).json({error:"Missing Name" })
    next();
}

module.exports={crateUserV}