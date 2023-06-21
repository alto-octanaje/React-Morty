import axios from "axios";
import { getAllCharacters,findCharacterId } from "./slice";

export const getAllCharactersA = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/users");
      dispatch(getAllCharacters(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const findCharacterIdA=(id)=>{
  try {
    return async function(dispatch){
      const res = await axios.get(`http://localhost:3001/post/${id}`);
      dispatch(findCharacterId(res.data))
    }
  } catch (error) {
    console.log(error);
  }
}
