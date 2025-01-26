// UserList component displays the list of users in a table
import React from "react";

function UserList({ users, onEdit, onDelete }) {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through the users and display each user in a table row */}
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName || "N/A"}</td>
              <td>{user.lastName || "N/A"}</td>
              <td>{user.email}</td>
              <td>{user.department || "N/A"}</td>
              <td>
                {/* Edit and Delete Buttons */}
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => onEdit(user)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => onDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
