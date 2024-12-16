import me from "../assets/my-foto.png";
/* eslint-disable react/prop-types */
const AboutLayout = () => {
  return (
    <>
      <div className="about-container">
        <div className="gap about">
          <div className="my-picture"></div>
          <div className="introduce">
            <h1>About Me</h1>
            <p>
              Nama Saya Adalah Rasya Putra Pratama saya lahir di Jakarta Pusat,
              saya sangat suka dengan pemrograman dan membuat sesuatu layaknya
              seorang Enginering. dan saya suka bereksperiman kepada suatu hal
              yang baru dan mengeksplorasi hal-hal baru. saya juga suka mengikut
              perlombaan IT dan memperbaiki sebuah barang.
            </p>
          </div>
        </div>

        <div className="gap pendidikan">
          <div className="introduce">
            <h1>Pendidikan</h1>
            <ul>
              <li>
                <span>SD CEMPAKA BARU 02</span>
                <span>2013-2014</span>
              </li>
              <li>
                <span>SD UTAN PANJANG 01</span>
                <span>2014-2019</span>
              </li>
              <li>
                <span>SMP NEGERI 269 JAKARTA</span>
                <span>2019-2021</span>
              </li>
              <li>
                <span>SMP NEGERI 3 BATANG</span>
                <span>2021-2022</span>
              </li>
              <li>
                <span>SMK NEGERI 1 KANDEMAN</span>
                <span>2022-SEKARANG</span>
              </li>
            </ul>
          </div>
          <div className="pendidikan-picture"></div>
        </div>

        <div className="gap skill">
          <div className="skill-picture"></div>
          <div className="introduce">
            <h1>My Skill</h1>
            <div className="skill-container">
              <div className="wrap">
                <h3>WEB DEVELOPMENT</h3>
                <div className="web-chart chart">
                  <span className="persent">95%</span>
                </div>
              </div>

              <div className="wrap">
                <h3>GAME DEVELOPMENT</h3>
                <div className="game-chart chart">
                  <span className="persent">50%</span>
                </div>
              </div>

              <div className="wrap">
                <h3>IoT DEVELOPMENT</h3>
                <div className="iot-chart chart">
                  <span className="persent">30%</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="gap experience">
          <div className="introduce">
            <h1>Pengalaman</h1>
            <p>
                Saya Pernah Mengikuti Sebuah Perlombaan LKS Tingkat Provinsi & Kabupaten. Serta Saya Juga Magang Di Salah Satu Perusahaan Yang Bernama
                <a style={{textDecoration:"none", color:"var(--third-color)", fontWeight:"bold"}} href="https://creasi.co"> PT Creasi Tekno Solusi</a> Sebagai Salah Satu Developer Disana.
            </p>
          </div>
          <div className="experience-picture"></div>
        </div>

      </div>
    </>
  );
};

export default AboutLayout;
