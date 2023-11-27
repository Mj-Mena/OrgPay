// Editform.jsx
import "./editform.css"
import React, { useState } from "react";

const Editform = ({ user, onSave }) => {
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({ ...editedUser, [name]: value });
  };

  const handleSave = () => {
    onSave(editedUser);
  };

  return (
    <div className="edit-popup">
      <h2>Edit User</h2>
      <form>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="username"
            value={editedUser.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Balance</label>
          <input
            type="number"
            name="balance"
            value={editedUser.balance}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Status</label>
          <div>
            <label>
              <input
                type="radio"
                name="status"
                value="paid"
                checked={editedUser.status === "paid"}
                onChange={handleRadioChange}
              />
              Paid
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name="status"
                value="unpaid"
                checked={editedUser.status === "unpaid"}
                onChange={handleRadioChange}
              />
              Unpaid
            </label>
          </div>
        </div>
        <div className="edit-popup-actions">
          <button onClick={handleSave}>Save</button>
        </div>
      </form>
    </div>
  );
};

export default Editform;
