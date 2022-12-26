import styles from "../../styles/home1.module.css";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'
import NavbarPer from "../../component/navbarPer"
import Footer from "../../component/footer"
import Image from 'next/image'

const Home = () => {
  const router = useRouter ();
  const [data, setData] = useState([])  
useEffect(() => {
  getData()
},[])

const getData = () => {
  const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id;
  axios.get(`https://dark-rose-chinchilla-cap.cyclic.app/hire/user/${id}`)
    .then((response) => {
      console.log(response.data.data.rows)
      setData(response.data.data.rows)
    })
    .catch((error) => {
      console.error(error)
      // router.push('/login')
    })
}
  return (
    <>
    
    <section className="topjobs">
        <div className="container-fluid">
        <NavbarPer/>
        {/* {JSON.stringify(data2)} */}
          <div className="row">
            <div className={`p-5 ${styles.top}`}>
              <p className={styles.title}> Top Jobs </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.main}>
        <div className="container">
          <div className="row">
          </div>
          <div className="row">
          { data.length===0?
          (<>Isloading</>):
           data.map((item, index) => (
            <div key={index}>
               <div className={`col-md-12 mb-1 ${styles.content}`}>
              <div className="d-flex flex-row p-3">
                <Image src='/luis.png' height={100} width={100}
                //  className="col-md-1"
                  alt='' />
                <div className="col-md-5 d-flex flex-column ms-5">
                  <p className={styles.textName}>{item.username}</p>
                  <p className={styles.textProfession}>Web developer</p>
                  <div className="d-flex flex-row">
                    {/* <Image src='/mappin.svg' height={25} width={10} alt='' /> */}
                    <p className={`ms-2 ${styles.textLocation}`}>Lorem ipsum</p>
                  </div>
                  <div className="d-flex flex-row">
                    <ul className='p-0'>
                      <li className={`${styles.textSkill} px-4 py-2 me-3`}>PHP</li>
                      <li className={`${styles.textSkill} px-4 py-2 me-3`}>JavaScript</li>
                      <li className={`${styles.textSkill} px-4 py-2 me-3`}>HTML</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5 d-flex flex-row align-items-center justify-content-end">
                <Link href={`/profile/${item.id}`}>
                  <button className={`  px-4 ${styles.toProfile}`}> Lihat Profile</button>
                  </Link>
                </div>
              </div>
            </div>
            </div>
          ))
        }   
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};
export default Home;
