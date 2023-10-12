import React, { useState, useEffect } from "react";
import Popup from "./Popup";
// import PropTypes from 'prop-types';

export default function Form(props) {
  const [inputName, setinputName] = useState("");
  const [Mobile, setMobile] = useState("");
  const [Email, setEmail] = useState("");
  const [States, setStates] = useState("");
  const [District, setDistrict] = useState("");
  const [Village, setVillage] = useState("");
  const [submits, setSubmits] = useState(false);

  const [mapData, setMapData] = useState([]);

  const [closes, setcloses] = useState();
  // const [NameValidation, setNameValidation] = useState('black')
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


  const onsubmit = (pageNot_reload) => {
    if (
      inputName === "" ||
      Mobile === "" ||
      Email === "" ||
      States === "" ||
      District === "" ||
      Village === ""
    ) {
      alert("Fill The All Box");
      pageNot_reload.preventDefault();
    } else if (!/^[a-zA-Z\s]+$/.test(inputName)) {
      alert("allow only alphabetic characters in name");
      pageNot_reload.preventDefault();
    } else if (inputName.length > 30) {
      alert("Fill The All Box");
      pageNot_reload.preventDefault();
    } else if (!Email.endsWith("@gmail.com")) {
      alert("Accept Only Gmail");
      console.log("Email:", Email);
      pageNot_reload.preventDefault();
    } else if (States.length > 20) {
      alert("State name is to long , less than 20 latter");
      pageNot_reload.preventDefault();
    } else if (!/^[a-zA-Z]+$/.test(States)) {
      alert("allow only alphabetic characters in State");
      pageNot_reload.preventDefault();
    } else if (District.length > 25) {
      alert("District name is to long , less then 35 latter");
      pageNot_reload.preventDefault();
    } else if (!/^[a-zA-Z]+$/.test(District)) {
      alert("allow only alphabetic characters in District");
      pageNot_reload.preventDefault();
    } else if (Village.length > 25) {
      alert("Village name is to long , less then 35 latter");
      pageNot_reload.preventDefault();
    } else if (!/^[a-zA-Z]+$/.test(Village)) {
      alert("allow only alphabetic characters in Village");
      pageNot_reload.preventDefault();
    } else if (Mobile.length < 10 || Mobile.length > 10) {
      alert("mobile must be at least 10 characters.");
      pageNot_reload.preventDefault();
    } else if (!/^[0-9]+$/.test(Mobile)) {
      alert("Mobile number must contain only numeric characters.");
      pageNot_reload.preventDefault();

    }
    else {
      pageNot_reload.preventDefault();
      setSubmits(true);
      setMapData([...mapData, datas]);
      console.log(mapData);
      setcloses("hidden");
      document.body.style.backgroundColor = "rgba(32, 32, 32, 0.5)";
    }
  };

  return (
    <>
      {submits ? <Popup mapData={mapData} /> : ""}
      <div className={`${props.FormBlock} mt-5`}></div>
      <div className={`${closes} w-[65%] mx-auto `}>
        <form className="bg-my-custom-color bg-[#fdfdfd]  rounded wv mx-auto py-6">
          {/* <h1 className="w-[100%] px-4 py-2 text-[25px] mb-4 text-white rounded text-center font-semibold mx-auto bg-green-600">Address</h1> */}
          
          
          <label className="block ml-[10%] text-[16px] fontF mb-1 antialiased fontF ">Full Name</label>
          <input 
            type="text"
            onChange={(e) => {
              setinputName(e.target.value);
            }} placeholder="Full Name" 
            className={`block mx-auto w-[80%] text-[16px] fontF  bg-my-custom-color bg-[#fdfdfd] rounded border border-gray-light focus:border-green-500 hover:border-green-500 focus:shadow-green-500 focus:drop-shadow-sm outline-none px-4 py-2`}
          ></input>
          
          
        

          <label className="block ml-[10%] text-[16px] fontF mb-1 mt-1   ">Mobile </label>
          <input
            
            minLength={1}
            maxLength={10}
            onChange={(e) => {
              setMobile(e.target.value);
            }} placeholder="Mobile"
            className="block mx-auto w-[80%] text-[16px] fontF bg-my-custom-color bg-[#fdfdfd] rounded border border-gray-light focus:border-green-500 hover:border-green-500 focus:shadow-green-500 focus:drop-shadow-sm outline-none px-4 py-2"          ></input>
          
        
       

          <label className="block ml-[10%] text-[16px] fontF mb-1 mt-1  ">Email Id</label>
          <input
            type="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }} placeholder="Email Id"
            className="block mx-auto w-[80%] text-[16px] fontF bg-my-custom-color bg-[#fdfdfd] rounded border border-gray-light focus:border-green-500 hover:border-green-500 focus:shadow-green-500 focus:drop-shadow-sm outline-none px-4 py-2"
          ></input>

          <label className="block ml-[10%] text-[16px] fontF mb-1 mt-1  ">State</label>
          <input
            type="text"
            onChange={(e) => {
              setStates(e.target.value);
            }} placeholder="State"
            className="block mx-auto w-[80%] text-[16px] fontF bg-my-custom-color bg-[#fdfdfd] rounded border border-gray-light focus:border-green-500 hover:border-green-500 focus:shadow-green-500 focus:drop-shadow-sm outline-none px-4 py-2"
          ></input>

          <label className="block ml-[10%] text-[16px] fontF mb-1 mt-1  ">District</label>
          <input
            type="text"
            onChange={(e) => {
              setDistrict(e.target.value);
            }} placeholder="District"
            className="block mx-auto w-[80%] text-[16px] fontF bg-my-custom-color bg-[#fdfdfd] rounded border border-gray-light focus:border-green-500 hover:border-green-500  focus:shadow-green-500 focus:drop-shadow-sm outline-none px-4 py-2"
          ></input>

          <label className="block ml-[10%] text-[16px] fontF mb-1 mt-1  ">Village</label>
          <input
            type="text"
            onChange={(e) => {
              setVillage(e.target.value);
            }} placeholder="Village"
            className="block mx-auto w-[80%] text-[16px] fontF bg-my-custom-color bg-[#fdfdfd] rounded border border-gray-light focus:border-green-500 hover:border-green-500 focus:shadow-green-500 focus:drop-shadow-sm outline-none px-4 py-2"
          ></input>
          
          <div className="w-20 mx-auto">
          <input
            type="submit"
            onClick={onsubmit}
            className="py-1 px-4 font-semibold text-[15px] text-white rounded mt-6 bg-green-600 cursor-pointer"
          /></div>
          {/* <button
            onClick={onsubmit}
            className="py-2 px-10 font-semibold ml-32 mt-6 bg-green-600"
          >
            Submit
          </button> */}
        </form>
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
