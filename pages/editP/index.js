import React from "react";
import Styles from "../../styles/login.module.css";
import Link from "next/link";
import Image from 'next/image'

const editPass = () => {
  return (
    <>
      <section className="loginuser">
        <div className="container">
        <div className={Styles.all}>
          <div className="row ">
            <div className="col-md-6">
              <Image src="/bg.png" width={560} height={600} alt=''/>
            <div className={Styles.bagus}> </div>
            <div className={Styles.kata2}>
              <h2>Temukan developer</h2>
              <h2>berbakat & Terbaik</h2>
              <h2>di berbagai bidang</h2>
              <h2>keahlian</h2>
              </div>
              </div>
            <div className="col-md-6">
            <div className='d-flec flex-row'>
            <form className={Styles.new}>
                <h3>Halo, Pewpeople</h3>
                <p>Enter your user accounts verified email address and we will send you a password reset link</p>
                <label htmlFor="inputEmail" className={Styles.labelS}>
                  Email
                </label>
                <input
                  type="Kata sandi"
                  className="form-control"
                  id="inputpassword"
                  placeholder="Masukan kata sandi"
                />
                <label htmlFor="inputEmail" className={Styles.labelS}>
                  Confirmation new password
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Masukan konfirmasi sandi"
                />
                <button type="submit"
                className={Styles.btnCustom2}>
                 Send password reset email
                </button>
            </form>
          </div>
          </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default editPass;
