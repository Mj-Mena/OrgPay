import React from "react";
import "./topay.css"
import { BsCash } from "react-icons/bs";
import { PiHamburgerBold } from "react-icons/pi";

const ToPay = (props) => {
    var itemName = 'Org Fee'
    var price = 100
    return(
        <nav>
                <button className="item"><BsCash size={50}/>
                    <h3>{itemName}</h3>
                    <h4>₱{price}</h4>
                </button>
        </nav>
    );

} 
export default ToPay;