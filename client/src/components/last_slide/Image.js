import React from "react";
import school1 from "../../images/school1.png";
import "./style.css";
import Header from "../pages/Header/Header.js";
import Footer from "../pages/Footer/Footer";
export default function Image(props) {
  return (
    <>
      <div className="parent">
        <div className="rect">
          <div className="rectangle1">
            <img src={props.url} className="image" alt="school-1" />
          </div>
          <div className="rectangle2">
            <p
              style={{
                margin: "0em 0em",
                textAlign: "center",
                display: "block",
                fontSize: "0.9em",
              }}
            >
              {props.title}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
