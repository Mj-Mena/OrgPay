import Sidebar from "./sidebar/sidebar";
import "./admin.css";
import Widget from "./widget/widget";
import List from "./table/table";

const Admin = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <div className="widgets">
                    <Widget/>
                </div>
                <h3 className="Head">Recent Transactions</h3>
                <div className="table">
                    <List/>
                </div>

            </div>
        </div>
    )
}

export default Admin