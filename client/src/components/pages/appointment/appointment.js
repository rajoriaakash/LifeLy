import React, { useState } from 'react'
import './appointment.css'
import appoint from '../../../images/appointment.png'
import { useLocation } from 'react-router-dom'
import axios from "axios";
import { SERVER_URL } from '../../../config';
export default function Appointment(props) {
    const location = useLocation()
    const data = location.state?.data
    console.log(data)
    const [user, setUser] = useState({
        name: "",
        email: "",
        phone:""
      });
      function handleChange(e) {
        const { name, value } = e.target;
        setUser({
          ...user,
          [name]: value,
        });
      }
      const loginDataSend = async() => {
        
        await axios.post(`${SERVER_URL}/send_email/appointment`, user).then((res) => {
            // console.log("hello");
            console.log(res.data);
          if (user.email != null) {
          } else {
            alert("Error");
          }
        });
      };
  return (
    <>
        
        <div className="appoint">
            <div className="apointbg">
            <div className="apph1">
                Book An Appointment
            </div>
            <div className="appdetails">
                <div className="parapp">
                    {/* <label htmlFor="" className="appname">Name</label> */}
                    <input type="text" onChange={handleChange} name="name" id="" className="parname"  value={user.name} placeholder='Enter the name' />
                </div>
                <div className="parapp">
                    {/* <label htmlFor="" className="appname">Email</label> */}
                    <input onChange={handleChange} type="text" name="email" id="" className="parname" value={user.email} placeholder='Enter the email'/>
                </div>
                <div className="parapp">
                    {/* <label htmlFor="" className="appname">Phone Number</label> */}
                    <input onChange={handleChange} type="text" name="phone" id="" className="parname" value={user.phone} placeholder='Enter the phone number'/>
                </div>
            </div>
            </div>
            <div className="docdetails">
                <div className="appleftside">
                    <div className="doctorname">
                        <div className="doctornameleftside">Doctor's name</div>
                        <div className="doctornameleftside bdclass">{data.Name}</div>
                    </div>
                    <div className="doctorname">
                        <div className="doctornameleftside">Doctor's phone number</div>
                        <div className="doctornameleftside bdclass">{data['Phone Number']}</div>
                    </div>
                    <div className="doctorname">
                        <div className="doctornameleftside">Fees</div>
                        <div className="doctornameleftside bdclass">{data.Fee}</div>
                    </div>
                    <div className="doctorname">
                        <div className="doctornameleftside">Discount</div>
                        <div className="doctornameleftside bdclass">{data.Discount}%</div>
                    </div>
                    <div className="doctorname">
                        <div className="doctornameleftside">Total Fees</div>
                        <div className="doctornameleftside bdclass">{data['Discounted Fee']}</div>
                    </div>
                </div>
                <img src={appoint} alt="" />
            </div>
            <div className="addapp">
                <input className="addappbtn" type="button"
                onClick={loginDataSend}
                value="BOOK"
                name="book"></input>
            </div>
        </div>
    </>
  )
}
