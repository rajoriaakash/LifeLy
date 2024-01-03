import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import myimage from "../../images/survey_img.png";
import "./style.css";
import Header from "../pages/Header/Header.js";
import Footer from "../pages/Footer/Footer";
import axios from "axios";
import { SERVER_URL } from "../../config.js";
import { useNavigate } from "react-router-dom";

// import Option from "./Survey.js";
// const navigate = useNavigate()

let results = [];
const onClick = (e) => {
  const value1 = e.currentTarget.getAttribute("data-value1");
  const value2 = e.currentTarget.getAttribute("data-value2");
  console.log("Values1", value1);
  console.log("Values2", value2);

  results[value1] = value2;
  console.log(results);
};
const RadioInput = ({
  label,
  value,
  checked,
  setter,
  questionno,
  questionop,
  color_code,
}) => {
  // console.log(color_code);
  return (
    <div>
      <div className="div1">
        <p className=" btn btn-primary bttn" style={{ background: color_code }}>
          {label}
        </p>
      </div>
      <div className="div2">
        <input
          type="radio"
          checked={checked == value}
          onChange={() => setter(value)}
          onClick={onClick}
          data-value1={questionno}
          data-value2={questionop}
        />
      </div>
    </div>
  );
};
export default function Survey(props) {
  const navigate = useNavigate();

  document.body.style.zoom = "70%";
  const location = useLocation();
  //   console.log(props, " props");
  //   console.log(location, " useLocation Hook");
  const data = location.state?.data;
  //   console.log(data);
  results = data;
  console.log(results);

  const [question21, setquestion21] = React.useState();
  const [question22, setquestion22] = React.useState();
  const [question23, setquestion23] = React.useState();
  const [question24, setquestion24] = React.useState();
  const [question25, setquestion25] = React.useState();
  const [question26, setquestion26] = React.useState();
  const [question27, setquestion27] = React.useState();
  const [question28, setquestion28] = React.useState();
  const [question29, setquestion29] = React.useState();
  const [question30, setquestion30] = React.useState();
  const [res1, setRes1] = useState(results);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setRes1(results);
      console.log(results);
      const result = {
        result: results,
      };
      console.log(result);
      axios.post(`${SERVER_URL}/predict/percentage`, result).then((res) => {
        console.log(res);
        navigate("/surveyresult", { state: res.data });
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header></Header>
      <div className="container" style={{ maxWidth: "2000px" }}>
        <div className="image-div">
          <img className="my_img" src={myimage} alt="my-img" />
          <div className="image-text">
            <div className="w1">Take The survey</div>
            <div className="w2">
              Give answers to some of our questions and get your child’s problem
              diagnosed.
            </div>
          </div>
        </div>
        <form>
          <div>
            <p>
              21.Does your child ever say that words “wiggle” or “shimmer” on
              the page while he’s reading? ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question21}
              setter={setquestion21}
              questionno="21"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question21}
              setter={setquestion21}
              questionno="21"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question21}
              setter={setquestion21}
              questionno="21"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question21}
              setter={setquestion21}
              questionno="21"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              22.Does your child complain of headaches, stomachaches, or
              dizziness when reading ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question22}
              setter={setquestion22}
              questionno="22"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question22}
              setter={setquestion22}
              questionno="22"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question22}
              setter={setquestion22}
              questionno="22"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question22}
              setter={setquestion22}
              questionno="22"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              23. Does your child spell inconsistently, misspelling words she
              already knows ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question23}
              setter={setquestion23}
              questionno="23"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question23}
              setter={setquestion23}
              questionno="23"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question23}
              setter={setquestion23}
              questionno="23"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question23}
              setter={setquestion23}
              questionno="23"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              24. Does your child have difficulty sustaining attention ? Does
              she space out or get labeled a “daydreamer” ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question24}
              setter={setquestion24}
              questionno="24"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question24}
              setter={setquestion24}
              questionno="24"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question24}
              setter={setquestion24}
              questionno="24"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question24}
              setter={setquestion24}
              questionno="24"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              25. Is your child of average or above-average intelligence, but
              seems unable to read at her grade level?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question25}
              setter={setquestion25}
              questionno="25"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question25}
              setter={setquestion25}
              questionno="25"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question25}
              setter={setquestion25}
              questionno="25"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question25}
              setter={setquestion25}
              questionno="25"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              26. Does your child struggle with word problems — even though he’s
              otherwise good at math?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question26}
              setter={setquestion26}
              questionno="26"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question26}
              setter={setquestion26}
              questionno="26"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question26}
              setter={setquestion26}
              questionno="26"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question26}
              setter={setquestion26}
              questionno="26"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              27. Does your child struggle to copy letters, numbers, or symbols
              ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question27}
              setter={setquestion27}
              questionno="27"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question27}
              setter={setquestion27}
              questionno="27"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question27}
              setter={setquestion27}
              questionno="27"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question27}
              setter={setquestion27}
              questionno="27"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              28. Does your child avoid reading altogether, or does she get
              easily frustrated when completing reading-related assignments ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question28}
              setter={setquestion28}
              questionno="28"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question28}
              setter={setquestion28}
              questionno="28"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question28}
              setter={setquestion28}
              questionno="28"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question28}
              setter={setquestion28}
              questionno="28"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              29.Does your child have difficulty budgeting her time or following
              a schedule ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question29}
              setter={setquestion29}
              questionno="29"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question29}
              setter={setquestion29}
              questionno="29"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question29}
              setter={setquestion29}
              questionno="29"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question29}
              setter={setquestion29}
              questionno="29"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              30. When reading out loud, does your child repeat words, mix up
              letters, or change word order without noticing ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question30}
              setter={setquestion30}
              questionno="30"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question30}
              setter={setquestion30}
              questionno="30"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question30}
              setter={setquestion30}
              questionno="30"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question30}
              setter={setquestion30}
              questionno="30"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>

          <input
            type="button"
            style={{ textDecoration: "none" }}
            className="btn btn-primary btn-lg sub_btn"
            value="Submit"
            onClick={handleSubmit}
          ></input>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}

