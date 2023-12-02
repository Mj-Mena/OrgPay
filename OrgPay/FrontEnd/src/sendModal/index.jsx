import { useRef, useState } from "react";
import './send.css';

const SendModal = (props) => {

    var balance = 69420.187;

    return(
        <nav>
            <div className="send-content">  
                <div style={{gridRow :' 1 / span 2', gridColumn: ' 1/ span 2'}}>
                    <div className="circle">
                        <div className="balshow">Your Balance is {balance}</div>
                    </div>
                </div>
                <div style={{gridRow :' 1 / span 2', gridColumn: ' 2/ span 1'}} className="sendMain">
                    <h1 style={{marginBottom:'20px', fontSize:'25px'}}>Send Currency</h1>
                    <h1>Reciever ID</h1>
                    <input className="inputField" type="integer"/>
                    <br />
                    <h1>Amount to Send</h1>
                    <input className="inputField" type="integer"/>
                    <button className="confButton hovbutt">CONFIRM</button>                
                </div>
            </div>
        </nav>
    )
}

export default SendModal;