import React, { useState } from "react";
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
    } else if (!/^[a-zA-Z]+$/.test(inputName)) {
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
      <div className={`${closes} w-3/4 mx-auto`}>
        <form className="bg-yellow-400 wv mx-auto py-8">
          <label className="block mx-11 font-medium ">Full Name</label>
          <input
            type="text"
            onChange={(e) => {
              setinputName(e.target.value);
            }}
            className={`block mx-auto w-[80%]  rounded bg-slate-200 focus:bg-white outline-none px-3 py-3`}
          ></input>

          <label className="block mx-11 font-medium ">Mobile Number</label>
          <input
            
            minLength={1}
            maxLength={10}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
            className="block mx-auto w-[80%]  rounded bg-slate-200 focus:bg-white outline-none px-3 py-3"
          ></input>

          <label className="block mx-11 font-medium ">Email Id</label>
          <input
            type="email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="block mx-auto w-[80%]  rounded bg-slate-200 focus:bg-white outline-none px-3 py-3"
          ></input>

          <label className="block mx-11 font-medium ">State</label>
          <input
            type="text"
            onChange={(e) => {
              setStates(e.target.value);
            }}
            className="block mx-auto w-[80%]  rounded bg-slate-200 focus:bg-white outline-none px-3 py-3"
          ></input>

          <label className="block mx-11 font-medium ">District</label>
          <input
            type="text"
            onChange={(e) => {
              setDistrict(e.target.value);
            }}
            className="block mx-auto w-[80%]  rounded bg-slate-200 focus:bg-white outline-none px-3 py-3"
          ></input>

          <label className="block mx-11 font-medium ">Village</label>
          <input
            type="text"
            onChange={(e) => {
              setVillage(e.target.value);
            }}
            className="block mx-auto w-[80%]  rounded bg-slate-200 focus:bg-white outline-none px-3 py-3"
          ></input>
          <div className="w-36 mx-auto">
          <input
            type="submit"
            onClick={onsubmit}
            className="py-2 px-10 font-medium  mt-6 bg-green-600 cursor-pointer"
          /></div>
          {/* <button
            onClick={onsubmit}
            className="py-2 px-10 font-medium ml-32 mt-6 bg-green-600"
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
