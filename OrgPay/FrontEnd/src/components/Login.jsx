import { useState } from "react";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";
import Navig from "./Navig";
function Login() {
  const [Password, SetPassword] = useState();
  const [Email, SetEmail] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/Login", { Email, Password })
      .then((result) => {
        alert(result.data);
        if (result.data === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Navig />
      <div className="signCont">
        <div className="signDiv">
          <div>
            <form className="formInDiv" onSubmit={handleSubmit}>
              <h1 style={{ marginLeft: "-10px", marginTop: "-10px" }}>
                Log In
              </h1>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => SetEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Password"
                onChange={(e) => SetPassword(e.target.value)}
              />
              <p>
                <a
                  style={{
                    textDecoration: "none",
                    fontFamily: "'Acumin Pro', san-serif",
                    color: "#596e79",
                    fontSize: ".8rem",
                  }}
                  href=""
                >
                  Forgot Password ?{" "}
                </a>
              </p>
              <button
                type="submit"
                style={{
                  border: "none",
                  width: "40%",
                  height: "40px",
                  borderRadius: "150px",
                  backgroundColor: "#596e79",
                  color: "white",
                  marginTop: "1%",
                }}
              >
                Submit
              </button>
            </form>
          </div>
          <div className="colorRight ">
            <div className="textInColorRight">
              <h1 style={{ color: " rgb(239, 242, 248)" }}>Open the App </h1>
              <p
                style={{
                  color: " rgb(215, 215, 215)",
                  fontFamily: "'Poppins' san-serif",
                  lineHeight: "1.5rem",
                  fontSize: ".9rem",
                  maxWidth: "320px",
                  marginLeft: "12%",
                }}
              >
                Ensure seamless transactions—update your payment method now for
                uninterrupted service. Your convenience matters to us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
