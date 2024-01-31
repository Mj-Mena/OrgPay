import { useEffect, useState } from "react";
import axios from "axios";
import "./log.css";
import { useParams } from "react-router-dom";

const LogMain = (props) => {
  const [th, setTh] = useState([]);

  const { email } = useParams();

  useEffect(() => {
    axios
      .post(`https://orgpay-backend.onrender.com/User/${email}`, { tem: email })
      .then((result) => {
        console.log(email);
        console.log(result);
        setTh(result.data.transloc || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [email]);

  return (
    <nav>
      <div className="logMain">
        <div className="logHead">
          <h1 style={{ fontSize: "30px" }}>
            TRANSACTION HISTORY{" "}
          </h1>
          {/* Replace "history" with email variable */}
        </div>
        <div className="logCont">
          <div className="logIn">
            
            <h1>Incoming</h1>
            <div className="logHolder">
                  <p>Reciever</p>
                  <p>Sender</p>
                  <p>Amount</p>
                  <p>Date</p>
            </div>
            {th
            
            .map((trans) => (
            
            <div className="logHolder" key={trans._id}>
                  <p>{trans.RecieverEmail}</p>
                  <p>{trans.SenderEmail}</p>
                  <p>{trans.Amount}</p>
                  <p>{trans.Date}</p>
            </div>
          ))}
          </div>
          {/* <div className="logOut">
            <h1>Outgoing</h1>
            <div className="logHolder">
                  <p>Reciever</p>
                  <p>Amount</p>
                  <p>Date</p>
            </div>
            {th
            .map((trans) => (
            <div className="logHolder" key={trans._id}>
                  <p>{trans.RecieverEmail}</p>
                  <p>{trans.Amount}</p>
                  <p>{trans.Date}</p>
            </div>
          ))}
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default LogMain;
