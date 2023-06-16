const { user } = require("../../db");
const axios = require("axios");

const cleanArray = (array) =>
  array.map((e) => ({
    id: e.id,
    name: e.name,
  }));

const getAllUsers = async () => {
  const userApiRaw = (
    await axios.get("https://rickandmortyapi.com/api/character/")
  ).data.results;
  const userDB = await user.findAll();
  const userApi = cleanArray(userApiRaw);
  return [...userApi, ...userDB];
};
const searchUserName = (name) => {};

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
module.exports = { CreateUser, idUser, getAllUsers, searchUserName };
