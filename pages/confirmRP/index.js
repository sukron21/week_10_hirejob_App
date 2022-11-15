import React from "react";
import Styles from "../../styles/login.module.css";
import Link from "next/link";
import Image from 'next/image'

const confirmRP = () => {
  return (
    <>
      <section className="loginuser">
        <div className="container">
          <div className={Styles.all2}>
            <div className={Styles.now}>
              <Image src="/book.png" width={120} height={40} alt=''/>
              <h4 className={Styles.titleRP}>Request Reset Your Account </h4>
              <h4>Password</h4>
              <Image src="/key.png" width={120} height={40} alt=''></Image>
              <p className={Styles.pReset}>
                The following is the button for you to reset
              </p>
              <p className={Styles.pReset2}>the password.</p>
              <button type="submit" className={Styles.btnCustom1}>
                Masuk
              </button>
              <div className={Styles.colorR}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default confirmRP;
