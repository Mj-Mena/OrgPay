import React from "react";
import { FaHistory, FaMoneyBillAlt } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import SendModal from "../sendModal";
import "./contentone.css";
import LogMain from "../log";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

var modal = document.getElementById("myModal");
var log = document.getElementById("logs");
let mybutton = document.getElementById("myBtn");
var top = document.getElementById("top1");
var send = document.getElementById("sendMoney");

function ContentOne() {
  const [usern, setUsern] = useState();
  const [em, setEm] = useState();
  const [id, setId] = useState();
  const { email } = useParams();
  useEffect(() => {
    console.log(email);
    axios
      .get("http://localhost:3001/User/")
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  }, [email]);
  useEffect(() => {
    console.log(email);
    axios
      .post("http://localhost:3001/User/:email", { UEmail: email })
      .then((result) => {
        console.log(result.data);
        setUsern(result.data.Username);
        setEm(result.data.Email);
        setId(result.data._id);
      })
      .catch((err) => console.log(err));
  }, []);

  const username = "usern.Username";
  const userBalance = 69420.21;

  function hello() {
    modal.style.display = "block";
  }

  function modalClose() {
    modal.style.display = "none";
  }

  function sending() {
    send.style.display = "block";
  }

  function sendClose() {
    send.style.display = "none";
  }

  function logScroll() {
    log.scrollIntoView();
  }

  function topFunction() {
    top.scrollIntoView();
  }

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  return (
    <>
      <nav className="wew">
        <div className="head" id="top1"></div>
        <div className="contentMain">
          <div className="contentSub1">
            <h1>OrgPay</h1>
            <div className="infoMain">
              <h1 style={{ color: "aliceblue" }}>ACCOUNT INFO</h1>
              <br />
              <h3 className="hlev">Username:{usern}</h3>
              <br />
              <h3 className="hlev">Email: {em}</h3>
              <br />
              <h3 className="hlev">Reference No.: {id}</h3>
            </div>
            <button className="logOutButton hovbutt">LOG OUT</button>
          </div>
          <div className="contentSub2">
            <div className="balanceCont">
              <h1 className="balanceGreeting">Welcome {usern}</h1>
              <div className="balanceMain">
                <div className="balanceLabel">AVAILABLE BALANCE:</div>
                <div className="balanceDisp">₱{userBalance}</div>
              </div>

              <div className="buttonHolder">
                <button className="funcButton hovbutt" onClick={sending}>
                  <div className="iconHold">
                    <RiMailSendLine size="1.5em" id="b" />
                  </div>
                  SEND
                </button>
                <button className="funcButton hovbutt" onClick={logScroll}>
                  <div className="iconHold">
                    <FaHistory size="1.5em" id="b" />
                  </div>
                  HISTORY
                </button>
                <button
                  className="addFunds hovbutt"
                  id="addFunds"
                  onClick={hello}
                >
                  <div className="iconHold">
                    <FaMoneyBillAlt size="1.5em" id="b" />
                  </div>
                  ADD FUNDS
                </button>
              </div>
            </div>
          </div>
          <div className="contentSub3">
            <h3 style={{ color: "#596e79" }}>To Pay</h3>
            <div className="itemHolder">
              <button className="item">
                <BsCash size={50} />
                <h3>Org Fee</h3>
              </button>

              <button className="item">
                <PiHamburgerBold size={50} />
                <h3>Burger</h3>
              </button>

              <button className="item">
                <PiHamburgerBold size={50} />
                <h3>Burger</h3>
              </button>

              <button className="item">
                <PiHamburgerBold size={50} />
                <h3>Burger</h3>
              </button>

              <button className="item">
                <PiHamburgerBold size={50} />
                <h3>Burger</h3>
              </button>

              <button className="item">
                <PiHamburgerBold size={50} />
                <h3>Burger</h3>
              </button>

              <button className="item">
                <PiHamburgerBold size={50} />
                <h3>Burger</h3>
              </button>

              <button className="item">
                <PiHamburgerBold size={50} />
                <h3>Burger</h3>
              </button>

              <button className="item">
                <PiHamburgerBold size={50} />
                <h3>Burger</h3>
              </button>

              <button className="item">
                <PiHamburgerBold size={50} />
                <h3>Burger</h3>
              </button>
            </div>
          </div>
        </div>
        <div id="myModal" className="modalTest">
          <div className="modal-content">
            <header className="heading">
              <h1 style={{ color: "aliceblue" }}>ADD FUNDS</h1>
            </header>

            <div className="fundsCont">
              <h3 style={{ color: "#596e79" }}>Dear User,</h3>
              <br />
              Please coordinate with your campus YPADS treasure to add funds to
              your account. Your current YPADS treasurer is Mark Jerome Gimena.
              He is Gay.
            </div>

            <footer className="footing">
              <button className="confcans" onClick={modalClose}>
                OK
              </button>
            </footer>
          </div>
        </div>
        <div id="sendMoney" className="sendMon">
          <div className="sendModal">
            <SendModal />
            <button className="hovbutt sendCans" onClick={sendClose}>
              Cancel
            </button>
          </div>
        </div>
        <div id="logs">
          <LogMain />
        </div>
        <button className="backToTop" onClick={topFunction} id="myBtn">
          Back to top
        </button>
      </nav>
    </>
  );
}

export default ContentOne;
