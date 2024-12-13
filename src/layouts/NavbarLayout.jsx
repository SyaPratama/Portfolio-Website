/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import me from '../assets/my-foto.png';
import { useEffect } from 'react';
import axios from "axios";
import fileDownload from 'js-file-download';

const NavbarLayout = ({nav}) => {
    const openNavbar = () => {
        const link = document.querySelector('.navbar-container');
        const bars = document.querySelector('.bars');
        const close = document.querySelector('.close');
        bars.classList.add('hide');
        close.classList.add('show');
        link.classList.add("active");
        if(window.innerWidth > 768){
            nav.classList.add('move');
        }
    }

    const closeNavbar = () => {
        const link = document.querySelector('.navbar-container');
        const bars = document.querySelector('.bars');
        const close = document.querySelector('.close');
        bars.classList.remove('hide');
        close.classList.remove('show');
        link.classList.remove("active");
        nav.classList.remove('move');
    }

    const checkMain = () => {
        const link = document.querySelector('.navbar-container');
        if(link.className.includes('active') === true){
            openNavbar()
        }
    }

    useEffect(() => {
        checkMain()
    },[nav])
    

    return (
        <>
            <div className="navbar-container">
                <div className="logo">
                    <img src={logo} alt="Logo" className='logo-img' />
                    <span className='logo-name'>MEACA DEV</span>
                    <div className="navbar-menu">
                        <button className="menu bars" onClick={openNavbar}><i className="fa-solid fa-bars"></i></button>
                        <button className="menu close" onClick={closeNavbar}><i className="fa-solid fa-bars-staggered"></i></button>
                    </div>
                </div>
                <nav className="navigation">
                    <Link to={"/"} className="link">
                        <i className="fa-solid fa-house"></i>
                        <span className="link-name">Home</span>
                        <div className='name-display'>Home</div>
                    </Link>
                    <Link to={"/About"} className="link">
                        <i className="fa-solid fa-user"></i>
                        <span className="link-name">About Me</span>
                        <div className='name-display'>About Me</div>
                    </Link>
                    <Link to={"/Portfolio"} className="link">
                        <i className="fa-solid fa-briefcase"></i>
                        <span className="link-name">Portfolio</span>
                        <div className='name-display'>Portfolio</div>
                    </Link>
                    <Link to={"https://git-link.vercel.app/api/download?url=https%3A%2F%2Fgithub.com%2FSyaPratama%2FMyCV%2Fblob%2Fmain%2FRasya.pdf&filename=Rasya.pdf"} className="link">
                        <i className="fa-solid fa-file"></i>
                        <span className="link-name">CV</span>
                        <div className='name-display'>CV</div>
                    </Link>
                </nav>
               <Link to={"https://www.linkedin.com/in/rasya-pratama-880bbb253/"}>
                <div className="my-profile">
                    <img src={me} alt="me" className='my-img' />
                    <span className='my-image-name'>Rasya Putra Pratama</span>
                </div>
                </Link>
            </div>
        </>
    )
}

export default NavbarLayout