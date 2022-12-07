import styles from "../../styles/home1.module.css";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import Image from 'next/image'

export async function getServerSideProps(context) {
  try {

    const response = await axios({
      method: 'GET',
      url: 'http://localhost:3002/'
    })
    console.log(response.data)
    return {
      props: {
        data: response.data.data.rows,
        error: false,
        errorMessage: ""
      }
    }
  }
  catch (error) {
    return {
      props: {
        data: [],
        error: true,
        errorMessage: "error API"
      }
    }
  }
}

const Home = (props) => {
  // const router = useRouter();
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`${process.env.NEXT_PUBLIC_API_URL}`)
  //     .then((response) => {
  //       setData(response.data.data.rows);
  //       console.log(response.data.data.rows);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       router.push("/login");
  //     });
  // }, []);
  // console.log(data);

  return (
    <>
      {/* {JSON.stringify(props.data)} */}
      <section className="topjobs">
        <div className="container-fluid">
          <Navbar />
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
            <div className="col-md-12 py-5 g-0">
              <div className={`input-group flex-nowrap ${styles.cari}`}>
                <input
                  type="text"
                  className="form-control"
                  id={styles.cari2}
                  placeholder="Search for any skill"
                  aria-describedby="addon-wrapping"
                />
                <span
                  className={`input-group-text ${styles.spanCostum}`}
                  id="addon-wrapping"
                >
                  <Image src="/search.png" width={20} height={20} alt='' />
                </span>
                <span
                  className={`input-group-text ${styles.spanCostum}`}
                  id="addon-wrapping"
                >
                  <div className="dropdown">
                    <button
                      className={`btn btn-secondary dropdown-toggle ${styles.spanCostumsort}`}
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Sort
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" href="#">
                          Sortir berdasarkan nama
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Sortir berdasarkan Skill
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Sortir berdasarkan Lokasi
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Sortir berdasarkan freelance
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" href="#">
                          Sortir berdasarkan fulltime
                        </Link>
                      </li>
                    </ul>
                  </div>
                </span>
                <span
                  className={`input-group-text ${styles.spanCostum}`}
                  id="addon-wrapping"
                >
                  <button className={styles.spanCostumbutton}> Search </button>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            {
            props.data.length === 0 ? (
              <div> Loading .... </div>
            ) : (
              props.data.map((item, index) => (
                <div key={index}>
                  <div className={`col-md-12 mb-1 ${styles.content}`}>
                    <div className="d-flex flex-row p-3">
                      <Image
                        src="/luis.png"
                        height={100}
                        width={100}
                        className="col-md-1"
                        alt=''
                      />
                      <div className="col-md-5 d-flex flex-column ms-5">
                        <p className={styles.textName}>{item.username}</p>
                        <p className={styles.textProfession}>Web developer</p>
                        <div className="d-flex flex-row">
                          <Image src="/mappin.svg" height={25} width={10} alt=''/>
                          <p className={`ms-2 ${styles.textLocation}`}>
                            Lorem ipsum
                          </p>
                        </div>
                        <div className="d-flex flex-row">
                          <ul className="p-0">
                            <li
                              className={`${styles.textSkill} px-4 py-2 me-3`}
                            >
                              PHP
                            </li>
                            <li
                              className={`${styles.textSkill} px-4 py-2 me-3`}
                            >
                              JavaScript
                            </li>
                            <li
                              className={`${styles.textSkill} px-4 py-2 me-3`}
                            >
                              HTML
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-md-5 d-flex flex-row align-items-center justify-content-end">
                        <Link href={`/profile/${item.id}`}>
                          <button className={`  px-4 ${styles.toProfile}`}>
                            {" "}
                            Lihat Profile
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}

            <button className="btn btn-primary my-5 col-md-2  mx-auto">
              {" "}
              Prev{" "}
            </button>
            <button className="btn btn-primary my-5 col-md-2  mx-auto">
              Next
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Home;
