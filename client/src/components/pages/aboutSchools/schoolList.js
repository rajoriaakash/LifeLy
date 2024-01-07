import React from "react";
import school1 from "../../images/school1.png";
import school2 from "../../images/school2.png";
import school3 from "../../images/school3.png";
import school4 from "../../images/school4.png";
import "./style.css";
import Header from "../Header/Header.js";
import Footer from "../Footer/Footer.js";
import Image from "./Image.js";
export default function LastSlide(props) {
  document.body.style.zoom = "50%";
  return (
    <>
      <Header></Header>
      <div className="container " style={{ maxWidth: "1600px" }}>
        <h1 className="heading">{props.title}</h1>
        <h2>Where your child will not feel lesser than any other child</h2>
        <div className="parent">
          <div className="image1">
            <Image
              url={school1}
              title={props.schools[0].name + "," + props.schools[0].address}
            ></Image>
          </div>
          <div className="image2 ">
            <Image
              url={school2}
              title={props.schools[1].name + "," + props.schools[1].address}
            ></Image>
          </div>
        </div>
        <div className="parent">
          <div className="image1">
            <Image
              url={school1}
              title={props.schools[0].name + "," + props.schools[0].address}
            ></Image>
          </div>
          <div className="image2 ">
            <Image
              url={school2}
              title={props.schools[1].name + "," + props.schools[1].address}
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
LastSlide.defaultProps = {
  title: "Integrated Schools",
  schools: [
    {
      name: " ABC International School",
      address: "Sector -5, New Delhi",
    },
    {
      name: "XYZ International School",
      address: "Sector -3, Mumbai",
    },
  ],
};
