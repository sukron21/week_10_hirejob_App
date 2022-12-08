import Link from "next/link";
import { useRouter } from "next/router";
import react, { useEffect, useState } from "react";
import style from "../../styles/profile.module.css";
import axios from "axios";
import NavbarPer from "../../component/navbarPer"
import Footer from "../../component/footer"
import Image from 'next/image'

const Detail = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const { id } = router.query;

  useEffect(() => {
    axios
      .get(`http://localhost:3002/user/${id}`)
      .then((response) => {
        setData(response.data.data.rows);
        console.log(response.data.data.rows);
      })
      .catch((error) => {
        console.error(error);
        // router.push("/login");
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
        <div className={`g-0 ${style.all}`}>
        <NavbarPer/>
          <div className="row">
            <div className={`ps-5  ${style.bg}`}></div>
            <div className="col-md-5">
              <div className={`card ${style.bg1}`}>
                <Image height={150} width={100} src="/luis.png" className={style.pp} alt=''/>
                {/* dari sini */}
                
                 
                  {
                  data.map((data,index) =>
                   (<div key={index}>
                    <div className="card-body">
                    <h4 className="card-title">
                      {data.username}</h4>
                      <p>Web Developer</p>
                  <div className="d-flex flex-row">
                    <Image height={50} width={100} src="/map.png" className={style.map} alt='' />
                    <p className={style.abu2}>Purwokerto, jawa tengah</p>
                  </div>
                  <p className={style.abu2}>Freelancer</p>
                  <p className={`card-text ${style.abu2}`}>
                    Some quick example text to build on the card title and make
                    up the bulk of the cards content.
                  </p>
                  <Link href={`/halhire/${data.id}`} className={style.link1}>
                    <button className={style.btn1}>Hire</button>
                    </Link>
                    <div className={style.wawa}>
                  {/* <Link href="#" className={style.link1}>
                  <button onClick={(e) => deleteRow( e)}  className={style.btn1}>Hapus Akun</button>
                  </Link> */}
                  </div>
                  <h4>Skill</h4>
                  <div className="d-flex flex-row">
                    <div className={style.skill}>
                      <p>Phyton</p>
                    </div>
                    <div className={style.skill}>
                      <p>Laravel</p>
                    </div>
                    <div className={style.skill}>
                      <p>Goolang</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className={style.skill}>
                      <p>Phyton</p>
                    </div>
                    <div className={style.skill}>
                      <p>Phyton</p>
                    </div>
                    <div className={style.skill}>
                      <p>Phyton</p>
                    </div>
                  </div>
                  <div className="d-flex flex-row">
                    <div className={style.skill}>
                      <p>C++</p>
                    </div>
                    <div className={style.skill}>
                      <p>Phyton</p>
                    </div>
                    <div className={style.skill}>
                      <p>Phyton</p>
                    </div>
                  </div>
                  <div className={style.sosmed}>
                  <div className="d-flex flex-row">
                    <Image height={50} width={100} src="/mail.png" className={style.map} alt='' />
                    <p className={style.abu2}>louistommo@gmail.com</p>
                  </div>
                  <div className="d-flex flex-row">
                    <Image height={50} width={100} src="/instagram.png" className={style.map}  alt=''/>
                    <p className={style.abu2}>louistommo@gmail.com</p>
                  </div>
                  <div className="d-flex flex-row">
                    <Image height={50} width={100} src="/git.png" className={style.map} alt='' />
                    <p className={style.abu2}>louistommo@gmail.com</p>
                  </div>
                  <div className="d-flex flex-row">
                    <Image height={50} width={100} src="/kucing.png" className={style.map}alt='' />
                    <p className={style.abu2}>louistommo@gmail.com</p>
                  </div>
                </div>
                </div>
                      </div>))}

                  
                {/* sampe sini */}
              </div>
            </div>

            <div className="col-md-7">
              <div className={style.pengalaman}>
                <div className={`card ${style.card2}`}>
                  <p>
                    <button
                      className="btn"
                      data-bs-toggle="collapse"
                      href="#collapseExample"
                      role="button"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      <h6>Portofolio</h6>
                    </button>
                    <button
                      className="btn"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseExample1"
                      aria-expanded="false"
                      aria-controls="collapseExample1"
                    >
                      <h6>Pengalaman kerja</h6>
                    </button>
                  </p>
                  <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                    <div className="row">
                      <div className={`col-md-3 ${style.abu3}`}>
                        <Image height={150} width={200} src="/Rectangle 637.png" className="" alt='' />
                        <p className={style.abu3}>Reminder app</p>
                      </div>
                      <div className={`col-md-3 ${style.abu3}`}>
                        <Image height={150} width={200} src="/Rectangle 637.png" className="" alt='' />
                        <p className={style.abu3}>Reminder app</p>
                      </div>
                      <div className={`col-md-3 ${style.abu3}`}>
                        <Image height={150} width={200} src="/Rectangle 637.png" className="" alt='' />
                        <p className={style.abu3}>Reminder app</p>
                      </div>
                      <div className={`col-md-3 ${style.abu3}`}>
                        <Image height={150} width={200} src="/Rectangle 637.png" className="" alt=''/>
                        <p className={style.abu3}>Reminder app</p>
                      </div>
                      <div className={`col-md-3 ${style.abu3}`}>
                        <Image height={150} width={200} src="/Rectangle 637.png" className="" alt=''/>
                        <p className={style.abu3}>Reminder app</p>
                      </div>
                      <div className={`col-md-3 ${style.abu3}`}>
                        <Image height={150} width={200} src="/Rectangle 637.png" className=""alt='' />
                        <p className={style.abu3}>Reminder app</p>
                      </div>
                    </div>
                    </div>
                  </div>
                  <div className="collapse" id="collapseExample1">
                    <div className="card card-body">
                      <div className="card mb-3">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <div className={style.ppengalaman}>
                              <Image height={50} width={100} src="/tokped.png" className="" alt="..." />
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Enginer</h5>
                              <p>Tokopedia</p>
                              <p>july 2019 - january 2020 6 months</p>
                              <p className="card-text">
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card mb-3">
                        <div className="row g-0">
                          <div className="col-md-4">
                            <div className={style.ppengalaman}>
                              <Image height={50} width={100} src="/tokped.png" className="" alt="..." />
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="card-body">
                              <h5 className="card-title">Enginer</h5>
                              <p>Tokopedia</p>
                              <p>july 2019 - january 2020 6 months</p>
                              <p className="card-text">
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
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
export default Detail;
