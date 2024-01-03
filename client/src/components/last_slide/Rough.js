import React, { useEffect, useState } from "react";
import Image from "./Image";
import "./style.css";
import Header from "../pages/Header/Header.js";
import Footer from "../pages/Footer/Footer";
function App() {
  const [users, setUsers] = useState([]);

  // Function to collect data
  const getApiData = async () => {
    const response = await fetch(
      "https://justcors.com/tl_8efa0ea/http://www.currentdiary.com/school/school-api/"
    ).then((response) => response.json());

    setUsers(response);
  };

  useEffect(() => {
    getApiData();
  }, []);
  // console.log(users);
  let arr = [];
  arr = users;

  return (
    <>
      <Header></Header>
      <div className="container extra">
        <h1 className="heading">Integrated Schools</h1>
        <h2 style={{ textAlign: "center" }}>
          Where your child will not feel lesser than any other child
        </h2>

        {arr.map((arr, index) => {
          let temp = fetch("https://justcors.com/tl_04fefab/" + arr.url).then(
            (response) => response.json()
          );
          console.log(index);
          console.log(temp);
          return <Image url={arr.image} title={arr.location}></Image>;
        })}
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;
{
  /* <Image
  url={school1}
  title={props.schools[0].name + "," + props.schools[0].address}
></Image>; */
}

{
  /* {users &&
        users.map((user) => (
          <div className="item-container">
            Id:{user.id} <div className="title">Title:{user.title}</div>
          </div>
        ))} */
}
