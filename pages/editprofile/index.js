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
  const [imagePortofolio, setImagePortofolio] = useState();
  const [imageUser, setImageUser] = useState();
  const [isActive, setisActive] = useState(false);
  const handleImageUser = (event) => {
    const fileUploaded = event.target.files[0];
    document.getElementById("formFile").innerHTML = fileUploaded.name;
    setImageUser(fileUploaded);
  };
    const handleImagePorto = (event) => {
        const fileUploaded = event.target.files[0];
        document.getElementById("formFile").innerHTML = fileUploaded.name;
        setImagePortofolio(fileUploaded);
      };
    
    const [formporto, setFormporto] = useState({
        name: '',
        linkrepo: '',
        imageporto: '',
        type: '',
        // id_user:'',
    })

  const [update, setUpdate] = useState({
    username: data1.username,
    jobdesk: data1.jobdesk,
    domisili: data1.domisili,
    loker: data1.loker,
    diskripsi: data1.diskripsi,
    skill:data1.skill
})
const [pengalaman, setPengalaman] = useState({
  posisi: "",
  namaper: "",
  tgl: "",
  deskripsi:"",
  skill:""
})

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id;
    console.log(id);
    axios
      .get(`https://dark-rose-chinchilla-cap.cyclic.app/user/${id}`)
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
        diskripsi: update.diskripsi,
        skill:update.skill
        
    }
    axios
        .put(`https://dark-rose-chinchilla-cap.cyclic.app/user/${id}`, form)
        .then((res) => {
            console.log(res);
            alert("Update Success");
            router.push('/profile');
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
    .delete(`https://dark-rose-chinchilla-cap.cyclic.app/user/${id}`)
    .then((res) => {
      console.log(res);
      alert("Delete Success");
      router.push('/login')
    })
    .catch((err) => {
      console.log(err);
    })
  }
  const onSubmituser = (e)=>{
    e.preventDefault
    const data = JSON.parse(localStorage.getItem("data"));
    const id = data.id;
    const inputForm = new FormData();
    inputForm.append("photo", imageUser);
    axios.put(`${process.env.NEXT_PUBLIC_API_URL}/user/photo/${id}`, inputForm)
            .then((response) => {
                if (response.data.status != 'success') {
                    alert(response.data.message)
                } else {
                    alert("data berhasil ditambahkan")
                    console.log(response.data)
                    router.push('/profile')
                }
            }).catch((err) => {
                console.error(err)
            })   
  }
  const onSubmitporto = (e) => {
    e.preventDefault();
    const data = JSON.parse(localStorage.getItem("data"));
    const id_user = data.id;
        const inputForm = new FormData();
        inputForm.append("namaapp", formporto.namaapp);
        inputForm.append("linkrepo", formporto.linkrepo);
        inputForm.append("photo", imagePortofolio);
        inputForm.append("type", formporto.type);
        inputForm.append("iduser", id_user);
        axios.post(`${process.env.NEXT_PUBLIC_API_URL}/porto`, inputForm)
            .then((response) => {
                    alert("data berhasil ditambahkan")
                    console.log(response.data)
                    router.push('/profile')
                // console.log(response.data)
                // return navigate('/')
            }).catch((err) => {
                console.error(err)
            })   
          }
      const handlePostpengalaman = (e) => {
      const data = JSON.parse(localStorage.getItem("data"));
      const id = data.id
      e.preventDefault();
      const form = {
      posisi: pengalaman.posisi,
      namaper: pengalaman.namaper,
      tgl: pengalaman.tgl,
      deskripsi: pengalaman.deskripsi,
      iduser:id
      }
      axios
      .post('https://dark-rose-chinchilla-cap.cyclic.app/pengalaman', form)
      .then((res) => {
      console.log(res);
      alert("insert Success");
     router.push('/profile');
      })
      .catch((err) => {
      console.log(err);
      alert("insert Failed");
      })
        };
  return (
    <>
      {/* {JSON.stringify(data1)} */}
      <div className="container-fluid">
        <Navbar/>
        <div className="row">
          <div className={`ps-5  ${style.bg}`}></div>
          <div className="col-md-5">
          {data1.map((item, index) => (
            <>
            <form onSubmit={(e) => onSubmituser(e)}>
            <div key={index} className={`card ${style.bg1}`}>
              <Image src={item.photo_url} height={150} width={100} className={style.pp} alt='' />
              <div onClick={() => setisActive(!isActive)} className="d-flex flex-row mt-4">
              <Image src="/pencil.png" height={15} width={15}  alt='' />
              <p >Edit</p>
              </div>
              {isActive !== true ? (
            <></>
          ) : (<>
          <input
            className={style.not}
            type="file"
            id="formFile"
            onChange={handleImageUser}
          />
          </>)
            }
              {/* {data1.map((item, index) => (
                 <div key={index}>
                   <h4 className="card-title">{item.username}</h4>
                 </div>
              ))} */}
              <div className="card-body">
               <h4 className="card-title">{item.username}</h4>
                <p>{item.jobdesk===null?(<> mohon lengkapi data terlebih dahulu</>):item.jobdesk}</p>
                <div className="d-flex flex-row">
                  
                  <Image src='/map.png' height={50} width={100} className={style.map} alt='' />
                  <p className={style.abu2}>{item.domisili===null?(<> mohon lengkapi data terlebih dahulu</>):item.domisili}</p>
                </div>
                <p className="">{item.loker===null?(<> mohon lengkapi data terlebih dahulu</>):item.loker}</p>
               
                  <button type="submit" className={style.btn2}>Simpan</button>
               
                <Link href="#" className={style.link2}>
                  <button onClick={(e) => deleteRow( e)}  className={style.btn3}>Delete Account</button>
                </Link>
              </div>
            </div>
            </form>
            </>
            ))}
            {/* sini */}
          </div>
          <div className="col-md-7">
            <div className={style.pengalaman}>
              <div className="card text-left">
                <div className="card-header">
                  <h4>Data diri</h4>
                </div>
                <div className="card-body">
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
                          type="text"
                          className={`form-control ${style.inputan1}`}
                          id="inputEmail"
                          placeholder="Masukan Deskripsi singkat"
                          defaultValue={item.diskripsi}
                          onChange={(e) => setUpdate({...update,diskripsi: e.target.value})}
                        />
                        <label htmlFor="inputEmail" className="">
                          Skill
                        </label>
                         <input
                          type="text"
                          className={`form-control ${style.inputan}`}
                          placeholder="Java, phyton"
                          defaultValue={item.skill}
                          onChange={(e) => setUpdate({...update,skill: e.target.value})}
                        />
                        <button type="submit" className={style.btn4}>Simpan</button>
                      </div>
                    ))}
                  </form>
                </div>
              </div>
              {/* <div className={style.inputskill}>
                <div className="card text-left">
                  <div className="card-header">
                    <h5>Skill</h5>
                  </div>
                  <div className="card-body">
                    <div className="card-text">
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
              </div> */}
              {/* pengalaman */}
              <form onSubmit={(e) => handlePostpengalaman(e)}>
              <div className={style.inputskill}>
                <div className="card text-left">
                  <div className="card-header">
                    <h5>Pengalaman kerja</h5>
                  </div>
                  <div className="card-body">
                    <div className="card-text">
                    <label htmlFor="inputEmail" className="">
                        Posisi
                      </label>
                      <input
                        type="text"
                        className={`form-control ${style.inputan}`}
                        id="inputPassword"
                        placeholder="HRD"
                        onChange={(e) => setPengalaman({...pengalaman,posisi: e.target.value})}
                      />
                      <div className="d-flex flex">
                        <div className={`col-md-6 ${style.inputan5}`}>
                          <p>Nama Perusahaan</p>
                          <input
                            type="text"
                            className={`form-control ${style.inputan2}`}
                            id="inputPassword"
                            placeholder="PT harus bisa"
                            onChange={(e) => setPengalaman({...pengalaman,namaper: e.target.value})}
                          />
                        </div>
                        <div className={`col-md-6 ${style.inputan6}`}>
                          <p>Tanggal</p>
                          <input
                            type="text"
                            className={`form-control ${style.inputan2}`}
                            id="inputPassword"
                            placeholder="Januri 2018"
                            onChange={(e) => setPengalaman({...pengalaman,tgl: e.target.value})}
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
                        onChange={(e) => setPengalaman({...pengalaman,deskripsi: e.target.value})}
                      />
                      <button type="submit" className={style.btn6}>Simpan</button>
                    </div>
                  </div>
                </div>
              </div>
              </form>
              {/* pengalaman */}
              {/* porto */}
              <form onSubmit={(e) => onSubmitporto(e)}>
              <div className={style.inputskill}>
                <div className="card text-left">
                  <div className="card-header">
                    <h5>Portofolio</h5>
                  </div>
                  
                  <div className="card-body">
                    <div className="card-text">
                    <label htmlFor="inputEmail" className="">
                        Nama Aplikasi
                      </label>
                      <input
                        type="text"
                        className={`form-control ${style.inputan}`}
                        id="inputPassword"
                        placeholder="Facebook"
                        onChange={(e) => setFormporto({...formporto,namaapp: e.target.value})}
                      />
                      <label htmlFor="inputEmail" className="">
                        Link Repository
                      </label>
                      <input
                        type="text"
                        className={`form-control ${style.inputan}`}
                        id="inputPassword"
                        placeholder="https://"
                        onChange={(e) => setFormporto({...formporto,linkrepo: e.target.value})}
                      />
                      <label htmlFor="inputEmail" className="">
                      Type Portofolio
                    </label>
                      <div className={style.radioB}>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="0"
                            onChange={(e) => setFormporto({...formporto,type: e.target.value})}
                          />
                          <label className="form-check-label" for="inlineRadio1">
                            Aplikasi Mobile
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="1"
                            onChange={(e) => setFormporto({...formporto,type: e.target.value})}
                          />
                          <label className="form-check-label" for="inlineRadio2">
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
                          onChange={handleImagePorto}
                        />
                      </div>
                      <button type="submit" className={style.btn6}>Simpan</button>
                    </div>
                  </div>
                  
                </div>
              </div>
              </form>
              {/* porto */}
            </div>
          </div>
        </div>
        <Footer/> 
      </div>
      
    </>
  );
};
export default Profile;
