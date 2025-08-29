import React, { useEffect, useState } from 'react'
import { NavbarStyled } from './CommonStyled'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUser, logout, selectCurrentUser } from '../features/userSlice'

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getCurrentUser());
    }, [dispatch]);

    const currentUser = useSelector(selectCurrentUser);
    console.log("currentUser :", currentUser);

    const [isHamburgerOpen, setHamburgerOpen] = useState(false);
    const toggleHamburger = () => {
        setHamburgerOpen(!isHamburgerOpen);
    }



    const handleLogout = () => {
        dispatch(logout());
    }

    // useEffect(() => {
    //     if (!currentUser) {
    //         navigate('/login');
    //     }
    // }, [currentUser, navigate]);

    return (
        <NavbarStyled>
            <div className='nav'>
                <div className='navbar'>
                    <div className='left logo'>
                        <Link to='/'>
                            <img src='/compyeLogoOg.png' alt='Compye Logo' style={{ height: '55px', width: 'auto' }} />
                        </Link>
                    </div>
                    <div className='mid links'></div>
                    <div className='right auth'>
                        {currentUser && currentUser.user ? (
                            <>
                                <span>{currentUser.user.name}</span> {/* Display current user's name */}
                                <button onClick={handleLogout}>Logout</button>
                                {currentUser.user.isAdmin && (
                                    <Link to='/admin'> <p>admin</p> </Link>
                                )}
                            </>
                        ) : (
                            <>
                                <Link to='/signup'> <p>Signup</p> </Link>
                                <Link to='/login'> <p>Login</p> </Link>
                            </>
                        )}

                    </div>
                    <div className='hamburger' onClick={toggleHamburger}>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            {isHamburgerOpen && (
                <div className='nav-links'>
                    {currentUser && currentUser.user && currentUser.user.isAdmin ? (
                        <Link to='/admin'> <p>admin</p> </Link>
                    ) : (
                        <>
                            <Link to='/signup'> <p>Signup</p> </Link>
                            <Link to='/login'> <p>Login</p> </Link>
                        </>
                    )}
                </div>
            )}
        </NavbarStyled>
    )
}

export default Navbar
