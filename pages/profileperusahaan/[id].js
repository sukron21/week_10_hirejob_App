import Link from "next/link";
import { useRouter } from "next/router";
import react, { useEffect, useState } from "react";
import style from "../../styles/profile.module.css";
import axios from "axios";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import Image from 'next/image'

const Detail = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const { id } = router.query;

  useEffect(() => {
    axios
      .get(`https://dark-rose-chinchilla-cap.cyclic.app/user/${id}`)
      .then((response) => {
        setData(response.data.data.rows);
        console.log(response.data.data.rows);
      })
      .catch((error) => {
        console.error(error);
        router.push("/login");
      });
  }, [id, router]);
  // const deleteRow = () => {
  //   const data = JSON.parse(localStorage.getItem("data"));
  //   const id = data.id;
  //   axios
  //     .delete(`http://localhost:3001/user/${id}`)
  //     .then((res) => {
  //       console.log(res);
  //       alert("Delete Success");
  //       router.push('/login')
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  //   }

  return (
    <>
      {/* {JSON.stringify(data)} */}
      <div className="container-fluid">
        <Navbar />
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
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
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
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Detail;
