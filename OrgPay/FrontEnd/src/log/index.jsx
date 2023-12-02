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
                    Di ko pa nakikita yung transaction history sa admin side pero pareho lang ilalalgay dito
                </div>
            </div>
        </nav>
    )
}

export default LogMain;

