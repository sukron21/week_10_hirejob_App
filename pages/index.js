import React from "react";
import Styles from "../styles/landing.module.css";
import Link from "next/link";
import Footer from "../component/footer"
import Image from 'next/image'

const landingPage = () => {
  return (
    <>
      <div className="container-fluid">
        <section className={Styles.bg}>
          <div className={Styles.navC}>
          <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarTogglerDemo03"
                aria-controls="navbarTogglerDemo03"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <Image
                src="/book.png"
                width={120}
                height={40}
                className={Styles.photoNav}
                alt=''/>

                {/* <form className="d-flex"> */}
                  <div className={Styles.nav12}>
                <Link className="" href="/konfirmasi">
                  <button className={Styles.btn2} type="submit">
                    Masuk
                  </button>
                  </Link>
                  </div>
                  <div className="{Styles.nav11}">
                  <Link className={Styles.nav11} href="/konfirmasi">
                  <button className={Styles.btn3} type="submit">
                    Daftar
                  </button></Link>
                  </div>
                {/* </form> */}

            </div>
          </nav>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className={Styles.hal1}>
                <h2>Talenta terbaik negri</h2>
                <h2> untuk perubahan</h2>
                <h2>revoslusi 4.0</h2>
                <p>
                  Lorem Ipsum dolor sit amet, consector adipiscing elit. In
                  Euismod ipsum et dui rhoncus auctor
                </p>
                <button type="submit" className={Styles.btnLP}>
                  Mulai dari sekarang
                </button>
              </div>
            </div>
            <div className="col-md-6">
              <div className={Styles.waw}>
                <Image src="/kotak1.png" width={480} height={500} alt=''/>
                <Image
                  className={Styles.gambarLP}
                  src="/kotak2.png"
                  width={400}
                  height={400}
                  alt=''/>
                <Image
                  className={Styles.tak1}
                  src="/kotak3.png"
                  width={90}
                  height={90}
                  alt=''/>
                <Image className={Styles.tak2} src="/kotak4.png" height={50} width={100} alt='' />
                <Image className={Styles.tak3} src="/Union.png"height={50}  width={50} alt=''/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="wedew">
                <Image
                  className={Styles.foto}
                  src="/foto2.png"
                  width={450}
                  height={400}
                  alt=''/>
                <Image
                  className={Styles.tak4}
                  src="/kotak3.png"
                  width={90}
                  height={90}
                  alt=''/>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hal2">
                <h2>Kenapa harus mencari tallent</h2>
                <h2>di peworld</h2>
                <div className={Styles.foto4}>
                  <Image height={20} width={30} className={Styles.foto5} src="/tick 1.png" alt=''/> Lorem ipsum
                  dolor sit amet.<br></br>
                </div>
                <div  className={Styles.foto4}>
                  <Image height={20} width={30} className={Styles.foto5} src="/tick 1.png" alt='' /> Lorem ipsum
                  dolor sit amet.<br></br>
                </div>
                <div className={Styles.foto4}>
                  <Image height={20} width={30} className={Styles.foto5} src="/tick 1.png" alt=''/> Lorem ipsum
                  dolor sit amet.<br></br>
                </div>
                <div className={Styles.foto4}>
                  <Image height={20} width={30} className={Styles.foto5} src="/tick 1.png" alt='' /> Lorem ipsum
                  dolor sit amet.
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className={Styles.hal3}>
                  <h2>Skill tallent</h2>
                  <div className={Styles.foto4}>
                    <Image height={20} width={30} className={Styles.foto5} src="/tick 13.png" alt='' /> Java
                    <Image height={20} width={30} className={Styles.foto6} src="/tick 13.png"alt='' /> Golang
                  </div>
                  <div className={Styles.foto4}>
                    <Image height={20} width={30} className={Styles.foto5} src="/tick 13.png" alt='' /> Kotlin
                    <Image height={20} width={30} className={Styles.foto7} src="/tick 13.png" alt='' /> c++
                  </div>
                  <div className={Styles.foto4}>
                    <Image height={20} width={30} className={Styles.foto5} src="/tick 13.png" alt='' /> PHP
                    <Image height={20} width={30} className={Styles.foto6} src="/tick 13.png" alt=''/> Ruby
                  </div>
                  <div className={Styles.foto4}>
                    <Image height={20} width={30} className={Styles.foto5} src="/tick 13.png" alt='' />{" "}
                    Javascript
                    <Image height={20} width={30}    className={Styles.foto8} src="/tick 13.png" alt='' /> 10+
                    Bahasa lainnya
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hal4">
                <Image src="/kotak1.png" width={480} height={500}  alt=''/>
                <Image
                  className={Styles.gambarLP}
                  src="/foto3.png"
                  width={400}
                  height={400}
                  alt=''/>
                <Image
                  className={Styles.tak5}
                  src="/kotak4.png"
                  width={100}
                  height={100}
                  alt=''/>
              </div>
            </div>
            <section className={`${Styles.pageFour} mt-5`}>
              <div className="row">
                <div className="col-md-12 mb-5">
                  <div className="d-flex flex-row justify-content-center">
                    <h1>Their opinion about peworld</h1>
                  </div>
                </div>
              </div>
              <div className="row row-cols-1 row-cols-md-3 g-4 text-center">
                <div className="col">
                  <div className="card h-10 px-5 py-4 align-items-center">
                    <Image
                      src="/Ellipse 320.png"
                      width={120}
                      height={120}
                      className={Styles.photoImage}
                      alt=''/>
                    <div className="card-body">
                      <h5 className={`card-title ${Styles.textName}`}>
                        Harry Styles
                      </h5>
                      <p className={Styles.textProfession}> Web Developer </p>
                      <p className={`card-text ${Styles.textDescription}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In euismod ipsum et dui rhoncus auctor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-10 px-5 py-4 align-items-center">
                    <Image
                      src="/Ellipse 320.png"
                      width={120}
                      height={120}
                      className={Styles.photoImage}
                      alt=''/>
                    <div className="card-body">
                      <h5 className={`card-title ${Styles.textName}`}>
                        Harry Styles
                      </h5>
                      <p className={Styles.textProfession}> Web Developer </p>
                      <p className={`card-text ${Styles.textDescription}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In euismod ipsum et dui rhoncus auctor.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-10 px-5 py-4 align-items-center">
                    <Image
                      src="/Ellipse 320.png"
                      width={120}
                      height={120}
                      className={Styles.photoImage}
                      alt='' />
                    <div className="card-body">
                      <h5 className={`card-title ${Styles.textName}`}>
                        Harry Styles
                      </h5>
                      <p className={Styles.textProfession}> Web Developer </p>
                      <p className={`card-text ${Styles.textDescription}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        In euismod ipsum et dui rhoncus auctor.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div className={Styles.hal6}>
              <div className="row">
                <div className="col-md 6">
                  <h3>Lorem ipsum</h3>
                  <h3>dolor sit amet</h3>
                </div>
                <div className="col-md 6">
                  <button type="submit" className={Styles.btn1}>
                    mulai dari sekarang
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
};
export default landingPage;
