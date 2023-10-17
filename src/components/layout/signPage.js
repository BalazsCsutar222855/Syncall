import { React, useState } from "react";
import axios from 'axios'; // Import Axios if you're using it
import {setTokenCookie} from '../common/setCookies'

import SignInPage from "../content/signIn";
import SignUpPage from "../content/signUp"

const SignPage = () => {

    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSignIn = () => {
        const userObject = {
          "username": username,
          "password": password
        };
      
        axios.post('https://syncall.balage.top/signin/', userObject)
          .then(response => {
            // Assuming your server returns a token in the response
            const token = response.data.token;
            localStorage.setItem('token', token); // You can also use sessionStorage if needed
            setTokenCookie(token, 7)
            
            window.location.reload()
          })
          .catch(error => {
            // Handle errors here
            console.error('Error signing in:', error);
          });
      }
    const [page, setPage] = useState(0)
    return (
        <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md shadow-lg rounded-md bg-white">
                {page === 0 ? <SignInPage setPage={setPage} setUsername={setUsername} username={username} setPassword={setPassword} password={password} handleSignIn={handleSignIn}></SignInPage> : <SignUpPage setPage={setPage}></SignUpPage> }
            </div>
        </div>
    )

}

export default SignPage;