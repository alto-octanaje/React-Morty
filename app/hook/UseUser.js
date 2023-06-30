import { useCallback, useContext } from "react"
import Context from "../context/UserContext"
// a ca esta el createContext

const UseUser = () => {  
  //mira aca quiero tener el estado del useContex
  //Esto es para poder hacer la autentificacion 
    console.log(useContext(Context));
    const {jwt,setJWT}= useContext(Context)
    console.log(jwt);

    const login= useCallback(()=>{
        setJWT("test") 
    },[setJWT] )

  return {
    isLogged: Boolean(jwt),
    login
  }
}

export default UseUser