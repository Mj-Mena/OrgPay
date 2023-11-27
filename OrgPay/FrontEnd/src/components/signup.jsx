import { useState } from "react";
import axios from "axios";
import "./components.css";
import Navig from "./Navig";
function Signup() {
  const [Username, SetUsername] = useState();
  const [Password, SetPassword] = useState();
  const [RePassword, SetRePassword] = useState();
  const [Email, SetEmail] = useState();
  const [Tagg, SetTagg] = useState();
  const [Phrase, SetPhrase] = useState();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (RePassword === Password) {
        const result = await axios.post("http://localhost:3001/signup", {
          Username,
          Email,
          Password,
          Phrase,
        });
        result.data == "email is already used"
          ? alert(result.data)
          : alert("Thank you for Signing up");
      } else {
        alert("password didn't match");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navig />
      <div className="signCont">
        <div className="signDiv">
          <div className="colorLeft ">
            <div className="textInColor">
              <h1 style={{ color: " rgb(239, 242, 248)" }}>New Here ? </h1>
              <p
                style={{
                  color: " rgb(215, 215, 215)",
                  fontFamily: "'Poppins' san-serif",
                  lineHeight: "1.5rem",
                  fontSize: ".9rem",
                  maxWidth: "300px",
                  marginLeft: "12%",
                }}
              >
                We provide the efficient way of paying bills so come and join in
                our community
              </p>
            </div>
          </div>
          <div className="formForSignup">
            <form className="formInDiv" onSubmit={handleSubmit}>
              <h1 style={{ marginLeft: "-10px", marginTop: "-10px" }}>
                Sign up
              </h1>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => SetUsername(e.target.value)}
              />
              <input
                type="text"
                placeholder="Password"
                onChange={(e) => SetPassword(e.target.value)}
              />
              <input
                type="text"
                placeholder="Re-type Password"
                onChange={(e) => SetRePassword(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => SetEmail(e.target.value)}
              />
              <select
                onChange={(e) => {
                  console.log(e.target.value);
                  SetTagg(e.target.value);
                }}
                name=""
                id=""
                className="phraseDrop"
              >
                <option value="" className="disable">
                  Choose Secret Phrase...
                </option>
                <option value="Enter the Name">
                  Name of the first childhood friend
                </option>
                <option value="Enter the Number">Favorite Number</option>
                <option value="Enter Code">Secret Code</option>
              </select>
              <input
                style={{ fontSize: ".7rem" }}
                type="text"
                placeholder={Tagg}
                onChange={(e) => SetPhrase(e.target.value)}
              />
              <button
                type="submit"
                style={{
                  border: "none",
                  width: "40%",
                  height: "40px",
                  borderRadius: "150px",
                  backgroundColor: "#596e79",
                  color: "white",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Signup;
