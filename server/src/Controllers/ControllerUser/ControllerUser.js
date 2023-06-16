const { user } = require("../../db");
const axios = require("axios");

const getAllUsers = async () => {
  const userApi= (await axios.get("https://rickandmortyapi.com/api/character/")).data.results
  const userDB = await user.findAll()

  return [...userApi,...userDB];
};
const searchUserName = (name) => {

};

const CreateUser = async (name) => {
  return await user.create({ name });
};

const idUser = async (id, source) => {

  const miUser =
    source === "api"
      ? (await axios.get(`https://rickandmortyapi.com/api/character/${id}`))
          .data
      : await user.findByPk(id);

  return miUser;
};
module.exports = { CreateUser, idUser,getAllUsers,searchUserName };
