import { useRef, useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import './send.css';
import axios from "axios";

const SendModal = (props) => {
    const [usern, setUsern] = useState();
    const [em, setEm] = useState();
    const [id, setId] = useState();
    const [balance, setbalance] = useState();
    const { email } = useParams();
    const [amount, setamount] = useState();
    const [reference, setreference] = useState();
    const [newBalance, setNewBalance] = useState(0);

    useEffect(() => {
    console.log(email);
    axios
      .get("http://localhost:3001/User/")
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err));
    }, [email]);
    useEffect(() => {
        console.log(email);
        axios
          .post("http://localhost:3001/User/:email", { UEmail: email })
          .then((result) => {
            console.log(result.data);
            setUsern(result.data.Username);
            setEm(result.data.Email);
            setId(result.data._id);
            setbalance(result.data.Balance);
          })
          .catch((err) => console.log(err));
    }, []);

    const updateBalance = async () => {
        
      };

    const currBal = balance

    const checkBal = async () =>{
        
        if (amount < currBal){
            var newBalance = currBal-amount
            console.log(newBalance)
            console.log(email)
            try {
                // Make a PUT request to update the user's balance
                const response = await axios.put(`/updateBalance/${email}`, {
                  amount: parseInt(amount, 10),
                });
          
                console.log(response.data); // Log the server response
          
                // Optionally, you can reset the form or update the UI as needed
                setUserId('');
                setAmount('');
              } catch (error) {
                console.error('Error updating balance:', error);
              }
        }else{
            console.log('Insuficient Balance')
        }
    }

    return(
        <nav>
            <div className="send-content">  
                <h3 className="balshow">Balance: {balance}</h3>
                <div style={{gridRow :' 1 / span 2', gridColumn: ' 1/ span 2'}}>
                    <div className="circle">
                        
                    </div>
                </div>
                <div style={{gridRow :' 1 / span 2', gridColumn: ' 2/ span 1'}} className="sendMain">
                    <h1 style={{marginBottom:'20px', fontSize:'20px'}}>Send Currency</h1>
                    <h3 style={{textAlign: 'left'}}>Reference No.</h3>
                    <input className="inputField" type="integer" onChange={(e) => setreference(e.target.value)}/>
                    <br />
                    <h3 style={{textAlign: 'left'}}>Amount to Send</h3>
                    <input className="inputField" type="integer"  onChange={(e) => setamount(e.target.value)} />
                    <button className="confButton hovbutt" onClick={checkBal}>CONFIRM</button>                
                </div>
            </div>
        </nav>
    )
}

export default SendModal;