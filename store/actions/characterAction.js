import axios from "axios";
import {  getAllCharacter }  from "../redux/charactersReducer"

export const  getAllCharacterA =()=>{
    return async function (dispatch) {
        try {
            const charater =(await axios.get("http://localhost:3001/post"))
            dispatch(getAllCharacter(charater.data))
        } catch (error) {
            console.log(error);
        }
    }
}
// export const  getAllCharacterA =()=>{
//     return async function (dispatch) {
//         try {
//             const charater =(await axios.get("http://localhost:3001/post"))
//             dispatch(getAllCharacter(charater.data))
//         } catch (error) {
//             console.log(error);
//         }
//     }
// }