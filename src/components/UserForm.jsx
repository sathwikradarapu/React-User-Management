// UserForm component handles the user form for adding or editing users
import React from "react";

function UserForm({ formData, setFormData, onSubmit, isEditing }) {
  return (
    <form onSubmit={onSubmit} className="mb-4">
      <div className="row">
        {/* First Name Field */}
        <div className="col-12 col-md-6 mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />
        </div>

        {/* Last Name Field */}
        <div className="col-12 col-md-6 mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />
        </div>
      </div>

      <div className="row">
        {/* Email Field */}
        <div className="col-12 col-md-6 mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>

        {/* Department Field */}
        <div className="col-12 col-md-6 mb-3">
          <label htmlFor="department" className="form-label">
            Department
          </label>
          <input
            type="text"
            className="form-control"
            id="department"
            value={formData.department}
            onChange={(e) =>
              setFormData({ ...formData, department: e.target.value })
            }
          />
        </div>
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary w-100">
        {isEditing ? "Update User" : "Add User"}
      </button>
    </form>
  );
}

export default UserForm;
