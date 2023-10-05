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
        <form className="bg-my-custom-color bg-[#13232F] opacity-90 rounded wv mx-auto py-6">
          <h1 className="w-[100%] px-4 py-1 text-[25px] mb-4 text-white rounded text-center font-semibold mx-auto bg-green-600">Address</h1>
          <div className="flex justify-center  w-[80%] mx-auto  text-white opacity-90">
          <div className="">
          <label className="block text-center font-semibold ">Full Name</label>
          <input
            type="text"
            onChange={(e) => {
              setinputName(e.target.value);
            }} placeholder="Full Name" name="inputName" autocomplete="name"
            className={` mx-auto w-[95%]   bg-my-custom-color bg-[#13232F] border border-gray-light outline-none px-3 py-3`}
          ></input>
          </div>
          
          <div>

          <label className="block text-center font-semibold  ">Mobile </label>
          <input
            
            minLength={1}
            maxLength={10}
            onChange={(e) => {
              setMobile(e.target.value);
            }} placeholder="Mobile Number"
            className=" mx-auto w-[95%]  bg-my-custom-color ml-1 bg-[#13232F] border border-gray-light outline-none px-3 py-3"
          ></input>
          </div>
        </div>
        <div className="text-white opacity-90 mt-2">
        <div className="border-b-2 border-white mt-4 mb-2  w-full"></div>

          <label className="block mx-[70px] font-semibold ">Email Id</label>
          <input
            type="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }} placeholder="Email Id"
            className="block mx-auto w-[70%]  bg-my-custom-color bg-[#13232F] border border-gray-light  outline-none px-3 py-3"
          ></input>

          <label className="block mx-[70px] font-semibold ">State</label>
          <input
            type="text"
            onChange={(e) => {
              setStates(e.target.value);
            }} placeholder="State"
            className="block mx-auto w-[70%]  bg-my-custom-color bg-[#13232F] border border-gray-light  outline-none px-3 py-3"
          ></input>

          <label className="block mx-[70px] font-semibold ">District</label>
          <input
            type="text"
            onChange={(e) => {
              setDistrict(e.target.value);
            }} placeholder="District"
            className="block mx-auto w-[70%]  bg-my-custom-color bg-[#13232F] border border-gray-light   outline-none px-3 py-3"
          ></input>

          <label className="block mx-[70px] font-semibold ">Village</label>
          <input
            type="text"
            onChange={(e) => {
              setVillage(e.target.value);
            }} placeholder="Village"
            className="block mx-auto w-[70%]  bg-my-custom-color bg-[#13232F] border border-gray-light  outline-none px-3 py-3"
          ></input>
          </div>
          <div className="w-36 mx-auto">
          <input
            type="submit"
            onClick={onsubmit}
            className="py-2 px-8 font-semibold text-[25px] text-white rounded mt-6 bg-green-600 cursor-pointer"
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
