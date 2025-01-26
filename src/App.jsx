// Main App component that handles the state, fetches user data, and manages form actions
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"; // Custom styles
import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  // State variables to handle user data, form data, editing state, etc.
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const USERS_PER_PAGE = 5; // Limit of users per page

  // Function to fetch users from the API
  const fetchUsers = (page) => {
    fetch(
      `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${USERS_PER_PAGE}`
    )
      .then((response) => {
        const total = response.headers.get("X-Total-Count");
        setTotalPages(Math.ceil(total / USERS_PER_PAGE)); // Set the total number of pages
        return response.json();
      })
      .then((data) => {
        // Modify the fetched data to simulate additional user fields
        const updatedUsers = data.map((user) => ({
          ...user,
          firstName: user.name.split(" ")[0], // Extract first name from the 'name' field
          lastName: user.name.split(" ")[1] || "", // Extract last name
          department: "Engineering", // Simulate department data
        }));
        setUsers(updatedUsers);
      })
      .catch(() => setError("Failed to fetch users. Please try again.")); // Error handling
  };

  // Fetch users whenever the current page changes
  useEffect(() => {
    fetchUsers(currentPage);
  }, [currentPage]);

  // Handle adding a new user
  const handleAddUser = (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.department
    ) {
      setError("All fields are required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Invalid email format");
      return;
    }

    // Simulate posting the new user data
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers([...users, data]); // Update the user list with the new user
        setFormData({
          id: "",
          firstName: "",
          lastName: "",
          email: "",
          department: "",
        });
        setError(null);
        setSuccessMessage("User added successfully");
        setTimeout(() => setSuccessMessage(null), 3000); // Clear success message after 3 seconds
      })
      .catch(() => setError("Failed to add user")); // Error handling
  };

  // Handle editing an existing user
  const handleEditUser = (user) => {
    setIsEditing(true);
    setFormData({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      department: user.department,
    });
  };

  // Handle updating an existing user
  const handleUpdateUser = (e) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.department
    ) {
      setError("All fields are required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setError("Invalid email format");
      return;
    }

    // Simulate updating the user data
    fetch(`https://jsonplaceholder.typicode.com/users/${formData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedUsers = users.map(
          (user) => (user.id === formData.id ? data : user) // Update user in the list
        );
        setUsers(updatedUsers);
        setIsEditing(false); // Exit edit mode
        setFormData({
          id: "",
          firstName: "",
          lastName: "",
          email: "",
          department: "",
        });
        setError(null);
        setSuccessMessage("User updated successfully");
        setTimeout(() => setSuccessMessage(null), 3000); // Clear success message after 3 seconds
      })
      .catch(() => setError("Failed to update user")); // Error handling
  };

  // Handle deleting a user
  const handleDeleteUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        setUsers(users.filter((user) => user.id !== id)); // Remove user from the list
        setSuccessMessage("User deleted successfully");
        setTimeout(() => setSuccessMessage(null), 3000); // Clear success message after 3 seconds
      })
      .catch(() => setError("Failed to delete user")); // Error handling
  };

  // Handle pagination logic (Previous and Next buttons)
  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">User Management</h1>

      {/* Display error or success messages */}
      {error && <ErrorBoundary error={error} />}
      {successMessage && (
        <div className="alert alert-success text-center">{successMessage}</div>
      )}

      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <UserForm
            formData={formData}
            setFormData={setFormData}
            onSubmit={isEditing ? handleUpdateUser : handleAddUser}
            isEditing={isEditing}
          />
        </div>
        <div className="col-lg-8 col-md-6 col-sm-12">
          <UserList
            users={users}
            onEdit={handleEditUser}
            onDelete={handleDeleteUser}
          />
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center mt-4">
        <button
          className="btn btn-primary mb-2 mb-sm-0"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="align-self-center mb-2 mb-sm-0">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-primary"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
