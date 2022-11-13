import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "./components/firebase/firebase";
import Login from "./components/Login";

function App() {

  const [isuser,setIsuser] = useState(false);


  useEffect (()=>{
    const userCheck = () =>{
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          console.log(uid);
          setIsuser(true);
        } else {
          // User is signed out
          // ...
        }
      });

    };
    userCheck();

    return () => {
      userCheck();
    };
  },[])


  return (
    <div>
      {!isuser&&(<Login />)}
      {isuser&&<div>We have user</div>}
      
    </div>
  );
}

export default App;
