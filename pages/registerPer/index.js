import React, { useEffect, useState} from "react";
import Styles from "../../styles/login.module.css";
import Link from "next/link";
import axios from "axios";
import { useRouter } from 'next/router'

const RegisterPer = () => {
  const router = useRouter();
  const [form, setForm]=useState({
    username: '',
    email:'',
    nama_perusahaan:'',
    jabatan:'',
    phone: '',
    password:'',
    newPass:'',
    
})
const onSubmitHandler = (e) => {
  e.preventDefault();
  console.log(form);
  if(form.username === "" || form.password === "" || form.phone === ""){
      alert("Data tidak boleh kosong");
  } else {
      const body = {
          username: form.username,
          email:form.email,
          nama_perusahaan:form.nama_perusahaan,
          jabatan:form.jabatan,    
          phone: form.phone,
          password: form.password,
          newPass:form.newPass,
      }
      if(form.password !==form.newPass){
        alert("Password tidak sama")
      }
        else{
      axios.post('http://localhost:3002/perusahaan/register', body)
      .then((res) => {
          console.log(res.data);
          alert("Register Succes");
          router.push('/loginPer')
      })
      .catch((err) => {
          console.log(err);
          
      })
  }
}
}
  return (
    <>
      <section className={Styles.loginuser}>
        <div className="container">
          <div className="row ">
            <div className="col-md-6">
            <div className={Styles.containerLogo}>
            <div className={Styles.kata2}>
              <h2>Temukan developer</h2>
              <h2>berbakat & Terbaik</h2>
              <h2>di berbagai bidang</h2>
              <h2>keahlian</h2>
              </div>
              </div>
            </div>
            
            <div className="col-md-6">
            <form className={Styles.new } onSubmit={(e) => onSubmitHandler(e)}>
                <h3>Halo, Pewpeople</h3>
                <p>Lorem Ipsum dolor sit amet, consector adipiscing elit. In Euismod ipsum et dui rhoncus auctor</p>
                <label htmlFor="inputName" className={Styles.labelS}>
                  Nama
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Masukan nama panjang"
                  onChange={(e) => setForm({...form,username: e.target.value})}
                />
                 <label htmlFor="inputEmail" className={Styles.labelS}>
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Masukan alamat email"
                  onChange={(e) => setForm({...form,email: e.target.value})}
                />
                <label htmlFor="inputEmail" className={Styles.labelS}>
                  Perusahaan
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputPerusahaan"
                  placeholder="Masukan nama perusahaan"
                  onChange={(e) => setForm({...form,nama_perusahaan: e.target.value})}
                />
                <label htmlFor="inputEmail" className={Styles.labelS}>
                  Jabatan
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Posisi di perusahaan"
                  onChange={(e) => setForm({...form,jabatan: e.target.value})}
                />
                <label htmlFor="inputEmail" className={Styles.labelS}>
                  No handphone
                </label>
                <input
                  type="integer"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Masukan no handphone"
                  onChange={(e) => setForm({...form,phone: e.target.value})}
                />
                <label htmlFor="inputPassword" className={Styles.labelS}>
                    Kata sandi
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Masukan kata sandi"
                    onChange={(e) => setForm({...form,password: e.target.value})}
                  />
                  <label htmlFor="inputPassword" className={Styles.labelS}>
                   Konfirmasi kata sandi
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Masukan konfirmasi kata sandi"
                    onChange={(e) => setForm({...form,newPass: e.target.value})}
                  />
                <button type="submit"
                className={Styles.btnCustom3}>
                 Daftar
                </button>
                <p className={Styles.linkR}>
                    Anda sudah punya akun ?  
                    <Link className={Styles.linkD} href="#"> Masuk disini</Link>
                  </p>
            </form>
          </div>
          </div>
          </div>
      </section>
    </>
  );
};
export default RegisterPer;
