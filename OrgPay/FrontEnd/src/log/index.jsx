import { useRef, useState } from "react";
import './log.css';

const LogMain = (props) => {
    var tranNo = 1
    var sender = 'Admin'
    var amount = -100
    var desc = 'Org Fee'

    var wew = [1,2,3,4,5]

    return(
        <nav>
            <div className="logMain">
                <div className="logHead">
                    <h1 style={{fontSize:'30px'}}>TRANSACTION HISTORY</h1>
                </div>
                <div className="logCont">
                    {wew?.map((x) =>( <div className="logHolder" key={'he'}>
                        <div className="logNo">{tranNo}</div>
                        <div className="logFrom">{sender}</div>
                        <div className="logChange">{amount}</div>
                        <div className="logInfo">{desc}</div>
                    </div>
                    ))}
                    

                </div>
            </div>
        </nav>
    )
}

export default LogMain;

