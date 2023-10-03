import React, { useState } from "react";
// import PropTypes from 'prop-types';
import Form from "./Form";
export default function Popup(props) {
  // console.log(props.mapData);
  const [PopupClose, setPopupClose] = useState();
  const [FormBlock, setFormBlock] = useState()
  const [SecoundAfter, setSecoundAfter] = useState(false)
  return (
    <>
      {SecoundAfter ? <Form FormBlock={FormBlock} /> : ""}

      <div className={`${PopupClose} w-[80%] py-4 mt-14 mx-auto h-[500px] bg-zinc-100 vk`}>
        <div className="flex justify-end  ">
            <div className=" mr-4 cursor-pointer " onClick={()=>{setPopupClose('hidden'); setFormBlock('block'); setSecoundAfter(true) ; document.body.style.backgroundColor="white"}  }><i  class="fa-solid fa-square-xmark fa-2xl" style={{color : "#ff0000"}}></i></div>
        </div>
        <h1 className="text-center text-4xl font-bold mt-0 mb-4">Form Data</h1>
        <table className="bg-zinc-300 w-full mx-auto  ">
          <tr>
            <th className="px-10 bg-zinc-300"> Sl.No</th>
            <th className="px-10 bg-zinc-300"> Full Name</th>
            <th className="px-10 bg-zinc-300"> Mobile Number </th>
            <th className="px-10 bg-zinc-300"> Email Id </th>
            <th className="px-10 bg-zinc-300"> State </th>
            <th className="px-10 bg-zinc-300"> District </th>
            <th className="px-10 bg-zinc-300"> Village </th>
          </tr>
          {props.mapData.map((data, index) => (
            <tr key={index}>
              <td className="px-2 bg-zinc-100 text-center border-blue-700 border-spacing-2">
                {index + 1}
              </td>
              <td className="px-2 bg-zinc-100 text-center border-blue-700 border-spacing-2">
                {data.name}
              </td>
              <td className="px-2 bg-zinc-100 text-center border-blue-700 border-spacing-2">
                {data.mobile}
              </td>
              <td className="px-2 bg-zinc-100 text-center border-blue-700 border-spacing-2">
                {data.Email}
              </td>
              <td className="px-2 bg-zinc-100 text-center border-blue-700 border-spacing-2">
                {data.States}
              </td>
              <td className="px-2 bg-zinc-100 text-center border-blue-700 border-spacing-2">
                {data.District}
              </td>
              <td className="px-2 bg-zinc-100 text-center border-blue-700 border-spacing-2">
                {data.Village}
              </td>
            </tr>
          ))}
        </table>
        <div className="my"></div>
      </div>
    </>
  );
}

// Popup.propTypes = {
//   name:PropTypes.string,
//   mobile:PropTypes.number
// }
