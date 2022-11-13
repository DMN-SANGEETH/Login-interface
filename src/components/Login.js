import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import styled from 'styled-components';
import { auth } from './firebase/firebase';
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

//     const userSignin = (e)=> {
//         signInWithEmailAndPassword(auth, username, password)
//             .then((userCredential) => {
//                 // Signed in 
//                 const user = userCredential.user;
//                 // ...
//                 console.log(user);
//             })
//             .catch((error) => {
//                 //const errorCode = error.code;
//                 const errorMessage = error.message;
//                 console.log(errorMessage);
//             });
//     };
    const userSignin = ()=>{
        signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user);
        })
        .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        });
}


    // console.log(username);
    // console.log(password);



    return (
    <LoginConteiner>
        <BackImage>
        <img src = './img/image01.png' alt='background'/>
        </BackImage>
        <BlogImage>
            <img src='./img/images02.jpeg' alt='blogimage' />
        </BlogImage>
        <LogiDitails>
            <img src='./img/download.png' alt= "logimag"/>
            <input type='text' placeholder='username' value={username} 
            onChange={e=>{
                e.preventDefault();
                setUsername(e.target.value);
            }}/>
            <input type='password' placeholder="password" value={password}
            onChange={e=>{
                e.preventDefault();
                setPassword(e.target.value);
            }}/>
            < a href='/'>forget password</a>
            <LoginButton onClick={userSignin}
            >Log in</LoginButton>
        
        </LogiDitails>


        
    </LoginConteiner>
);
}



export default Login;

const LoginConteiner = styled.div`
overflow:hidden;
`;

const BackImage = styled.div`
 position:fixed;
 top:0;
 bottom:o;
 width:100vw;
 height:100vh;
 z-index:-1;
`;

const BlogImage = styled.div`

`;
const LogiDitails = styled.div`

`;
const LoginButton = styled.button`

`;