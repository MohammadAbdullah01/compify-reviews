import React, { useState } from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';

const bar = <FontAwesomeIcon style={{ fontSize: "30px", position: "relative", zIndex: "10" }} icon={faBars} />
const cross = <FontAwesomeIcon style={{ fontSize: "30px", position: "relative", zIndex: "10" }} icon={faXmark}></FontAwesomeIcon>

const Header = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className='mom'>
                <Container>
                    <div className='header-container'>
                        <div onClick={() => setOpen(!open)} className='logo'>
                            {open ? cross : bar}
                        </div>
                        <nav className={`links w-100 ${open ? "oepn" : "close"}`}>
                            <CustomLink to='/'>HOME</CustomLink>
                            <CustomLink to='/reviews'>REVIEWS</CustomLink>
                            <CustomLink to='/dashboard'>DASHBOARD</CustomLink>
                            <CustomLink to='/blogs'>BLOGS</CustomLink>
                            <CustomLink to='/about'>ABOUT</CustomLink>
                        </nav>
                    </div>
                </Container>
            </div>

        </>
    );
};

export default Header;