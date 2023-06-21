import axios from "axios";

export const createCharactersA = () => {
    return async function (dispatch) {
      try {
        // const response = await axios.post("http://localhost:3001/post");
        // dispatch(addFavoriets(response.data));
        alert("crando elemento ")
      } catch (error) {
        console.log(error);
      }
    };
  };