import Link from "next/link";
import react from "react";
import style from "../../styles/profile.module.css";
import Navbar from "../../component/navbar"
import Footer from "../../component/footer"
import Image from 'next/image'

const profile = () => {
  return (
    <>
      <div className="container-fluid">
      <Navbar/>
        <div className={` ${style.all}`}>
          <div className="container">
          <div className="col-md-12">
            <div className={`card ${style.bg2}`}>
            <div className={` ${style.bg3}`}></div>
            <Image src="/luis.png" className={style.pp1} height={150} width={100} alt='' />
              <div className="card-body">
                <h4 className="card-title">Louis Tomlinson</h4>
                <p>Web Developer</p>
                <div className="d-flex flex-row justify-content-center">

                <Image src="/map.png" className={style.map} height={50} width={100} alt='' />
                  <p className={style.abu2}>Purwokerto, jawa tengah</p>
                </div>
                <p className={style.abu2}>Freelancer</p>
                <p className={`card-text ${style.abu2}`}>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <Link href="/editprofileperusahaan" className={style.link1}>
                  <button className={style.btn1}>Edit Profile</button>
                </Link>
                <div className={style.sosmed}>
                  <div className="d-flex flex-row justify-content-center">
                    <Image src="/mail.png" className={style.map} height={50} width={100} alt='' />
                    <p className={style.abu2}>louistommo@gmail.com</p>
                  </div>
                  <div className="d-flex flex-row justify-content-center">
                    <Image src="/instagram.png" className={style.map} height={50} width={100} alt='' />
                    <p className={style.abu2}>louistommo@gmail.com</p>
                  </div>
                  <div className="d-flex flex-row justify-content-center">
                    <Image src="/git.png" className={style.map} height={50} width={100} alt='' />
                    <p className={style.abu2}>louistommo@gmail.com</p>
                  </div>
                  <div className="d-flex flex-row justify-content-center">
                    <Image src="/kucing.png" className={style.map} height={50} width={100} alt='' />
                    <p className={style.abu2}>louistommo@gmail.com</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        
      </div>
      <Footer/>
      </div>
      
      </div>
    </>
  );
};
export default profile;
