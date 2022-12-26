import Link from "next/link";
import react, { useEffect, useState } from "react";
import style from "../../styles/profile.module.css";
import Navbar from "../../component/navbar"
import Footer from "../../component/footer"
import Image from 'next/image'
import axios from "axios";

const Profile = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id;
    axios
      .get(`https://dark-rose-chinchilla-cap.cyclic.app/perusahaan/${id}`)
      .then((response) => {
        setData(response.data.data.rows);
        console.log(response.data.data.rows);
      })
      .catch((error) => {
        console.error(error);
        // router.push("/login");
      });
  }, []);
  return (
    <>
      <div className="container-fluid">
      <Navbar/>
        <div className={` ${style.all}`}>
          <div className="container">
          <div className="col-md-12">
          {data.length===0?
              (<>isLoading...</>):
              data.map((item, index)=>(
            <div key={index} className={`card ${style.bg2}`}>
            <div className={` ${style.bg3}`}></div>
              <Image src="/luis.png" className={style.pp1} height={150} width={100} alt='' />
              <div className="card-body">
                <h4 className="card-title">{item.nama_perusahaan}</h4>
                <p>{item.bidang_perusahaan}</p>
                <div className="d-flex flex-row justify-content-center">

                  <Image src="/map.png" className={style.map} height={50} width={100} alt='' />
                  <p className={style.abu2}>{item.kota}</p>
                </div>
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
          ))
        }
        </div>
      </div>
      <Footer/>
      </div>
      
      </div>
    </>
  );
};
export default Profile;
