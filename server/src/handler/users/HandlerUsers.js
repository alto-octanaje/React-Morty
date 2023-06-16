const {
  CreateUser,
} = require("../../Controllers/ControllerUser/ControllerUser");

const getApiUsers = (req, res) => {
  const { name } = req.query;
  if (name) res.send(`esta ruta trae todos los datos que tengan ${name} `);
  else res.send("esta ruta trae todos los datos de la api si no hay quere");
};
const getUsersId = (req, res) => {
  const { id } = req.params;
  res.send(`esta ruta trae todos los datos del user ${id} `);
};
const postUser = async (req, res) => {
  try {
    const { name } = req.body;
    const newUser = await CreateUser( name );
    res.status(201).json(newUser)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};

module.exports = {
  getApiUsers,
  getUsersId,
  postUser,
};
