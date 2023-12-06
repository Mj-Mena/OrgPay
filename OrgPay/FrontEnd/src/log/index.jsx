import { useEffect, useRef, useState } from "react";
import axios from "axios";
import "./log.css";
import { useParams } from "react-router-dom";

const LogMain = (props) => {
  const [th, setTh] = useState();
  const { email } = useParams();
  var wew = [1, 2, 3, 4, 5];
  useEffect(() => {
    axios
      .post("http://localhost:3001/User/:email", { tem: email })
      .then((result) => {
        console.log(result);
        setTh(result.data.transloc);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <nav>
      <div className="logMain">
        <div className="logHead">
          <h1 style={{ fontSize: "30px" }}>TRANSACTION HISTORY</h1>
        </div>
        <div className="logCont">
          {th?.map((trans) => (
            <div className="logHolder" key={trans._id}>
              <div className="logNo"> {trans.Title}</div>
              <div className="logFrom">{trans.SenderEmail}</div>
              <div className="logChange">{trans.RecieverEmail}</div>
              <div className="logInfo">{trans.Amount}</div>
              <div className="logInfo">{trans.Date}</div>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default LogMain;
