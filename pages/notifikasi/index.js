import styles from "../../styles/home1.module.css";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'
import Navbar from "../../component/navbar"
import Footer from "../../component/footer"
import Image from 'next/image'

const Notifikasi = () => {
  const router = useRouter ();
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}`)
    .then((response) =>{
      setData(response.data.data.rows)
      console.log(response.data.data.rows)
    })
    .catch((error) =>{
      console.error(error)
      router.push('/login')
    })
}, [router])
console.log(data)



  return (
    <>
    {/* {JSON.stringify(data)} */}
    <section className="topjobs">
        <div className="container-fluid">
        <Navbar/>
          <div className="row">
            <div className={`p-5 ${styles.top}`}>
              <p className={styles.title}> Top Jobs </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.main1}>
        <div className="container">
          <div className="row">
          {
          data.length === 0 ? (
            <div> Loading .... </div>
          ):
          data.map((item, index) => (
            <div key={index}>
               <div className={`col-md-12 mb-1 ${styles.content}`}>
              <div className="d-flex flex-row p-3">
                <Image src='/luis.png' height={100} width={100} className="col-md-1" alt='' />
                <div className="col-md-5 d-flex flex-column ms-5">
                  <p className={styles.textName}>{item.username}</p>
                  <p className={styles.textProfession}>Web developer</p>
                  <div className="d-flex flex-row">
                    <Image src='/mappin.svg' height={25} width={10} alt='' />
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
          
            
            {/* <div className={`col-md-12 mb-1 ${styles.content}`}>
              <div className="d-flex flex-row p-3">
                <Image src='/luis.png' height={100} width={100} className="col-md-1" />
                <div className="col-md-5 d-flex flex-column ms-5">
                  <p className={styles.textName}>Louis Tomlinson</p>
                  <p className={styles.textProfession}>Web developer</p>
                  <div className="d-flex flex-row">
                    <Image src='/mappin.svg' height={25} width={10} />
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
                  <button className={`  px-4 ${styles.toProfile}`}> Lihat Profile</button>
                </div>
              </div>
            </div> */}
            {/* <div className={`col-md-12 mb-1 ${styles.content}`}>
              <div className="d-flex flex-row p-3">
                <Image src='/luis.png' height={100} width={100} className="col-md-1" />
                <div className="col-md-5 d-flex flex-column ms-5">
                  <p className={styles.textName}>Louis Tomlinson</p>
                  <p className={styles.textProfession}>Web developer</p>
                  <div className="d-flex flex-row">
                    <Image src='/mappin.svg' height={25} width={10} />
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
                  <button className={`  px-4 ${styles.toProfile}`}> Lihat Profile</button>
                </div>
              </div>
            </div> */}
            <button className="btn btn-primary my-5 col-md-2  mx-auto"> Prev </button>
            <button className="btn btn-primary my-5 col-md-2  mx-auto">Next</button>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};
export default Notifikasi;
