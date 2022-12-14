import Link from "next/link";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "../styles/navbar.module.css";
import { useRouter } from "next/router";
import axios from "axios";


const Navbar = () => {
    const router=useRouter();
  const logout = () => {
    localStorage.clear();
    alert("Berhasil Logout")
    router.push("/konfirmasi");
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <Link className="navbar-brand" href="/landingpageUser">
            <Image src="/book.png" height={30} width={100} alt='' />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" href="#">
                  <Image
                    src="/nav1 (1).png"
                    className={`mx-3 ${styles.picNav}`}
                    height={20} width={20} 
                    alt=''/>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">
                  <Image src="/mail.png" className={`mx-3 ${styles.picNav}`} alt='' height={20} width={20}  />
                </Link>
              </li>
              <div className="dropdown">
                <button
                  className="btn  dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                //   aria-expanded="false"
                >
                  <Image src="/nav1 (3).png" className={` ${styles.picNav}`} height={30} width={30}  alt=''/>{" "}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <Link className="dropdown-item" href="/profile">
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" href="#">
                      <button className={styles.btn21} onClick={logout}>Logout</button>
                    </Link>
                  </li>
                </ul>
              </div>
              <li className="nav-item ms-4">
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
