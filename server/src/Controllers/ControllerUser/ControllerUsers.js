const getApiUsers = (req, res) => {
  const { name } = req.query;
  if (name) res.send(`esta ruta trae todos los datos que tengan ${name} `);
  else res.send("esta ruta trae todos los datos de la api si no hay quere");
};
const getUsersId = (req, res) => {
  const { id } = req.params;
  res.send(`esta ruta trae todos los datos del user ${id} `);
};
const postUser =(req,res)=>{
    const {id,name}= req.body
    res.send(`creando ${name} con el id ${id}`)
}

module.exports = {
  getApiUsers,
  getUsersId,
  postUser
};
