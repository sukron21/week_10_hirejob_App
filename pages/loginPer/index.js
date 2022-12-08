import React, { useEffect, useState} from "react";
import Styles from "../../styles/login.module.css";
import Link from "next/link";
import { useRouter } from 'next/router'
import axios from "axios";

const LoginPer = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email:'',
    password:''
})

const klik = (e)=>{
  if (e && e.preventDefault) { e.preventDefault(); }
    // console.log(form)

    axios.post('https://dark-rose-chinchilla-cap.cyclic.app/perusahaan/login',form)
    .then((response)=>{
        // console.log(response.data.token.data)
        // console.log(data)
        if(response.data.status !== 'success'){
          alert (response.data.message)
        }else{
        const token1 = response.data.token.token;
        const name = response.data.token.data.id;
          console.log(name)
        document.cookie = `token=${token1};path/`;
        document.cookie = `name=${name};path/`;

        localStorage.setItem("token", response.data.token.token);
        localStorage.setItem("data",JSON.stringify(response.data.token.data));
        alert("Berhasil Masuk")
        router.push('/landingpageLoginPer')}

    })
    .catch((err)=>{
        console.log(err);
    })
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
            <div className='d-flec flex-row'>
            <form className={Styles.new}onSubmit={(e) => klik(e)}>
                <h3>Halo, Pewpeople</h3>
                <p>Lorem Ipsum dolor sit amet, consector adipiscing elit. In Euismod ipsum et dui rhoncus auctor</p>
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
                <label htmlFor="inputPassword" className={Styles.labelS}>
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    placeholder="Masukan kata sandi"
                    onChange={(e) => setForm({...form,password: e.target.value})}
                  />
                <div className={Styles.lupaPas}>
                    <p>Lupa kata sandi?</p>
                </div>
                <button type="submit" onClick={() => klik()}
                className={Styles.btnCustom1}>
                 Masuk
                </button>
                <p className={Styles.linkR}>
                    Anda belum punya akun ?  
                    <Link className={Styles.linkD} href="/registerPer"> Daftar disini</Link>
                  </p>
            </form>
          </div>
          </div>
          </div>
          </div>
      </section>
    </>
  );
};
export default LoginPer;
