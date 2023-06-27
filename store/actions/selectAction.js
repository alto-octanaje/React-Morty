import axios from "axios";
import {
  getSelectSpecies,
  getSelectGender,
  getSelectStatus,
  getSelectOrigin,
  getSelectLocation,
  getSelectType,
} from "../redux/selectReducer";


export const getAllSelect = () => {
  return async function (dispatch) {
    try {
      const species = await axios.get("http://localhost:3001/select/species");
      dispatch(getSelectSpecies(species.data));
      const gender = await axios.get("http://localhost:3001/select/gender");
      dispatch(getSelectGender(gender.data));
      const status = await axios.get("http://localhost:3001/select/status");
      dispatch(getSelectStatus(status.data));
      const origin = await axios.get("http://localhost:3001/select/origin");
      dispatch(getSelectOrigin(origin.data));
      const location = await axios.get("http://localhost:3001/select/location");
      dispatch(getSelectLocation(location.data));
      const type = await axios.get("http://localhost:3001/select/type");
      dispatch(getSelectType(type.data));
    } catch (error) {
      console.log(error);
    }
  };
};



