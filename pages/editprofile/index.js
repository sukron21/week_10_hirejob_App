import Link from "next/link";
import react, { useEffect, useState } from "react";
import style from "../../styles/profile.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "../../component/navbar"
import Footer from "../../component/footer"
import Image from 'next/image'

const Profile = () => {
  const router=useRouter();
  const [data1, setData] = useState([]);

  const [update, setUpdate] = useState({
    username: data1.username,
    jobdesk: data1.jobdesk,
    domisili: data1.domisili,
    loker: data1.loker,
    diskripsi: data1.diskripsi
})

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id;
    console.log(id);
    axios
      .get(`http://localhost:3001/user/${id}`)
      .then((response) => {
        setData(response.data.data.rows);
        console.log(response.data.data.rows);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handlePost = (e) => {
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id
    e.preventDefault();
    const form = {
        username: update.username,
        jobdesk: update.jobdesk,
        domisili: update.domisili,
        loker: update.loker,
        diskripsi: update.diskripsi
        
    }
    axios
        .put(`http://localhost:3001/user/${id}`, form)
        .then((res) => {
            console.log(res);
            alert("Update Success");
            // router.push('/home');
        })
        .catch((err) => {
            console.log(err);
            alert("Update Failed");
        })
};
const deleteRow = () => {
  const data = JSON.parse(localStorage.getItem("data"));
  const id = data.id;
  axios
    .delete(`http://localhost:3001/user/${id}`)
    .then((res) => {
      console.log(res);
      alert("Delete Success");
      router.push('/login')
    })
    .catch((err) => {
      console.log(err);
    })
  }


  return (
    <>
      {/* {JSON.stringify(data1)} */}
      <div className="container-fluid">
        <Navbar/>
        <div className="row">
          <div className={`ps-5  ${style.bg}`}></div>
          <div className="col-md-5">
            <div className={`card ${style.bg1}`}>
            
              <Image src='/luis.png' height={150} width={100} className={style.pp} alt='' />
              <div class="card-body">
              {data1.map((item, index) => (
                 <div key={index}>
                   <h4 class="card-title">{item.username}</h4>
                 </div>
              ))}
               
                <p>Web Developer</p>
                <div className="d-flex flex-row">
                  
                  <Image src='/map.png' height={50} width={100} className={style.map} alt='' />
                  <p className={style.abu2}>Purwokerto, jawa tengah</p>
                </div>
                <p className="">Freelancer</p>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the cards content.
                </p>
                <Link href="#" className={style.link2}>
                  <button className={style.btn2}>Simpan</button>
                </Link>
                <Link href="#" className={style.link2}>
                  <button onClick={(e) => deleteRow( e)}  className={style.btn3}>Delete Account</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className={style.pengalaman}>
              <div class="card text-left">
                <div class="card-header">
                  <h4>Data diri</h4>
                </div>
                <div class="card-body">
                  <form onSubmit={(e) => handlePost(e)}>
                    {data1.map((item, index) => (
                      <div key={index}>
                        <label htmlFor="inputname" className="">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          className={`form-control ${style.inputan}`}
                          id="inputEmail"
                          placeholder="Masukan Nama Lengkap"
                          defaultValue={item.username}
                          onChange={(e) => setUpdate({...update,username: e.target.value})}
                        />
                        <label htmlFor="inputPassword" className="">
                          job desk
                        </label>
                        <input
                          type="text"
                          className={`form-control ${style.inputan}`}
                          id="inputPassword"
                          placeholder="Masukan job desk"
                          defaultValue={item.jobdesk}
                          onChange={(e) => setUpdate({...update,jobdesk: e.target.value})}
                        />
                        <label htmlFor="inputEmail" className="">
                          Domisili
                        </label>
                        <input
                          type="text"
                          className={`form-control ${style.inputan}`}
                          id="inputEmail"
                          placeholder="Masukan Domisili"
                          defaultValue={item.domisili}
                          onChange={(e) => setUpdate({...update,domisili: e.target.value})}
                        />
                        <label htmlFor="inputPassword" className="">
                          Tempat kerja
                        </label>
                        <input
                          type="text"
                          className={`form-control ${style.inputan}`}
                          id="inputPassword"
                          placeholder="Masukan Tempat kerja"
                          defaultValue={item.loker}
                          onChange={(e) => setUpdate({...update,loker: e.target.value})}
                        />
                        <label htmlFor="inputEmail" className="">
                          Deskripsi singkat
                        </label>
                        <textarea
                          type="email"
                          className={`form-control ${style.inputan1}`}
                          id="inputEmail"
                          placeholder="Masukan Deskripsi singkat"
                          defaultValue={item.diskripsi}
                          onChange={(e) => setUpdate({...update,diskripsi: e.target.value})}
                        />
                        <button type="submit" className={style.btn4}>Simpan</button>
                      </div>
                    ))}
                  </form>
                </div>
              </div>
              <div className={style.inputskill}>
                <div class="card text-left">
                  <div class="card-header">
                    <h5>Skill</h5>
                  </div>
                  <div class="card-body">
                    <div class="card-text">
                      <div className="d-flex flex">
                        <input
                          type="text"
                          className={`form-control ${style.inputan}`}
                          id="inputPassword"
                          placeholder="Java"
                        />
                        <button className={style.btn5}>Simpan</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className={style.inputskill}>
                <div class="card text-left">
                  <div class="card-header">
                    <h5>Pengalaman kerja</h5>
                  </div>
                  <div class="card-body">
                    <div class="card-text">
                      <input
                        type="text"
                        className={`form-control ${style.inputan}`}
                        id="inputPassword"
                        placeholder="Java"
                      />
                      <div className="d-flex flex">
                        <div className={`col-md-6 ${style.inputan5}`}>
                          <p>Nama Perusaan</p>
                          <input
                            type="text"
                            className={`form-control ${style.inputan2}`}
                            id="inputPassword"
                            placeholder="PT harus bisa"
                          />
                        </div>
                        <div className={`col-md-6 ${style.inputan6}`}>
                          <p>Tanggal</p>
                          <input
                            type="text"
                            className={`form-control ${style.inputan2}`}
                            id="inputPassword"
                            placeholder="Januri 2018"
                          />
                        </div>
                      </div>
                      <label htmlFor="inputEmail" className="">
                        Deskripsi singkat
                      </label>
                      <textarea
                        type="email"
                        className={`form-control ${style.inputan1}`}
                        id="inputEmail"
                        placeholder="Masukan Deskripsi singkat"
                      />
                      <button className={style.btn6}>Simpan</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style.inputskill}>
                <div class="card text-left">
                  <div class="card-header">
                    <h5>Portofolio</h5>
                  </div>
                  <div class="card-body">
                    <div class="card-text">
                      <input
                        type="text"
                        className={`form-control ${style.inputan}`}
                        id="inputPassword"
                        placeholder="Java"
                      />
                      <input
                        type="text"
                        className={`form-control ${style.inputan}`}
                        id="inputPassword"
                        placeholder="Java"
                      />
                      <div className={style.radioB}>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label class="form-check-label" for="inlineRadio1">
                            Aplikasi Mobile
                          </label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label class="form-check-label" for="inlineRadio2">
                            Aplikasi web
                          </label>
                        </div>
                      </div>
                      <label htmlFor="inputEmail" className="">
                        Upload gambar
                      </label>
                      <div className={style.addPhoto}>
                        
                        <Image src='/panah.png' height={50} width={100}  alt='' />
                        <br></br>
                        <br></br>
                        <br></br>
                        <h6>
                          Drag and Drop untuk Upload Gambar Aplikasi Mobile
                        </h6>
                        <p>atau cari untuk mengupload file dari direktorimu</p>
                        <div className={style.waw}>
                          <div className="d-flex flex text-center">
                            
                          </div>
                        </div>
                        <h5 className="text-muted" id="customBtn">
                          Add image
                        </h5>
                        <input
                          className={style.not}
                          type="file"
                          id="formFile"
                        />
                      </div>
                      <button className={style.btn6}>Simpan</button>
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
export default Profile;
