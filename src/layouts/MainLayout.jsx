/* eslint-disable react/prop-types */
import myFoto from '../assets/me.png';
import Indonesia from '../assets/indonesia.png';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
const MainLayout = () => {
    const img = <img src={Indonesia} width={20}/>;
    const text = `Saya Adalah Fullstack Developer,Dan Saya Masih Seorang Siswa Menengah Kejuruan Di Salah Satu Kota Di Provinsi Jawa Tengah Yaitu Kota Batang.`;
    return(
        <>
                <div className="main-text">
                    <h1 className="introduce"><span>WELCOME</span><br/>I{"'"}Am A Fullstack Developer From {img} My Name Is Rasya Putra Pratama</h1>
                    <div className='description'><Typewriter words={[text]} loop={0} typeSpeed={50} deleteSpeed={50} delaySpeed={1000}/></div>
                    <div className="social-media">
                        <Link className='icon' to={'https://www.instagram.com/hiyaaaaayam/'}>
                            <i className="fa-brands fa-instagram"></i>
                        </Link>
                        <Link className='icon' to={'https://github.com/SyaPratama'}>
                        <i className="fa-brands fa-github"></i>
                        </Link>
                        <Link className='icon' to={'https://www.linkedin.com/in/rasya-pratama-880bbb253/'}>
                        <i className="fa-brands fa-linkedin"></i>
                        </Link>
                    </div>
                </div>
                <img src={myFoto} alt="Me" className="my-foto"/>
        </>
    );
}

export default MainLayout