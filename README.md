# User Management App

This project is a simple user management application built using React. It allows users to view, add, edit, and delete users from a list. It also includes pagination to navigate through pages of users. The project uses Bootstrap for styling and includes error handling and success messages to improve user experience.

## Features

**1.User List**: Displays a table of users with basic information (ID, first name, last name, email, and department).

**2.Add User**: Allows users to add new users with their details.

**3.Edit User**: Allows editing an existing user's details.

**4.Delete User**: Allows deleting a user from the list.

**5.Pagination**: Displays users in pages, and allows navigating through pages.

**6.Error Handling**: Displays error messages if there is any issue with fetching, adding, updating, or deleting users.

**7.Success Notifications**: Displays success messages when a user is added, updated, or deleted successfully.

## Project Setup

**1.Clone the repository**:

git clone <repository-url>

**2.Install dependencies**:

cd user-management-app

npm install

**3.Run the application**:

npm start

Open the application in your browser at http://localhost:3000.

## Components

**1.ErrorBoundary**:

Displays an error message when an action fails (e.g., fetching, adding, or deleting a user).
**Props**:

**-error**: The error message to display.

**2.UserForm**:

Form component for adding and editing users.

**Props**:

**-formData**: The form data (user details).

**-setFormData**: Function to update the form data.

**-onSubmit**: Function to handle form submission (add or update user).

**-isEditing**: Boolean flag to determine if the form is for editing or adding a user.

**3.UserList**:

Displays a table of users with actions to edit or delete them.

**Props**:

**-users**: The list of users to display.

**-onEdit**: Function to handle the edit action.

**-onDelete**: Function to handle the delete action.

**4.App**:

Main component that manages state and renders the application.

**Manages**:

Fetching users from the API.

Handling form submissions to add or update users.

Handling user deletion.

Pagination logic to navigate through pages of users.

## Dependencies

**1.react**: A JavaScript library for building user interfaces.

**2.react-dom**: DOM bindings for React.

**3.react-scripts**: A set of scripts used for building and running React applications.

**4.bootstrap**: A front-end framework for developing responsive and mobile-first websites.

## API

The app fetches users from the JSONPlaceholder API to simulate real data.

## API Endpoints Used

**1.GET /users**: Fetches a list of users with pagination.

**2.POST /users**: Adds a new user.

**3.PUT /users/{id}**: Updates an existing user.

**4.DELETE /users/{id}**: Deletes a user.

## Styles

The project uses Bootstrap 4 for responsive design and custom styles are included in styles.css. Ensure that the following CSS files are included in your project for proper styling:

1.bootstrap/dist/css/bootstrap.min.css

2./styles.css

## Error Handling

1.The app displays an error message at the top of the page if a request fails (e.g., fetching users, adding a user, etc).

2.Success messages are shown after actions like adding, updating, or deleting users.

### For any questions or contributions, feel free to raise an issue or submit a pull request.Happy coding!🚀

