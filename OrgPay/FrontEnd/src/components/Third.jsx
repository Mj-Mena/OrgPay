import "./components.css";

function Third() {
  return (
    <>
      <div id="Features" className="ThirdCont">
        <section>
          <section>
            <h2>We Provide the best process experience</h2>
          </section>

          <section style={{ marginTop: "10%" }}>
            <section className="bilog">
              <section>
                <div className="circleproc">
                  <h2>01</h2>
                </div>
                <div className="vl"></div>
              </section>
              <section>
                <h2>Authorization</h2>
                <p>
                  Authorization in the payment process involves verifying the
                  availability of funds or credit to ensure the legitimacy of a
                  transaction before proceeding with the fund transfer.
                </p>
              </section>
            </section>
            <section className="bilog">
              <section>
                <div className="circleproc">
                  <h2>02</h2>
                </div>
                <div className="vl"></div>
              </section>
              <section>
                <h2>Payment Processing</h2>
                <p>
                  The actual transfer or movement of funds between accounts,
                  often facilitated by payment processors or financial
                  institutions.
                </p>
              </section>
            </section>
            <section className="bilog">
              <section>
                <div className="circleproc">
                  <h2>03</h2>
                </div>
              </section>
              <section>
                <h2>Settlement</h2>
                <p>
                  The finalization of the payment, confirming that the funds
                  have been successfully transferred and updating relevant
                  records.
                </p>
              </section>
            </section>
          </section>
        </section>
        <section className="leftimg"></section>
      </div>
    </>
  );
}

export default Third;
