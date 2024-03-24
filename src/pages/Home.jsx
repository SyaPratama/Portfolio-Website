/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// import MainLayout from "../layouts/MainLayout";
import { Outlet } from "react-router-dom";
import NavbarLayout from "../layouts/NavbarLayout";
import { useEffect } from "react";

const Home = ({nav,handle}) => {
    const handleNav = () => {
        const mains = document.querySelector('.main');
        handle(mains);
    }

    useEffect(() => {
        handleNav()
    },[handle]);
    
    return(
    <>
        <NavbarLayout nav={nav}/>
        <div className="container">
            <section className="main">
               <Outlet/>
            </section>
        </div>
    </>
    )
}

export default Home