import React,{useState, useEffect} from 'react';
import myimage from '../../../images/specialist.png';
import './specialist.css';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { SERVER_URL } from '../../../config.js';
import doc from '../../../images/doctor_icon.jpg'
export default function Specialist(props) {
  const [selectedCity, setSelectedCity] = useState('');
  const [doctors, setDoctors] = useState([]);

  const cities = ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli', 'Daman and Diu', 'Lakshadweep', 'Delhi', 'Puducherry'];

  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const disease = data.disease;

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const findDoctors = () => {
    axios.post(`${SERVER_URL}/recommend/doctors`, { state: selectedCity, disease: disease }).then(res => {
      setDoctors(res.data);
    });
  }

  useEffect(() => {
    if (selectedCity && disease) {
      findDoctors();
    }
  }, [selectedCity, disease]);
  console.log(doctors)

  const appointment = (doctor) => {
    navigate('/appointment',{state:{data:doctor}});
  }

  return (
    <>
      <div className="image-div1">
        <div className="image-text1">
            <div className='w3'>Talk to Specialist</div>
            <div className="w4"> near you</div>
            <div className='w5'>Find a doctor which can help you...</div> 
        </div>
        <img src={myimage}/>
      </div>
      <div className="buttonsmid">
         <div className="loc">
            <div className="btnl">Location</div>
            <select className='inpt9' id="city" value={selectedCity} onChange={handleCityChange}>
                <option value="" selected style={{display:'none'}}>Enter the location</option>
                {cities.map(city => (
                  <option key={city} value={city}>{city}</option>
                ))}
            </select>
         </div>
         <div className="loc">
            <div className="btnl">Disease</div>
            <div className="inpt69">{disease}</div>
         </div>
         <div className="find">
            <button className="btnl" onClick={findDoctors}>Find</button>
         </div>
      </div>
      <div className="cards">
  {doctors.map(doctor => (
    <div className="card" key={doctor.Name} onClick={() => appointment(doctor)}>
      <div className="upperpart"><img src={doc} /></div>
      <div className="lowerpart"><span>{doctor.Name}</span><span>{doctor.State}</span></div>
    </div>
  ))}
</div>

    </>
  );
}
