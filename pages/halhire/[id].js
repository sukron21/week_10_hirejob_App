import Link from "next/link";
import react, { useEffect, useState } from "react";
import style from "../../styles/profile.module.css";
import NavbarPer from "../../component/navbarPer"
import Footer from "../../component/footer";
import Image from 'next/image'
import { useRouter } from "next/router";
import axios from "axios";

const Hire = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const { id } = router.query;

  useEffect(() => {
    axios
      .get(`https://dark-rose-chinchilla-cap.cyclic.app/user/${id}`)
      .then((response) => {
        setData(response.data.data.rows);
        console.log(response.data.data.rows);
      })
      .catch((error) => {
        console.error(error);
        // router.push("/konfirmasi");
      });
  }, [id, router]);
  const [hire, setHire] = useState({
    projek: "",
    email: "",
    phone: "",
    deskripsi:"",
    nama:""
  })
  const handlePostpengalaman = (e) => {
    const data = JSON.parse(localStorage.getItem("data"));
    const idperekrut = data.id
    e.preventDefault();
    const form = {
      projek: hire.projek,
      emailper: hire.email,
      phone: hire.phone,
      deskripsi: hire.deskripsi,
      iduser:id,
      idperekrut:idperekrut,
      nama:hire.nama
    }
    axios
    .post('https://dark-rose-chinchilla-cap.cyclic.app/hire/tambah', form)
    .then((res) => {
    console.log(res);
    localStorage.setItem("datanotif",JSON.stringify(res.data));
    alert("insert Success");
   router.push('/home');
    })
    .catch((err) => {
    console.log(err);
    alert("insert Failed");
    })
      };
  return (
    <>
      <div className="container-fluid">
        <NavbarPer />
        <div className={`g-0 ${style.all}`}>
          {
             data.map((data,index) =>(
              <div key={index}>
          <div className="row">
            <div className={`ps-5  ${style.bg}`}></div>
            <div className="col-md-5">
              <div className={`card ${style.bg1}`}>
                <Image height={150} width={100} src={data.photo_url} className={style.pp} alt=''/>
                <div className="card-body">
                  <h4 className="card-title">{data.username}</h4>
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
                  <div className="row flex-row">
                    {data.skill===null?
                    (<>Mohon lengkapi data terlebih dahulu</>):
                    data.skill.split(',').map((e,i)=>(
                      <>
                      <div key={i} className={`col-md-2 ${style.skill}`}>
                        <p>{e}</p>
                      </div>
                      
                      </>
                    ))
                    }
                    {/* <div className={style.skill}>
                      <p>Phyton</p>
                    </div> */}
                    {/* <div className={style.skill}>
                      <p>Laravel</p>
                    </div>
                    <div className={style.skill}>
                      <p>Goolang</p>
                    </div> */}
                  </div>
                  {/* <div className="d-flex flex-row">
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
                  </div> */}
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
                    <form onSubmit={(e) => handlePostpengalaman(e)}>
                      <label htmlFor="inputname" className="">
                        Tujuan tentang pesan ini
                      </label>
                      <input
                        type="text"
                        className={`form-control ${style.inputan}`}
                        id="inputEmail"
                        placeholder="Projek"
                        onChange={(e) =>
                          setHire({ ...hire, projek: e.target.value })
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
                          setHire({ ...hire, nama: e.target.value })
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
                          setHire({ ...hire, email: e.target.value })
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
                          setHire({ ...hire, phone: e.target.value })
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
                          setHire({ ...hire, deskripsi: e.target.value })
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
             ))
          }
          
        </div>
        <Footer />
      </div>
    </>
  );
};
export default Hire;
