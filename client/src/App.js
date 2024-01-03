import React, { useState } from "react";

import Homepage from "./components/pages/Homepage/Homepage";
import Login from "./components/pages/LoginSignup/Login";
import Signup from "./components//pages/LoginSignup/Signup";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Exercises from "./components/pages/Exercises/Exercises";
import Rough from "./components/last_slide/Rough";
import SecondLastSlide from "./components/second_last/SecondLastSlide";
import Survey from "./components/survey/Survey";
import Register from "./components/survey/register.js";
import Register2 from "./components/survey/Register2.js";
import Specialist from "./components/pages/specialist/Specialist.js";
import YourReport from "./components/pages/report/YourReport.js";
import Review from "./components/pages/reviewsec/review";
import Expage from './components/pages/Exercises/Expage'
import Appointment from "./components/pages/appointment/appointment";
// import Exercises from "./components/pages/Exercises/Exercises";

function App(props) {
  const [user, setUserState] = useState({});

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          exact
          path="/login"
          element={
            user && user._id ? <Homepage /> : <Login loginUser={setUserState} />
          }
        ></Route>
        <Route
          exact
          path="/login"
          element={<Login loginUser={setUserState} />}
        />
        <Route exact path="/signup" element={<Signup />}></Route>
        <Route exact path="/exercises" element={<Exercises />}></Route>
        {/* <Route exact path='/aboutDisease' element={<AboutDisease />}></Route> */}
        <Route exact path="/about" element={<SecondLastSlide />}></Route>
        <Route exact path="/survey" element={<Survey />}></Route>
        <Route exact path="/schools" element={<Rough />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/register2" element={<Register2 />}></Route>
        <Route exact path="/surveyresult" element={<YourReport/>}/>
        <Route exact path ="/recommend/doctors" element={<Specialist/>}/>
        <Route exact path="/review" element={<Review/>}/>
        <Route exact path='ex/:id' element={<Expage {...props} />} />
        <Route exact path='/recommend/doctors' element={<Specialist/>}/>
        <Route exact path="/appointment" element={<Appointment/>}/>
        {/* <Route exact path="/recommend/exercise" element={<Exercises/>}/> */}
        <Route>404 error page</Route>
      </Routes>
    </Router>
  );
}

export default App;
