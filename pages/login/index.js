import React, { useEffect, useState} from "react";
import Styles from "../../styles/login.module.css";
import Link from "next/link";
import { useRouter } from 'next/router'
import axios from "axios";
import Image from 'next/image'

const Login = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    email:'',
    password:''
})

const klik = (e)=>{
  if (e && e.preventDefault) { e.preventDefault(); }
    // console.log(form)

    axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`,form)
    .then((response)=>{
        // console.log(response.data.token.data)
        // console.log(data)
        if(response.data.status !== 'success'){
          alert (response.data.message)
        }else{
        localStorage.setItem("token", response.data.token.token);
        localStorage.setItem("data",JSON.stringify(response.data.token.data));
        alert("Berhasil Masuk")
        router.push('/landingpageUser')}

    })
    .catch((err)=>{
        console.log(err);
    })
}
// const onSubmit = (e) => {
//   e.preventDefault();
//   const body = {
//     name: getForm.name,
//     password: getForm.password,
//   };

//   axios
//     .post('http://localhost:3001/login', body)
//     .then(async (res) => {
//       const token = res.data.token.token;
//       const name = res.data.token.data.name;

//       document.cookie = `token=${token};path/`;
//       document.cookie = `name=${name};path/`;

//       Swal.fire({
//         icon: 'success',
//         title: 'Sucess to login!',
//         showConfirmButton: false,
//         timer: 1800,
//       });
//       router.push('/home');
//     })
//     .catch((err) => {
//       Swal.fire({
//         icon: 'error',
//         title: 'gagal login',
//         showConfirmButton: false,
//         timer: 1500,
//       });
//     });
// };
  return (
    <>
      <section className={Styles.loginuser}>
        <div className="container ">
          <div className="row ">
            <div className="col-md-6">
            <div className={Styles.containerLogo}>
            <Image className={Styles.tak10} src="/book1.png" width={100} height={30} alt=''  />
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
            <form className={Styles.new} onSubmit={(e) => klik(e)}>
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
                    <Link className={Styles.linkD} href="/register"> Daftar disini</Link>
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
export default Login;
