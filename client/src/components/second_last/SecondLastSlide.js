import React from "react";
// import { Table } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

import "./style.css";

import about1 from "../../images/about_1.png";
import about2 from "../../images/about_2.png";
import about3 from "../../images/about_3.png";
import about4 from "../../images/about_4.png";
import Header from "../pages/Header/Header.js";
import Footer from "../pages/Footer/Footer.js";
import { useNavigate } from 'react-router-dom'

export default function SecondLastSlide(props) {
  const navigate = useNavigate()

  document.body.style.zoom = "50%";
  return (
    //col-md-6
    <>
      <Header></Header>
      <div className="container " style={{ maxWidth: "1600px" }}>
        <h1 className="heading">{props.title}</h1>

        <p></p>
        <img src={about1} className="img1" alt="about-1" />
        <div className="div11">
          <p className="para">
            <b>ADHD </b>
          </p>
          <p className="para">
            ADHD stands for attention deficit hyperactivity disorder. It’s a
            brain disorder that affects how you pay attention, sit still, and
            control your behavior. It happens in children and teens and can
            continue into adulthood.
          </p>
          <a
            className="anchor"
            href="https://www.cdc.gov/ncbddd/adhd/facts.html#:~:text=ADHD%20is%20one%20of%20the,)%2C%20or%20be%20overly%20active."
          >
            Read More...
          </a>
        </div>

        <div className="div2">
          <img src={about2} className="img2" alt="about-2" />
          <div className="div21">
            <p className="para">
              <b>Autism</b>
            </p>
            <p className="para">
              Autism spectrum disorder (ASD) is a developmental disability
              caused by differences in the brain. ASD begins before the age of 3
              years and can last throughout a person’s life, although symptoms
              may improve over time.
            </p>
            <a
              className="anchor"
              href="https://www.cdc.gov/ncbddd/autism/facts.html#:~:text=Autism%20spectrum%20disorder%20(ASD)%20is,most%20common%20ways%20people%20develop."
            >
              Read More...
            </a>
          </div>
        </div>
        <div className="div3">
          <img src={about3} className="img3" alt="about-1" />
          <div className="div31">
            <p className="para">
              <b>Dyslexia</b>
            </p>
            <p className="para">
              Dyslexia is a learning disorder that involves difficulty reading
              due to problems identifying speech sounds and learning how they
              relate to letters and words (decoding).
            </p>
            <a
              className="anchor"
              href="https://www.mayoclinic.org/diseases-conditions/dyslexia/symptoms-causes/syc-20353552#:~:text=Dyslexia%20is%20a%20learning%20disorder,the%20brain%20that%20process%20language."
            >
              Read More...
            </a>
          </div>
        </div>
        <h1 className="heading2">Government Schemes</h1>
        <div className="div4">
          <img src={about4} className="img4" alt="about-4" />
          <li>
            <a href="https://vikaspedia.in/social-welfare/differently-abled-welfare/schemes-programmes/schemes-of-the-national-trust/disha">
              DISHA - Early Intervention and School Readiness
            </a>
          </li>
          <li>
            <a href="https://newzhook.com/story/17369/">VIKAAS - Day Care</a>
          </li>
          <li>
            <a href="https://thenationaltrust.gov.in/content/scheme/samarth.php">
              SAMARTH - Respite Care{" "}
            </a>
          </li>
          <li>
            <a href=""> GHARAUNDA - Group Home for Adults </a>
          </li>
          <li>
            <a href="https://thenationaltrust.gov.in/content/scheme/gharaunda.php">
              NIRAMAYA -Health Insurance Scheme
            </a>
          </li>
          <li>
            <a href="https://thenationaltrust.gov.in/content/scheme/sahyogi.php">
              SAHYOGI - Caregiver training Scheme
            </a>
          </li>
          <li>
            <a href="https://www.easyleadz.com/company/gyan-prabha-media">
              GYAN PRABHA -Educational support
            </a>
          </li>
          <li>
            <a href="https://www.punarbhava.in/index.php/legal-instruments/schemes-and-initiatives/the-national-trust/prerna">
              PRERNA - Marketing Assistance
            </a>
          </li>
          <li>
            <a href="https://thenationaltrust.gov.in/content/scheme/sambhav.php">
              SAMBHAV - Aids and Assistive Devices
            </a>
          </li>
          <br />
          <b>
            <a href="https://disabilityaffairs.gov.in/content/page/adip.php">
              ADIP Scheme
            </a>
          </b>
          <br />
          <a href="http://www.nhfdc.nic.in/">
            <b>NHFDC</b>
          </a>
        </div>
        <h1 className="heading2">Government Oppurtunities</h1>
        <div className="div5">
          <p className="para">
            The enactment of Right of Persons with Disabilities Act, 2016, had
            increased reservation in government jobs and educational
            institutions for disabled from 3 to 4% and the number of benchmark
            disabilities from seven to 21.
          </p>
        </div>
        <button type="button" className="btttn" onClick={()=> navigate('/schools',{replace:true} )}>
          Know more about Integrated Schools
        </button>
      </div>
      <Footer></Footer>
    </>
  );
}

SecondLastSlide.defaultProps = {
  title: "About the Diseases",
};
