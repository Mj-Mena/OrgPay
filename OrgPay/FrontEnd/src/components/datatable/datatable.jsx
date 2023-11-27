import "./datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../datatablesource";
import { useState } from "react";
import Editform from "./editform";

const Datatable = () => {
  const [data, setData] = useState(userRows);
  const [editUserId, setEditUserId] = useState(null);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    setEditUserId(id);
  };

  const handleSaveEdit = (editedUser) => {
    const userIndex = data.findIndex((user) => user.id === editedUser.id);
    const updatedData = [...data];
    updatedData[userIndex] = editedUser;
    setData(updatedData);
    setEditUserId(null);
  };

  const isEditing = (userId) => {
    return editUserId === userId;
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        const userId = params.row.id;
        return (
          <div className="cellAction">
            <div className="editButton" onClick={() => handleEdit(userId)}>
              Edit
            </div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">All Users</div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />

      {data.map((user) => (
        isEditing(user.id) ? (
          <Editform
            key={user.id}
            user={user}
            onSave={handleSaveEdit}
          />
        ) : null
      ))}
    </div>
  );
};

export default Datatable;
