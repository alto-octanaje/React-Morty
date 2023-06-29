import axios from "axios";
import {  getAllCharacter,postCreateCharacter }  from "../redux/charactersReducer"

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
export const  postCreateCharacterA =(newCharacter)=>{
    return async function (dispatch) {
        try {
            const character =(await axios.post("http://localhost:3001/post",newCharacter))
            dispatch(postCreateCharacter(character.data))
        } catch (error) {
            console.log(error);
        }
    }
}