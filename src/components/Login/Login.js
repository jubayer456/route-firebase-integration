import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);
const Login = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const handelSignInGoogle = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from, { replace: true })
            })
    }
    return (
        <div>
            <h2>Please Login!!</h2>
            <div style={{ margin: '20px' }}>
                <button onClick={handelSignInGoogle} >SignIn with Googole</button>
            </div>
            <form >
                <input type="email" name="" id="" placeholder='Your Email' /> <br />
                <input type="password" name="" id="" placeholder='Your Password' /> <br />
                <input type="submit" value="Login" />
            </form>
        </div >
    );
};

export default Login;