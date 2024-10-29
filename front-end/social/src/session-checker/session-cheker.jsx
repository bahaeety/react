const session_cheker =async ()=>{
   try{
   const session =await fetch('http://localhost:5000/user/session-checker',
      {
         method: 'GET',
         credentials: "include"
      }
   )
   const response =await session.json()
   if(!session.ok){
      throw new Error(response.statusText)
   }
   return response
   }
   catch(e){
      console.log(e + "erreur dans la verification de la session")
      return null;
   }

}

export default session_cheker;