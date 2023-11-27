import "./users.css";
import Sidebar from "../sidebar/sidebar";
import Datatable from "../datatable/datatable";


const Users = () => {
    return (
        <div className="home">
            <Sidebar/>
            <div className="homeContainer">
                <div className="table">
                    <Datatable/>
                </div>
            </div>
        </div>
    )
}

export default Users