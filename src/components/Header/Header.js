import userEvent from '@testing-library/user-event';
import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import './Header.css';
const auth = getAuth(app);

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/order'>Order</Link>
                <Link to='/register'>Register</Link>
                <span style={{ margin: '10px' }}>
                    {user?.displayName && user.displayName}
                </span>
                {
                    user?.uid ? <button onClick={() => signOut(auth)}>Sign Up</button> :
                        <Link to='/login'>Login</Link>
                }
            </nav>
        </div >
    );
};

export default Header;