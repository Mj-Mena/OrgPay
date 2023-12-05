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
                        <div className="logNo">a</div>
                        <div className="logFrom">b</div>
                        <div className="logChange">c</div>
                        <div className="logInfo">d</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default LogMain;

