import "./App.css";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Signup from "./components/signup";
import Admin from "./components/admin";
import Transactions from "./components/transactions/transactions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Au from "./components/Alluser/AllUser";
import NotesList from "./components/topay/notelist";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/admin/transactions" element={<Transactions />}></Route>
          <Route path="/admin/users" element={<Au />}></Route>
          <Route path="/admin/topay" element={<NotesList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
