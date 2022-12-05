import Link from "next/link";
import { useRouter } from "next/router";
import react, { useEffect, useState } from "react";
import style from "../../styles/profile.module.css";
import axios from "axios";
import Navbar from "../../component/navbar";
import Footer from "../../component/footer";
import Image from 'next/image'

export async function getStaticProps(context) {
  try {
    const { id } = context.params;
    const response = await axios({
      method: "GET",
      url: `https://dark-rose-chinchilla-cap.cyclic.app/perusahaan/${id}`,
    });
    return {
      props: {
        data: response.data,
      },
      revalidate: 60,
      notFound: false,
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
      revalidate: 60, // 60 second
      notFound: true,
    };
  }
}
export async function getStaticPaths() {
  const response = await axios({
    method: "GET",
    url: `https://dark-rose-chinchilla-cap.cyclic.app/perusahaan`,
  });
  // console.log(response.data)

  const paths = response.data.data.rows.map((item) => {
    return { params: { id: item.id.toString() } };
  });
  console.log(paths);
  return {
    paths,
    fallback: "blocking", // can also be true or 'blocking'
  };
}

const Detail = (props) => {
  // const router = useRouter();
  // const [data, setData] = useState([]);
  // const { id } = router.query;

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3001/user/${id}`)
  //     .then((response) => {
  //       setData(response.data.data.rows);
  //       console.log(response.data.data.rows);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       router.push("/login");
  //     });
  // }, []);

  return (
    <>
      {/* {JSON.stringify(props.data.data.rows)} */}
      <div className="container-fluid">
        <Navbar />
        {props.data.data.rows.map((item, index) => (
          <div key={index}>
            <div className={` ${style.all}`}>
              <div className="container">
                <div className="col-md-12">
                  <div className={`card ${style.bg2}`}>
                    <div className={` ${style.bg3}`}></div>
                    <Image src="/luis.png" className={style.pp1} height={150} width={100} alt='' />
                    <div className="card-body">
                      <h4 className="card-title">{item.nama_perusahaan}</h4>
                      
                      <div className="d-flex flex-row justify-content-center">
                      <Image src="/map.png" className={style.map} height={50} width={100} alt='' />
                        <p className={style.abu2}>Purwokerto, jawa tengah</p>
                      </div>
                      <p className={style.abu2}>Freelancer</p>
                      <p className={`card-text ${style.abu2}`}>
                        Some quick example text to build on the card title and
                        make up the bulk of the cards content.
                      </p>
                      <div className={style.sosmed}>
                  <div className="d-flex flex-row justify-content-center">
                    <Image src="/mail.png" className={style.map} height={50} width={100} alt='' />
                    <p className={style.abu2}>louistommo@gmail.com</p>
                  </div>
                  <div className="d-flex flex-row justify-content-center">
                    <Image src="/instagram.png" className={style.map} height={50} width={100} alt='' />
                    <p className={style.abu2}>louistommo@gmail.com</p>
                  </div>
                  <div className="d-flex flex-row justify-content-center">
                    <Image src="/git.png" className={style.map} height={50} width={100} alt='' />
                    <p className={style.abu2}>louistommo@gmail.com</p>
                  </div>
                  <div className="d-flex flex-row justify-content-center">
                    <Image src="/kucing.png" className={style.map} height={50} width={100} alt='' />
                    <p className={style.abu2}>louistommo@gmail.com</p>
                  </div>
                </div>
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default Detail;
