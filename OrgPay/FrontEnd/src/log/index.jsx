import { useRef, useState } from "react";
import './log.css';

const LogMain = (props) => {

    return(
        <nav>
            <div className="logMain">
                <div className="logHead">
                    <h1 style={{fontSize:'30px'}}>TRANSACTION HISTORY</h1>
                </div>
                <div className="logCont">
                    <div className="logHolder">
                        <div className="logNo">1</div>
                        <div className="logFrom">Sender</div>
                        <div className="logChange">-100</div>
                        <div className="logInfo">Org Fee</div>
                    </div>

                    <div className="logHolder">
                        <div className="logNo">2</div>
                        <div className="logFrom">Admin</div>
                        <div className="logChange">+100</div>
                        <div className="logInfo">Add Funds</div>
                    </div>

                </div>
            </div>
        </nav>
    )
}

export default LogMain;

