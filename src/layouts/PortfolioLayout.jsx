/* eslint-disable react/prop-types */
import mvc from '../assets/MVC.png';
import mvc_php from "../assets/MVC-PHP.png"
import typinggame from "../assets/typinggame.png"
import bookshelf from "../assets/bookshelf.png"
import apitoram from "../assets/api-toram.png"
import alysa from "../assets/botalysa.png"
const PortfolioLayout = () => {
    return(
        <>
           <div className="container-porto">
                <h1>My Portofolio</h1>
                <div className="grid">

                    <a href='https://github.com/SyaPratama/MVC-JS-VANILLA' className="wrapper">
                        <img src={mvc} alt=""/>
                        <div className="slide-content">
                            <h3>MVC-JS</h3>
                            <p>Kerangka Website Berbasis Bahasa Javascript</p>
                        </div>
                    </a>

                    <a href='https://github.com/SyaPratama/MVC-PHP' className="wrapper">
                        <img src={mvc_php} alt=""/>
                        <div className="slide-content">
                            <h3>MVC-PHP</h3>
                            <p>Kerangka Website Berbasis Bahasa PHP</p>
                        </div>
                    </a>
                    
                    <a href='https://github.com/SyaPratama/Typing-Game' className="wrapper">
                        <img src={typinggame} alt=""/>
                        <div className="slide-content">
                            <h3>Typing Test Game</h3>
                            <p>Game Typing Test Menggunakan Javascript</p>
                        </div>
                    </a>

                    <a href='https://github.com/SyaPratama/Dicoding-Bookshelf' className="wrapper">
                        <img src={bookshelf} alt=""/>
                        <div className="slide-content">
                            <h3>Dicoding BookShelf App</h3>
                            <p>Bookshelf Menggunakan Javascript</p>
                        </div>
                    </a>

                    <a href='https://github.com/SyaPratama/Api-Toram-ID' className="wrapper">
                        <img src={apitoram} alt=""/>
                        <div className="slide-content">
                            <h3>Api Scrape Website Toram ID</h3>
                            <p>Api Hasil dari Scraping Website Toram ID Menggunakan Node JS</p>
                        </div>
                    </a>

                    <a href='https://github.com/SyaPratama/AlysaWangsaf' className="wrapper">
                        <img src={alysa} alt=""/>
                        <div className="slide-content">
                            <h3>Bot Wa Alysa</h3>
                            <p>Sebuah Bot Whatsapp Bernama Alysa Yang Dibuat Menggunakan Whiskeysocket/baileys</p>
                        </div>
                    </a>

                </div>

           </div>
        </>
    );
}

export default PortfolioLayout