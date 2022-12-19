import Link from "next/link";
import react from "react";
import style from "../../styles/profile.module.css";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import Image from 'next/image'

const Hire = () => {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <div className={`g-0 ${style.all}`}>
          <div className="row">
            <div className={`ps-5  ${style.bg}`}></div>
            <div className="col-md-5">
              <div className={`card ${style.bg1}`}>
                <Image height={150} width={100} src="/luis.png" className={style.pp} alt=''/>
                <div className="card-body">
                  <h4 className="card-title">Louis Tomlinson</h4>
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
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <div className={style.pengalaman1}>
                <div className="card text-left">
                  <div className="card-header">
                    <h4>Hubungi Lous Tomlinson</h4>
                    <p>Lorem Ipsum dolor sit amet, consector adipiscing elit. In Euismod ipsum et dui rhoncus auctor</p>
                  </div>
                  <div className="card-body">
                    <form onSubmit={(e) => handlePost(e)}>
                      <label htmlFor="inputname" className="">
                        Tujuan tentang pesan ini
                      </label>
                      <input
                        type="text"
                        className={`form-control ${style.inputan}`}
                        id="inputEmail"
                        placeholder="Projek"
                        onChange={(e) =>
                          setUpdate({ ...update, username: e.target.value })
                        }
                      />
                      <label htmlFor="inputPassword" className="">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        className={`form-control ${style.inputan}`}
                        id="inputPassword"
                        placeholder="Masukan Nama Lengkap"
                        onChange={(e) =>
                          setUpdate({ ...update, jobdesk: e.target.value })
                        }
                      />
                      <label htmlFor="inputEmail" className="">
                        Email
                      </label>
                      <input
                        type="text"
                        className={`form-control ${style.inputan}`}
                        id="inputEmail"
                        placeholder="Masukan Email"
                        onChange={(e) =>
                          setUpdate({ ...update, domisili: e.target.value })
                        }
                      />
                      <label htmlFor="inputPassword" className="">
                        No Handphone
                      </label>
                      <input
                        type="text"
                        className={`form-control ${style.inputan}`}
                        id="Nohp"
                        placeholder="Masukan No Handphone"
                        onChange={(e) =>
                          setUpdate({ ...update, loker: e.target.value })
                        }
                      />
                      <label htmlFor="inputEmail" className="">
                        Deskripsi
                      </label>
                      <textarea
                        type="text"
                        className={`form-control ${style.inputan1}`}
                        id="inputEmail"
                        placeholder="Deskripsikan/jelaskan lebih detail"
                        onChange={(e) =>
                          setUpdate({ ...update, diskripsi: e.target.value })
                        }
                      />
                      <button type="submit" className={style.btn4}>
                        Hire
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Hire;
