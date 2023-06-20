import axios from "axios";
import { getAllCharacters } from "./slice";

export const getAllCharactersA = () => {
  return async function(dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/users");
       dispatch(getAllCharacters(response.data));
      
    } catch (error) {
      console.log(error);
    }


  }


};
