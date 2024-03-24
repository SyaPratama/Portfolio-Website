/* eslint-disable react/prop-types */
import myFoto from '../assets/me.png';
import Indonesia from '../assets/indonesia.png';
import { Link } from 'react-router-dom';
const MainLayout = () => {
    return(
        <>
                <div className="main-text">
                    <h1 className="introduce"><span>WELCOME</span><br/>I{"'"}Am A Fullstack Developer, My Name Is Rasya Putra Pratama</h1>
                    <p className='description'>Saya Adalah Fullstack Developer Yang Berasal Dari  <img src={Indonesia} alt="indonesia" width={10}/>,Dan Saya Masih Seorang Siswa Menengah Kejuruan Di Salah Satu Kota Di Provinsi Jawa Tengah Yaitu Kota Batang.</p>
                    <div className="social-media">
                        <Link className='icon' to={'https://www.instagram.com/hiyaaaaayam/'}>
                            <i className="fa-brands fa-instagram"></i>
                        </Link>
                        <Link className='icon' to={'https://github.com/RasyaPrtma'}>
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