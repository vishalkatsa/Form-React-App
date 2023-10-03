import React, { useState } from "react";
import Popup from "./Popup";
// import PropTypes from 'prop-types';

export default function Form(props) {
  const [inputName, setinputName] = useState("");
  const [Mobile, setMobile] = useState('');
  const [Email, setEmail] = useState("");
  const [States, setStates] = useState("");
  const [District, setDistrict] = useState("");
  const [Village, setVillage] = useState("");
  const [submits, setSubmits] = useState(false);

  const [mapData, setMapData] = useState([]);

  const [closes, setcloses] = useState()
  const [NameValidation, setNameValidation] = useState('black')
  // if(inputName.length > 20){
  //   setNameValidation('red-600')
    
  // }
  const datas = {
    name: inputName,
    mobile: Mobile,
    Email: Email,
    States: States,
    District: District,
    Village: Village,
  };

  const onsubmit = () => {
    

  if (inputName === '' || Mobile === '' || Email === '' || States === '' || District === '' || Village === '') {
    alert("Fill The All Box")
  }
  else if(inputName.length > 30){
    alert("Fill The All Box")
  }
  else if(Email && Email.endsWith('@gmail.com')){
    alert('Accept Only Gmail')
  }
  
  else if(States.length > 20){
    alert('State name is to long , less than 20 latter');
  }
  else if(District.length > 25){
    alert('District name is to long , less then 35 latter')
  }
  else if(Village.length > 25){
    alert('Village name is to long , less then 35 latter')
  }
  else if(Mobile.length < 10){
    alert('mobile must be at least 10 characters.');
  }
  else {
    setSubmits(true);
    setMapData([...mapData, datas]);
    console.log(mapData);
    setcloses('hidden');
    document.body.style.backgroundColor="rgba(32, 32, 32, 0.5)"
  }
};

  return (
    <>
      
      {submits ? <Popup mapData={mapData} /> : ""}
      <div className={`${props.FormBlock} mt-5`}></div>
      <div className={`${closes} w-3/4 mx-auto`}>
        <div className="bg-yellow-400 w-[40%]  mx-auto py-8">
          <label className="block mx-11 font-medium ">Full Name</label>
          <input
          type="text"  onChange={(e) => {
              setinputName(e.target.value);
            }}
            className={`block mx-auto w-[80%]  text-${NameValidation} rounded bg-slate-200 focus:bg-white outline-none px-3 py-3`}
          ></input>

          <label className="block mx-11 font-medium ">Mobile Number</label>
          <input
          type="tel" minLength={1} maxLength={10} onChange={(e) => {
              setMobile(e.target.value);
            }}
            className="block mx-auto w-[80%]  rounded bg-slate-200 focus:bg-white outline-none px-3 py-3"
          ></input>

          <label className="block mx-11 font-medium ">Email Id</label>
          <input
          type="email"  onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="block mx-auto w-[80%]  rounded bg-slate-200 focus:bg-white outline-none px-3 py-3"
          ></input>

          <label className="block mx-11 font-medium ">State</label>
          <input
          type="text"  onChange={(e) => {
              setStates(e.target.value);
            }}
            className="block mx-auto w-[80%]  rounded bg-slate-200 focus:bg-white outline-none px-3 py-3"
          ></input>

          <label className="block mx-11 font-medium ">District</label>
          <input
          type="text"  onChange={(e) => {
              setDistrict(e.target.value);
            }}
            className="block mx-auto w-[80%]  rounded bg-slate-200 focus:bg-white outline-none px-3 py-3"
          ></input>

          <label className="block mx-11 font-medium ">Village</label>
          <input
          type="text"  onChange={(e) => {
              setVillage(e.target.value);
            }}
            className="block mx-auto w-[80%]  rounded bg-slate-200 focus:bg-white outline-none px-3 py-3"
          ></input>

          <button
            onClick={onsubmit}
            className="py-2 px-10 font-medium ml-32 mt-6 bg-green-600"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}


// Form.propTypes = {
//   inputName: PropTypes.string,
//   Mobile: PropTypes.number,
//   Email: PropTypes.string,
//   States: PropTypes.string,
//   District: PropTypes.string,
//   Village: PropTypes.string,
//   submits: PropTypes.bool,
//   mapData: PropTypes.array,
// };