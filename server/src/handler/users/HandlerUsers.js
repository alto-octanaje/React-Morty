const {
  CreateUser,
  idUser,
} = require("../../Controllers/ControllerUser/ControllerUser");

const getApiUsers = (req, res) => {
  const { name } = req.query;
  if (name) res.send(`esta ruta trae todos los datos que tengan ${name} `);
  else res.send("esta ruta trae todos los datos de la api si no hay quere");
};
const getUsersId = async (req, res) => {
  try {
    const { id } = req.params;
    const source = isNaN(id) ? "DB" : "api";
    
    const findID = await idUser(id, source);
    console.log(findID);
    res.status(200).json(findID);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const postUser = async (req, res) => {
  try {
    const { name } = req.body;
    const newUser = await CreateUser(name);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getApiUsers,
  getUsersId,
  postUser,
};
