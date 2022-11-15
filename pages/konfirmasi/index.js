import React, { useEffect, useState} from "react";
import Styles from "../../styles/login.module.css";
import Link from "next/link";
import { useRouter } from 'next/router'
import axios from "axios";
import Image from 'next/image'

const Login = () => {
  
  return (
    <>
      <section className={Styles.loginuser}>
        <div className="container ">
          <div className="row ">
            <div className="col-md-6">
            <div className={Styles.containerLogo}>
            <Image className={Styles.tak10} src="/book1.png" width={100} height={30} alt=''  />
            <div className={Styles.kata2}>
              <h2>Temukan developer</h2>
              <h2>berbakat & Terbaik</h2>
              <h2>di berbagai bidang</h2>
              <h2>keahlian</h2>
              </div>
            </div>
              </div>
            <div className="col-md-6">
              <div className={Styles.choice}>
                <h3>Halo, Pewpeople</h3>
                <p>Apakah anda login sebagai  user?</p>
                <Link className={Styles.linkD} href="/login"> <button
                className={Styles.btnCustom4}>
                 User
                </button></Link>
                <p>Apakah anda login sebagai  Recruiter?</p>
                <Link className={Styles.linkD} href="/loginPer"> <button
                className={Styles.btnCustom4}>
                 Recruiter
                </button></Link>
                </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Login;
