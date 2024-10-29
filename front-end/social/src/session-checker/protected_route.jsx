import { useEffect, useState } from "react";
import { useNavigate  } from "react-router-dom";
import session_cheker from "./session-cheker";

const Protectedroute =  ({children}) => {
   const navigate = useNavigate();
   const [isAuth, setIsAuth] = useState(null);
   const [user,setUser] = useState(null);
   const [id,setid] = useState(null);
   useEffect(()=>{
    const session = async()=>
        {
            const response = await session_cheker();
           
    if(response.user_id){
        setIsAuth(true);
        setUser(response.user);
        setid(response.id);
        }
    else{
        setIsAuth(false);
        navigate('/login');
     }
    }
    session();
   },[navigate, isAuth])
   if(isAuth == null){
    return <div>Loading...</div>;
   }
   return(
    <>
        {isAuth ? children : null}
    </>
   )
}

export default Protectedroute;