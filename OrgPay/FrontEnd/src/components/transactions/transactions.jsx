import Sidebar from "../sidebar/sidebar";
import "./transactions.css";
import List from "../table/table";

const Transactions = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <div className="table">
                    <List/>
                </div>
            </div>
        </div>
    )
}

export default Transactions