import React from 'react';
import './Register.css'
const Register = () => {
    return (
        <div>
            <h2>Please Register!!</h2>

            <input type="text" placeholder='Your Name' /><br />
            <input type="email" name="" id="" placeholder='Your Email' /> <br />
            <input type="password" name="" id="" placeholder='Your Password' /> <br />
            <input type="submit" value="Register" />
        </div>
    );
};

export default Register;