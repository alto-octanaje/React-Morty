const { user } = require("../../db");
const axios = require("axios");

const CreateUser = async (name) => {
  return await user.create({ name });
};
const idUser = async (id, source ) => {
    console.log(id,"",source);
    const miUser=
  source === "api"
    ?  (await axios.get(`https://rickandmortyapi.com/api/character/${id}`)).data
    : await user.findByPk(id);

return miUser
};
module.exports = { CreateUser, idUser };
