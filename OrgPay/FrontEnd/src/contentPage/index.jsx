import React from "react";
import { FaHistory, FaMoneyBillAlt } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import SendModal from "../sendModal";
import Navi from "../components/Navig";
import "./contentone.css";

var modal = document.getElementById("myModal");
var log = document.getElementById("logs");
let mybutton = document.getElementById("myBtn");
var top = document.getElementById("top1");
var send = document.getElementById("sendMoney");

const ContentOne = (props) => {
  const username = "Elias Paniki";
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
    <nav>
      <Navi />
      <div className="head" id="top1"></div>
      <div className="contentMain">
        <div className="contentSub1">
          <h1>May Logo Dapat Dito</h1>
          <br />
          <div className="infoMain">
            <h1 style={{ color: "aliceblue" }}>ACCOUNT INFO</h1>
            <br />
            <h3 className="hlev">Username: {username}</h3>
            <br />
            <h3 className="hlev">User ID: {username}</h3>
            <br />
            <h3 className="hlev">Reference No.: {username}</h3>
          </div>
          <button className="logOutButton hovbutt">LOG OUT</button>
        </div>
        <div className="contentSub2">
          <div className="balanceCont">
            <h1 className="balanceGreeting">Welcome {username}</h1>
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
          <h1 style={{ color: "#596e79" }}>INSPIRATIONAL QUOTE HERE</h1>
        </div>
      </div>
      <div id="myModal" className="modalTest">
        <div className="modal-content">
          <header className="heading">
            <h1>ADD FUNDS</h1>
          </header>

          <div className="fundsCont">
            <h2 style={{ color: "#596e79" }}>Dear User,</h2>
            <br />
            Please coordinate with your campus YPADS treasure to add funds to
            your account. Your current YPADS treasurer is Mark Jerome Gimena. He
            is Gay.
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
      <div id="logs"></div>
      <button className="backToTop" onClick={topFunction} id="myBtn">
        Back to top
      </button>
    </nav>
  );
};

export default ContentOne;
