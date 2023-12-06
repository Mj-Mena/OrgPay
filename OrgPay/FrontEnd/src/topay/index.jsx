import React from "react";
import "./topay.css";
import { BsCash } from "react-icons/bs";
import { PiHamburgerBold } from "react-icons/pi";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function show({ id }) {}

const ToPay = (props) => {
  const [item, setitem] = useState();
  var itemName = "Org Fee";
  var price = 100;
  const [topay, setTopay] = useState();
  const [id, setId] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3001/admin/topay")
      .then((result) => {
        setTopay(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function showMod() {
    console.log("wew", item);
    modal.style.display = "block";
    console.log("agay");
  }
  function hideMod() {
    modal.style.display = "none";
  }

  let modal = document.getElementById("mod");
  let conf = document.getElementById("conf");
  let cans = document.getElementById("cans");

  return (
    <nav>
      <div className="itemHolder">
        {topay?.map((data) => (
          <button
            key={data._id}
            className="item"
            onClick={(e) => {
              const id = data._id;
              setId(id);
            }}
          >
            <BsCash size={25} />
            <h3>{data.Title}</h3>
            <h4>₱ {data.Amount}</h4>
          </button>
        ))}
      </div>
      <div className="conShade" id="mod">
        <div className="confirmModal">
          Confirm Transaction
          <div className="butthold">
            <button className="butt" id="conf" onClick={(e)=>{
                window.location.reload();
            }}>
              Confirm
            </button>
            <button className="butt" id="cans" onClick={hideMod}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default ToPay;
