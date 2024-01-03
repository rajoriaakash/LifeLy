import React from "react";
import { useState } from "react";
import myimage from "../../images/survey_img.png";
import "./style.css";
import { Link } from "react-router-dom";
import Header from "../pages/Header/Header.js";
import Footer from "../pages/Footer/Footer";

// import Option from "./Survey.js";

let results = [
  "1", "4", "1", "1", "1", "1", "1", "4", "4", "1", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4", "4",
  "4", "4", "4", "4", "4"
];
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
  document.body.style.zoom = "70%";
  const [question0, setquestion0] = React.useState();
  const [question1, setquestion1] = React.useState();
  const [question2, setquestion2] = React.useState();
  const [question3, setquestion3] = React.useState();
  const [question4, setquestion4] = React.useState();
  const [question5, setquestion5] = React.useState();
  const [question6, setquestion6] = React.useState();
  const [question7, setquestion7] = React.useState();
  const [question8, setquestion8] = React.useState();
  const [question9, setquestion9] = React.useState();
  const [question10, setquestion10] = React.useState();

  const handleSubmit = (e) => {
    // e.preventDefault();
    // let temp = 1;
    // console.log(check);
    // for (let i = 0; i < 11; i++) {
    //   if (check[i] == "0") temp = 0;
    // }
    // <Link
    //   to={{
    //     pathname: "/register",
    //     state: results,
    //   }}
    // >
    //   Register
    // </Link>;
    // if (temp == 1) console.log("successfully submitted");
    // else console.log("fill complete survey");
    // const data = { question1, question2 };
    // const json = JSON.stringify(data, null, 4);
    // console.clear();
    // console.log(json);
  };

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
            <p>0. What is the gender of you child ?</p>
            <RadioInput
              label="Female"
              value="option1"
              checked={question0}
              setter={setquestion0}
              questionno="0"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Male"
              value="option2"
              checked={question0}
              setter={setquestion0}
              questionno="0"
              questionop="2"
              color_code="#F0A9A980"
            />
          </div>
          <div>
            <p>
              1. Does/did your child notice small sounds when others do not ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question1}
              setter={setquestion1}
              questionno="1"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question1}
              setter={setquestion1}
              questionno="1"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question1}
              setter={setquestion1}
              questionno="1"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question1}
              setter={setquestion1}
              questionno="1"
              questionop="3"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              2. Does/did your child usually concentrate more on the whole
              picture, rather than the small details ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question2}
              setter={setquestion2}
              questionno="2"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question2}
              setter={setquestion2}
              questionno="2"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question2}
              setter={setquestion2}
              questionno="2"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question2}
              setter={setquestion2}
              questionno="2"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              3. Does/did your child find it easy to do more than one thing at
              once ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question3}
              setter={setquestion3}
              questionno="3"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question3}
              setter={setquestion3}
              questionno="3"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question3}
              setter={setquestion3}
              questionno="3"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question3}
              setter={setquestion3}
              questionno="3"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              4. If there is an interruption, can he/she switch back to what
              he/she was doing very quickly?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question4}
              setter={setquestion4}
              questionno="4"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question4}
              setter={setquestion4}
              questionno="4"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question4}
              setter={setquestion4}
              questionno="4"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question4}
              setter={setquestion4}
              questionno="4"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              5. Can your child find it easy to ‘read between the lines’ when
              someone is talking to him/her?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question5}
              setter={setquestion5}
              questionno="5"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question5}
              setter={setquestion5}
              questionno="5"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question5}
              setter={setquestion5}
              questionno="5"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question5}
              setter={setquestion5}
              questionno="5"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              6. Can he know how to tell if someone listening to him/her is
              getting bored?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question6}
              setter={setquestion6}
              questionno="6"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question6}
              setter={setquestion6}
              questionno="6"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question6}
              setter={setquestion6}
              questionno="6"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question6}
              setter={setquestion6}
              questionno="6"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              7. Does your child find it difficult to work out the characters’
              intentions while reading the story?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question7}
              setter={setquestion7}
              questionno="7"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question7}
              setter={setquestion7}
              questionno="7"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question7}
              setter={setquestion7}
              questionno="7"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question7}
              setter={setquestion7}
              questionno="7"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              8. Does your child like to collect information about categories of
              things (e.g. types of car, types of bird, types of train, types of
              plant etc)?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question8}
              setter={setquestion8}
              questionno="8"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question8}
              setter={setquestion8}
              questionno="8"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question8}
              setter={setquestion8}
              questionno="8"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question8}
              setter={setquestion8}
              questionno="8"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              9. Does he find it easy to work out what someone is thinking or
              feeling just by looking at their face?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question9}
              setter={setquestion9}
              questionno="9"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question9}
              setter={setquestion9}
              questionno="9"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question9}
              setter={setquestion9}
              questionno="9"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question9}
              setter={setquestion9}
              questionno="9"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>
          <div>
            <p>
              10. Does he find it difficult to work out people’s intentions ?
            </p>
            <RadioInput
              label="Definitely Agree"
              value="option1"
              checked={question10}
              setter={setquestion10}
              questionno="10"
              questionop="1"
              color_code="#a6ea7d80"
            />
            <RadioInput
              label="Slightly Agree"
              value="option2"
              checked={question10}
              setter={setquestion10}
              questionno="10"
              questionop="2"
              color_code="#F0A9A980"
            />
            <RadioInput
              label="Slightly Disagree"
              value="option3"
              checked={question10}
              setter={setquestion10}
              questionno="10"
              questionop="3"
              color_code="#F5EE6B80"
            />
            <RadioInput
              label="Definitely Disagree"
              value="option4"
              checked={question10}
              setter={setquestion10}
              questionno="10"
              questionop="4"
              color_code="#FFD49580"
            />
          </div>

          <Link
            state={{ data: results }}
            to={{
              pathname: "/register",
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
