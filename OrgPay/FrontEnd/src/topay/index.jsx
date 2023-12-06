import React from "react";
import "./topay.css";
import { BsCash } from "react-icons/bs";
import { PiHamburgerBold } from "react-icons/pi";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ToPay = (props) => {
  const { email } = useParams();
  const [item, setitem] = useState();
  var itemName = "Org Fee";
  var price = 100;
  const [topay, setTopay] = useState();
  const [id, setId] = useState();
  const [am, setAm] = useState();
  const [til, setTil] = useState();
  const [rtil, setRtil] = useState();
  const [ltil, setLtil] = useState();

  const handleclick = () => {
    axios
      .post("http://localhost:3001/transaction/admin", {
        User: email,
        senderEm: "admin@adminacc.com",
        title: til,
        Samount: am,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    window.location.reload();
  };
  useEffect(() => {
    axios
      .get("http://localhost:3001/admin/topay")
      .then((result) => {
        setTopay(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function titleClick() {
    axios
      .post("http://localhost:3001/User/:email", { til: til })
      .then((result) => {
        const dot = result.data.titles;
        dot.map((tr) => {
          setRtil(tr.Title);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function showMod() {
    console.log(rtil, til);
    rtil === til ? alert("Already payed") : (modal.style.display = "block");
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
              titleClick();
              setTil(data.Title);
              const id = data._id;
              setId(id);
              setAm(data.Amount);
              showMod();
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
            <button className="butt" id="conf" onClick={handleclick}>
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
