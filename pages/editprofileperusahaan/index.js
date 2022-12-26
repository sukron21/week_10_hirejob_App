import Link from "next/link";
import react, { useEffect, useState } from "react";
import style from "../../styles/profile.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import NavbarPer from "../../component/navbarPer"
import Footer from "../../component/footer";
import Image from 'next/image'

const Profile = () => {
  const router = useRouter();
  const [data1, setData] = useState([]);

  const [update, setUpdate] = useState({
    nama_perusahaan: data1.nama_perusahaan,
    bidang: data1.bidang,
    kota: data1.kota,
    deskripsi: data1.deskripsi,
    email: data1.email,
    instragram: data1.instragram,
    phone: data1.phone,
    linkedin: data1.linkedin,
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id;
    console.log(id);
    axios
      .get(`https://dark-rose-chinchilla-cap.cyclic.app/perusahaan/${id}`)
      .then((response) => {
        setData(response.data.data.rows);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handlePost = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id;
    const form = {
      nama_perusahaan: update.nama_perusahaan,
      bidang: update.bidang,
      kota: update.kota,
      deskripsi: update.deskripsi,
      email: update.email,
      instragram: update.instragram,
      phone: update.phone,
      linkedin: update.linkedin,
    };
    axios
      .put(`https://dark-rose-chinchilla-cap.cyclic.app/perusahaan/${id}`, form)
      .then((res) => {
        console.log(res);
        alert("Update Success");
        // router.push('/home');
      })
      .catch((err) => {
        console.log(err);
        alert("Update Failed");
      });
  };
  const deleteRow = () => {
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id;
    axios
      .delete(`https://dark-rose-chinchilla-cap.cyclic.app/perusahaan/${id}`)
      .then((res) => {
        console.log(res);
        alert("Delete Success");
        router.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {/* {JSON.stringify(data1)} */}
      <div className="container-fluid">
        <NavbarPer  />
        <div className="row">
          <div className={`ps-5  ${style.bg}`}></div>
          <div className="col-md-5">
            <div className={`card ${style.bg1}`}>
              <Image height={150} width={100} src="/luis.png" className={style.pp} alt='' />
              <div className="card-body">
                {data1.length===0?(
                  <div>IsLoading...</div>
                ):
                data1.map((item, index) => (
                  <div key={index}>
                    <h4 className="card-title">{item.nama_perusahaan}</h4>
                    <p>Web Developer</p>
                    <div className="d-flex flex-row">
                      <Image height={150} width={100} src="/map.png" className={style.map} alt='' />
                      <p className={style.abu2}>{item.kota}</p>
                    </div>
                  </div>
                ))}
                <Link href="#" className={style.link2}>
                  <button className={style.btn2}>Simpan</button>
                </Link>
                <Link href="#" className={style.link2}>
                  <button onClick={(e) => deleteRow(e)} className={style.btn3}>
                    Delete Account
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className={style.pengalaman}>
              <div className="card text-left">
                <div className="card-header">
                  <h4>Data diri</h4>
                </div>
                <div className="card-body">
                  <form onSubmit={(e) => handlePost(e)}>
                    {data1.length===0?(
                      <div>isLoading...</div>
                    ):
                    data1.map((item, index) => (
                      <div key={index}>
                        <label htmlFor="inputname" className="">
                          Nama Perusahan
                        </label>
                        <input
                          type="text"
                          className={`form-control ${style.inputan}`}
                          id="inputEmail"
                          placeholder="Masukan Nama Perusahan"
                          defaultValue={item.nama_perusahaan}
                          onChange={(e) =>
                            setUpdate({
                              ...update,
                              nama_perusahaan: e.target.value,
                            })
                          }
                        />
                        <label htmlFor="inputPassword" className="">
                          Kota
                        </label>
                        <input
                          type="text"
                          className={`form-control ${style.inputan}`}
                          id="inputPassword"
                          placeholder="Masukan kota"
                          defaultValue={item.kota}
                          onChange={(e) =>
                            setUpdate({ ...update, kota: e.target.value })
                          }
                        />
                        <label htmlFor="inputEmail" className="">
                          Deskripsi singkat
                        </label>
                        <textarea
                          type="text"
                          className={`form-control ${style.inputan1}`}
                          id="inputEmail"
                          placeholder="Masukan Deskripsi singkat"
                          defaultValue={item.deskripsi}
                          onChange={(e) =>
                            setUpdate({ ...update, deskripsi: e.target.value })
                          }
                        />
                        <label htmlFor="inputEmail" className="">
                          E-mail
                        </label>
                        <input
                          type="text"
                          className={`form-control ${style.inputan}`}
                          id="inputEmail"
                          placeholder="Masukan email"
                          defaultValue={item.email}
                          onChange={(e) =>
                            setUpdate({ ...update, email: e.target.value })
                          }
                        />
                        <label htmlFor="inputPassword" className="">
                          Instragram
                        </label>
                        <input
                          type="text"
                          className={`form-control ${style.inputan}`}
                          id="inputPassword"
                          placeholder="Masukan Instragram"
                          defaultValue={item.instragram}
                          onChange={(e) =>
                            setUpdate({ ...update, instragram: e.target.value })
                          }
                        />
                        <label htmlFor="inputPassword" className="">
                          Phone
                        </label>
                        <input
                          type="text"
                          className={`form-control ${style.inputan}`}
                          id="inputPassword"
                          placeholder="Masukan phone"
                          defaultValue={item.phone}
                          onChange={(e) =>
                            setUpdate({ ...update, phone: e.target.value })
                          }
                        />

                        <button type="submit" className={style.btn4}>
                          Simpan
                        </button>
                      </div>
                    ))}
                  </form>
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
export default Profile;