// import React from "react";

// import myimage from "../../images/survey_img.png";
// import "./style.css";
// import Header from "../Header.js";
// // import Option from "./Survey.js";
// let results = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// export default function Survey(props) {
//   const onClick = (e) => {
//     const value1 = e.currentTarget.getAttribute("data-value1");
//     const value2 = e.currentTarget.getAttribute("data-value2");
//     console.log("Values1", value1);
//     console.log("Values2", value2);
//     results[value1] = value2;
//     console.log(results);
//   };
//   return (
//     <>
//       <Header></Header>
//       <div className="container" style={{ maxWidth: "1800px" }}>
//         {/* <h1>Survey</h1> */}

//         <div className="image-div">
//           <img className="my_img" src={myimage} alt="my-img" />
//           <div className="image-text">
//             <div className="w1">Take The survey</div>
//             <div className="w2">
//               Give answers to some of our questions and get your child’s problem
//               diagnosed.
//             </div>
//           </div>
//         </div>
//         <button
//           type="button"
//           className="btn btn-primary"
//           onClick={onClick}
//           data-value1="5"
//           data-value2="1"
//         />
//       </div>
//       {/* <Option></Option>
//       <Option></Option> */}
//     </>
//   );
// }
// //   <div className="btn-group btn-group-toggle" data-toggle="buttons">
// //     <label className="btn btn-secondary active">
// //       <input
// //         type="checkbox"
// //         name="options"
// //         id="option1"
// //         autocomplete="off"
// //         checked
// //       />{" "}
// //       Active
// //     </label>
// //     <label className="btn btn-secondary">
// //       <input
// //         type="checkbox"
// //         name="options"
// //         id="option2"
// //         autocomplete="off"
// //       />{" "}
// //       Radio
// //     </label>
// //     <label className="btn btn-secondary">
// //       <input
// //         type="checkbox"
// //         name="options"
// //         id="option3"
// //         autocomplete="off"
// //       />{" "}
// //       Radio
// //     </label>
// //   </div>;

// //   <input
// //     type="radio"
// //     className="btn-check"
// //     name="options"
// //     id="option1"
// //     autocomplete="off"
// //     checked
// //   />
// //   <label class="btn btn-secondary" HTMLfor="option1">
// //     Checked
// //   </label>

// {
//   /* <p>1. Do you often notice small sounds when others do not? </p>
//           <button
//             type="button"
//             className="btn btn-primary"
//             dataBsToggle="button"
//             autocomplete="off"
//           >
//             Toggle button
//           </button>
//           <button
//             type="button"
//             className="btn btn-primary active"
//             dataBsToggle="button"
//             autocomplete="off"
//             aria-pressed="true"
//           >
//             Active toggle button
//           </button>
//           <button
//             type="button"
//             className="btn btn-primary"
//             disabled
//             dataBsToggle="button"
//             autocomplete="off"
//           >
//             Disabled toggle button
//           </button> */
// }

// import React from "react";
// import { useLocation } from "react-router-dom";

// export default function Register2(props) {
//   const location = useLocation();
//   console.log(props, " props");
//   console.log(location, " useLocation Hook");
//   const data = location.state?.data;
//   console.log(data);
//   return <div></div>;
// }
