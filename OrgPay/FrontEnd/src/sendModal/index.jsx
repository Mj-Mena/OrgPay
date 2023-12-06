import { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./send.css";
import axios from "axios";

const SendModal = (props) => {
  const [usern, setUsern] = useState();
  const [em, setEm] = useState();
  const [id, setId] = useState();
  const [sendid, setSendId] = useState();
  const [balance, setbalance] = useState();
  const [sendbalance, setSendBalance] = useState();
  const { email } = useParams();
  const [amount, setamount] = useState();
  const [reference, setreference] = useState();
  const [newBalance, setNewBalance] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost:3001/User/")
      .then((result) => {})
      .catch((err) => console.log(err));
  }, [email]);

  const checkBal = async () => {
    axios
      .post("http://localhost:3001/User/:email", {
        id: reference,
        UEmail: email,
      }) // sa sesendan
      .then((data) => {
        console.log(data);
        setbalance(data.data.Log.Balance);
        setId(data.data.Log._id); // id ng user na nakalogin
        setSendId(data.data.transact._id);
        setSendBalance(data.data.transact.Balance);
      })
      .catch((err) => {
        console.log(err);
      });

    if (amount < balance) {
      var newBalance = balance - amount;
      var sendBalance = Number(sendbalance) + Number(amount);
      console.log(newBalance);
      console.log(reference);
      //update ng naka log na user
      axios.put("http://localhost:3001/User/:email", {
        userlogId: id,
        baltoUp: newBalance,
        sendLogId: sendid,
        sendbalancetoup: sendBalance,
      });
      axios
        .put("http://localhost:3001/User/:email", {
          userlogId: id,
          baltoUp: newBalance,
          sendLogId: sendid,
          sendbalancetoup: sendBalance,
        })
        .then((userLog) => {
          console.log(userLog);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      console.log("Insuficient Balance");
    }
  };

  return (
    <nav>
      <div className="send-content">
        <h3 className="balshow">Balance: {balance}</h3>
        <div style={{ gridRow: " 1 / span 2", gridColumn: " 1/ span 2" }}>
          <div className="circle"></div>
        </div>
        <div
          style={{ gridRow: " 1 / span 2", gridColumn: " 2/ span 1" }}
          className="sendMain"
        >
          <h1 style={{ marginBottom: "20px", fontSize: "20px" }}>
            Send Currency
          </h1>
          <h3 style={{ textAlign: "left" }}>Reference No.</h3>
          <input
            className="inputField"
            type="integer"
            onChange={(e) => setreference(e.target.value)}
          />
          <br />
          <h3 style={{ textAlign: "left" }}>Amount to Send</h3>
          <input
            className="inputField"
            type="integer"
            onChange={(e) => setamount(e.target.value)}
          />
          <button className="confButton hovbutt" onClick={checkBal}>
            CONFIRM
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SendModal;
