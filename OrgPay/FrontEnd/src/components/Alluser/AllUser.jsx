import "./Au.css";
import Sidebar from "../sidebar/sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
function Login() {
  const [users, setUsers] = useState([]);
  const up = "Update";
  const del = "Delete";
  useEffect(() => {
    axios
      .get("http://localhost:3001/admin")
      .then(
        (users) => setUsers(users.data),
        users.map((user) => {
          console.log(user.Username);
        })
      )
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="aucont">
        <section>
          <Sidebar />
        </section>
        <section>
          <h1>Welcome</h1>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th> Email</th>
                <th>Balance</th>
                <th>Delete</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className="data" key={user.Username}>
                  <td>{user.Username}</td>
                  <td>{user.Email}</td>
                  <td>{user.Username}</td>
                  <td>
                    <button>{up}</button>
                  </td>
                  <td>
                    <button>{del}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
export default Login;
