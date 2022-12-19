import styles from "../../styles/home1.module.css";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios'
import Link from 'next/link'
import NavbarPer from "../../component/navbarPer"
import Footer from "../../component/footer"
import Image from 'next/image'

const Home = () => {
  const [sort, setSort] = useState('username')
  const [asc, setAsc] = useState('asc')
  const [page, setPage] = useState(1)
  const router = useRouter ();
  const [data, setData] = useState([])
  const [Search, setSearch] = useState();
  const [data2, setData2] = useState([]);
  
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(Search);

    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/username/${Search}`)
      .then((response) => {
        // console.log(response.data.rows)
        
        if (response.data.rowCount == 0) {
          alert("Data Tidak ada");
        } else {
          // router.push("#");
          setData2(response.data.rows)
          // console.log(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const search = data.rows.username;
  // const [data2, setData2] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get(`${process.env.REACT_APP_BACKEND_URL}/nama/${search}`)
  //     .then((response) => {
  //       console.log(response.data)
  //       setData2(response.data)
        // console.log(response.data[0]);
        // setTitle(response.data[0].nama_recipe)
        // setingredients(response.data[0].ingredients.split(','))
        // SetImage(response.data[0].image)
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
      
  // },[]);
  // useEffect(() => {
  //   let data;
  //   if(data2===''){
  //     data=data1
  //   }else{
  //     data=data2
  //   }
  // }, [data1, data2])
useEffect(() => {
  getData(sort, asc, 3, page)
}, [sort, asc, page])

const getData = (sort, asc, limit, page) => {
  axios.get(`${process.env.NEXT_PUBLIC_API_URL
  }/user?sort=${sort}&asc=${asc}&limit=${limit}${
    page ? `&page=${page}` : ""
  }`)
    .then((response) => {
      // console.log(response.data)
      setData(response.data.rows)
    })
    .catch((error) => {
      console.error(error)
      // router.push('/login')
    })
}
const handleSorting = () => {
  if (sort == "username") {
    setSort("id");
  } 
  getData(sort, asc, 5, page)
};

const handleSortasc = () => {
  if (asc == "asc") {
    setAsc("desc");
  } else {
    setAsc("asc");
  }
  getData(sort, asc, 5, page)
};

const NextPage = () => {
  setPage(page + 1);
  getData(sort, asc, 5, page)
  console.log(page);
};
const PreviousPage = () => {
  if (page > 1) {
    setPage(page - 1);
      console.log(page);
      getData(sort, asc, 5, page-1)
    }
  };
// let data;
// if (data2==""){
// data1=data
// }else{
//   data2=data
// }
  return (
    <>
    
    <section className="topjobs">
        <div className="container-fluid">
        <NavbarPer/>
        {/* {JSON.stringify(data)} */}
          <div className="row">
            <div className={`p-5 ${styles.top}`}>
              <p className={styles.title}> Top Jobs </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.main}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 py-5 g-0">
              <div className={`input-group flex-nowrap ${styles.cari}`}>
              <form className={styles.cari5} onSubmit={(e) => onSubmit(e)}>
                <input onChange={(e) => setSearch(e.target.value)} type="text" className={`form-control ${styles.inputnih}`} id={styles.cari2} placeholder="Search for any skill" aria-describedby="addon-wrapping" />
                </form>
                <span className={`input-group-text ${styles.spanCostum}`} id="addon-wrapping">
                
                  <Image src='/search.png' width={20} height={20} alt=''/>
                </span>
                
                <span className={`input-group-text ${styles.spanCostum}`} id="addon-wrapping">
                  <div className="dropdown">
                    <button className={`btn btn-secondary dropdown-toggle ${styles.spanCostumsort}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Sort
                    </button>
                    <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" href="#" onClick={()=> handleSortasc()}>Sortir berdasarkan {asc}</Link></li>
                      <li><Link className="dropdown-item" href="#" onClick={()=> handleSorting()}>Sortir berdasarkan {sort}</Link></li>
                    </ul>
                  </div>
                </span>
                <span className={`input-group-text ${styles.spanCostum}`} id="addon-wrapping">
                  <button className={styles.spanCostumbutton}> Search </button>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
          {/* { data.length===0?(
            <>isLoading...</>
          )
          :
          data2.length === 0 ?
           data.map((item, index) => (
            <div key={index}>
               <div className={`col-md-12 mb-1 ${styles.content}`}>
              <div className="d-flex flex-row p-3">
                <Image src='/luis.png' height={100} width={100} className="col-md-1" alt='' />
                <div className="col-md-5 d-flex flex-column ms-5">
                  <p className={styles.textName}>{item.username}</p>
                  <p className={styles.textProfession}>Web developer</p>
                  <div className="d-flex flex-row">
                    <Image src='/mappin.svg' height={25} width={10} alt='' />
                    <p className={`ms-2 ${styles.textLocation}`}>Lorem ipsum</p>
                  </div>
                  <div className="d-flex flex-row">
                    <ul className='p-0'>
                      <li className={`${styles.textSkill} px-4 py-2 me-3`}>PHP</li>
                      <li className={`${styles.textSkill} px-4 py-2 me-3`}>JavaScript</li>
                      <li className={`${styles.textSkill} px-4 py-2 me-3`}>HTML</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5 d-flex flex-row align-items-center justify-content-end">
                <Link href={`/profile/${item.id}`}>
                  <button className={`  px-4 ${styles.toProfile}`}> Lihat Profile</button>
                  </Link>
                </div>
              </div>
            </div>
            </div>
          )):
          data2.map((item, index) => (
            <div key={index}>
               <div className={`col-md-12 mb-1 ${styles.content}`}>
              <div className="d-flex flex-row p-3">
                <Image src='/luis.png' height={100} width={100} className="col-md-1" alt='' />
                <div className="col-md-5 d-flex flex-column ms-5">
                  <p className={styles.textName}>{item.username}</p>
                  <p className={styles.textProfession}>Web developer</p>
                  <div className="d-flex flex-row">
                    <Image src='/mappin.svg' height={25} width={10} alt='' />
                    <p className={`ms-2 ${styles.textLocation}`}>Lorem ipsum</p>
                  </div>
                  <div className="d-flex flex-row">
                    <ul className='p-0'>
                      <li className={`${styles.textSkill} px-4 py-2 me-3`}>PHP</li>
                      <li className={`${styles.textSkill} px-4 py-2 me-3`}>JavaScript</li>
                      <li className={`${styles.textSkill} px-4 py-2 me-3`}>HTML</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5 d-flex flex-row align-items-center justify-content-end">
                <Link href={`/profile/${item.id}`}>
                  <button className={`  px-4 ${styles.toProfile}`}> Lihat Profile</button>
                  </Link>
                </div>
              </div>
            </div>
            </div>
          ))
        }    */}
        <div className={styles.pagination}>
            <button className="  my-5 col-md-2  " onClick={()=> PreviousPage()}> Preveous </button>
            <button className="  my-5 col-md-2 ">{page}</button>
            <button className=" my-5 col-md-2  " disabled={data <= 0} onClick={()=> NextPage()}>Next</button>
          </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};
export default Home;
