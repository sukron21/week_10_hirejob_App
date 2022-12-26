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
  const { id } = router.query;
  const [data, setData] = useState([]);
  const [dataPorto, setdataPorto] = useState([]);
  const [dataPengalaman, setdataPengalaman] = useState([]);
 

  useEffect(() => {
    axios
      .get(`https://dark-rose-chinchilla-cap.cyclic.app/user/${id}`)
      .then((response) => {
        setData(response.data.data.rows);
        console.log(response.data.data.rows);
      })
      .catch((error) => {
        console.error(error);
        // router.push("/login");
      });
  }, [id, router]);
  useEffect(() => {
    axios
      .get(`https://dark-rose-chinchilla-cap.cyclic.app/porto/${id}`)
      .then((response) => {
        setdataPorto(response.data.data.rows);
        console.log(response.data.data.rows);
      })
      .catch((error) => {
        console.error(error);
        // router.push("/login");
      });
  }, []);
  useEffect(() => {
    axios
      .get(`https://dark-rose-chinchilla-cap.cyclic.app/pengalaman/${id}`)
      .then((response) => {
        setdataPengalaman(response.data.data.rows);
        console.log(response.data.data.rows);
      })
      .catch((error) => {
        console.error(error);
        // router.push("/login");
      });
  }, []);

  return (
    <>
      <div className="container-fluid">
      <NavbarPer/>
      {/* {JSON.stringify(dataUser)} */}
        <div className={`g-0 ${style.all}`}>
        <div className="row">
          <div className={`ps-5  ${style.bg}`}></div>
          <div className="col-md-5">
            {/* sini // untuk photo "/luis.png" */}
            {data.length===0?
            (<>Isloading...</>):
              data.map((item,index )=>(
                <>
                <div key={index} className={`card ${style.bg1}`}>
                <Image height={150} width={100} src={item.photo_url} className={style.pp} alt='' />
                <div className="card-body">
                  <h4 className="card-title">{item.username}</h4>
                  <p>{item.jobdesk===null?(<> data jobdesk mohon lengkapi data terlebih dahulu</>):item.jobdesk}</p>
                  <div className="d-flex flex-row">
                    <Image height={50} width={100} src="/map.png" className={style.map} alt='' />
                    <p className={style.abu2}>{item.domisili===null?(<>data alamat belum ada mohon lengkapi data terlebih dahulu</>):item.domisili}</p>
                  </div>
                  <p className={style.abu2}>{item.loker===null?(<>data tempat bekerja belum ada mohon lengkapi data terlebih dahulu</>):item.loker}</p>
                  <p className={`card-text ${style.abu2}`}>
                    Some quick example text to build on the card title and make up
                    the bulk of the cards content.
                  </p>
                  <Link href={`/halhire/${item.id}`} className={style.link1}>
                    <button className={style.btn1}>Hire</button>
                    </Link>
                  <h4>Skill</h4>
                  <div  className="row d-flex ">
                    {item.skill===null?
                    (<>mohon lengkapi data terlebih dahulu</>):
                     item.skill.split(',').map((e,i)=>(
                      <>
                      <div key={i} className={`col-md-2 ${style.skill}`}>
                        <p>{e}</p>
                      </div>
                      
                      </>
                    ))
                    }
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
              </>
              ))
            }
            
            {/* sini */}
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
                <div  className="card card-body">
                    <div className="row">
                  {dataPorto.length===0?
                  (<>Belum ada data mohon di lengkapi terlebih dahulu</>):
                  dataPorto.map((item, index)=>(
                      <div key={index} className={`col-md-3 ${style.abu3}`}>
                        <Image height={150} width={200} src={item.photo_url_porto} className={style.porto} alt='' />
                        <p className={style.abu3}>{item.namaapp}</p>
                      </div>
                  ))}
                   </div>
                  </div>
                  {/* sampe sini */}
                </div>
                <div className="collapse" id="collapseExample1">
                  <div className="card card-body">
                    
                        {/* sini */}
                        {dataPengalaman.length===0?
                        (<>
                        <h1>Mohon lengkapi data Terlebih dahulu</h1>
                        </>):
                        dataPengalaman.map((item, index)=>(
                          <>
                          <div key={index} className="card mb-3">
                      <div className="row g-0">
                      <div  className="col-md-8">
                          <div className="card-body">
                            <h5  className="card-title">{item.posisi}</h5>
                            <p>{item.namaper}</p>
                            <p>july 2019 - january 2020 6 months</p>
                            <p className="card-text">
                              {item.deskripsi}
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                        </>
                        ))}
                        
                        {/* sini */}
                      
                    {/* <div className="card mb-3">
                      <div className="row g-0">
                        <div className="col-md-4">
                            <div className={style.ppengalaman}>
                          <Image
                            src="/tokped.png"
                            className=""
                            alt="..."
                            height={100} width={100}
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
                    </div> */}
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
export default Detail;
