import Link from "next/link";
import react from "react";
import style from "../../styles/profile.module.css";
import Navbar from "../../component/navbar"
import Footer from "../../component/footer"
import Image from 'next/image'

const profile = () => {
  return (
    <>
      <div className="container-fluid">
      <Navbar/>
        <div className={`g-0 ${style.all}`}>
        <div className="row">
          <div className={`ps-5  ${style.bg}`}></div>
          <div className="col-md-5">
            <div className={`card ${style.bg1}`}>
              <Image height={150} width={100} src="/luis.png" className={style.pp} alt='' />
              <div className="card-body">
                <h4 className="card-title">Louis Tomlinson</h4>
                <p>Web Developer</p>
                <div className="d-flex flex-row">
                  <Image height={50} width={100} src="/map.png" className={style.map} alt='' />
                  <p className={style.abu2}>Purwokerto, jawa tengah</p>
                </div>
                <p className={style.abu2}>Freelancer</p>
                <p className={`card-text ${style.abu2}`}>
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <Link href="#" className={style.link1}>
                  <button className={style.btn1}>Go somewhere</button>
                </Link>
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
                          <Image
                            src="/tokped.png"
                            className=""
                            alt="..."
                            height={50} width={100}
                          />
                        </div>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">Enginer</h5>
                            <p>Tokopedia</p>
                            <p>july 2019 - january 2020 6 months</p>
                            <p className="card-text">
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content. This
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
                          <Image
                            src="/tokped.png"
                            className=""
                            alt="..."
                            height={50} width={100}
                          />
                        </div>
                        </div>
                        <div className="col-md-8">
                          <div className="card-body">
                            <h5 className="card-title">Enginer</h5>
                            <p>Tokopedia</p>
                            <p>july 2019 - january 2020 6 months</p>
                            <p className="card-text">
                              This is a wider card with supporting text below as
                              a natural lead-in to additional content. This
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
      </div>
      <Footer/>
      </div>
    </>
  );
};
export default profile;
