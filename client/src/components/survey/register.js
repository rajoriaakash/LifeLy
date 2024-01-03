import { useLocation } from "react-router-dom";
import React from "react";
import { useState } from "react";
import myimage from "../../images/survey_img.png";
import "./style.css";
import { Link } from "react-router-dom";
import Header from "../pages/Header/Header.js";
import Footer from "../pages/Footer/Footer";

// import Option from "./Survey.js";

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
  const location = useLocation();
  //   console.log(props, " props");
  //   console.log(location, " useLocation Hook");
  const data = location.state?.data;
  //   console.log(data);
  results = data;
  console.log(results);
  document.body.style.zoom = "70%";
  const [question11, setquestion11] = React.useState();
  const [question12, setquestion12] = React.useState();
  const [question13, setquestion13] = React.useState();
  const [question14, setquestion14] = React.useState();
  const [question15, setquestion15] = React.useState();
  const [question16, setquestion16] = React.useState();
  const [question17, setquestion17] = React.useState();
  const [question18, setquestion18] = React.useState();
  const [question19, setquestion19] = React.useState();
  const [question20, setquestion20] = React.useState();

  const handleSubmit = (e) => {};

  return (
    <>
      <Header></Header>
      <div className="container" style={{ maxWidth: "2000px" }}>
        {/* <h1>Survey</h1> */}

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
        <form onSubmit={handleSubmit}>
          <div>
            <p>11. Does your child become easily distracted?</p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question11}
              setter={setquestion11}
              questionno="11"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question11}
              setter={setquestion11}
              questionno="11"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question11}
              setter={setquestion11}
              questionno="11"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question11}
              setter={setquestion11}
              questionno="11"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              12.Does your child forget to do chores or lose school assignments?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question12}
              setter={setquestion12}
              questionno="12"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question12}
              setter={setquestion12}
              questionno="12"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question12}
              setter={setquestion12}
              questionno="12"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question12}
              setter={setquestion12}
              questionno="12"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              13. Does your child struggle to follow instructions or pay
              attention to details?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question13}
              setter={setquestion13}
              questionno="13"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question13}
              setter={setquestion13}
              questionno="13"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question13}
              setter={setquestion13}
              questionno="13"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question13}
              setter={setquestion13}
              questionno="13"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              14. Does your child have difficulty managing time or following
              through with tasks?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question14}
              setter={setquestion14}
              questionno="14"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question14}
              setter={setquestion14}
              questionno="14"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question14}
              setter={setquestion14}
              questionno="14"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question14}
              setter={setquestion14}
              questionno="14"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              15.Does your child become easily frustrated with difficult tasks?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question15}
              setter={setquestion15}
              questionno="15"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question15}
              setter={setquestion15}
              questionno="15"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question15}
              setter={setquestion15}
              questionno="15"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question15}
              setter={setquestion15}
              questionno="15"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              16. Does your child fidget or squirm and have trouble being still?
              Does it interfere with his education or ability to function
              socially?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question16}
              setter={setquestion16}
              questionno="16"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question16}
              setter={setquestion16}
              questionno="16"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question16}
              setter={setquestion16}
              questionno="16"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question16}
              setter={setquestion16}
              questionno="16"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              17. Does your child interrupt others or have trouble taking turns?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question17}
              setter={setquestion17}
              questionno="17"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question17}
              setter={setquestion17}
              questionno="17"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question17}
              setter={setquestion17}
              questionno="17"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question17}
              setter={setquestion17}
              questionno="17"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              18. Does your child talk rapidly and find it difficult to
              participate quietly?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question18}
              setter={setquestion18}
              questionno="18"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question18}
              setter={setquestion18}
              questionno="18"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question18}
              setter={setquestion18}
              questionno="18"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question18}
              setter={setquestion18}
              questionno="18"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              19. Does your child have trouble coping with stressful situations?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question19}
              setter={setquestion19}
              questionno="19"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question19}
              setter={setquestion19}
              questionno="19"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question19}
              setter={setquestion19}
              questionno="19"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question19}
              setter={setquestion19}
              questionno="19"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>

          <div>
            <p>
              20. Does he find it difficult to work out people’s intentions ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question20}
              setter={setquestion20}
              questionno="20"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question20}
              setter={setquestion20}
              questionno="20"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question20}
              setter={setquestion20}
              questionno="20"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question20}
              setter={setquestion20}
              questionno="20"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>

          <Link
            state={{ data: results }}
            to={{
              pathname: "/register2",
            }}
          >
            <button
              style={{ textDecoration: "none" }}
              className="btn btn-primary btn-lg sub_btn"
              type="submit"
            >
              NEXT
            </button>
          </Link>
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

// export default function Register(props) {
//   const location = useLocation();
//   console.log(props, " props");
//   console.log(location, " useLocation Hook");
//   const data = location.state?.data;
//   console.log(data);
//   return <div></div>;
// }
