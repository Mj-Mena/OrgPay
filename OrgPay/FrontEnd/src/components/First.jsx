import "./components.css";
function First() {
  return (
    <>
      <div className="firstCont">
        <section className="Fleft">
          <div className="intro">
            <h1
              style={{
                fontFamily: ' "Acumin Pro", sans-serif',
                color: "#F7F8F9",
                fontSize: "2rem",
                fontWeight: "700",
                textAlign: "left",
                lineHeight: "3rem",
                marginTop: "-1%",
                margin: "0px 10%",
              }}
            >
              Simplify Payments, Amplify Success.
            </h1>
            <p className="introdeet" style={{ margin: "7% 10%" }}>
              Experience the next evolution in payments with OrgPay. From secure
              transactions to unparalleled convenience, we're here to redefine
              the way you pay and get paid.
            </p>
          </div>
        </section>
        <section className="Fright"></section>
      </div>
    </>
  );
}

export default First;
