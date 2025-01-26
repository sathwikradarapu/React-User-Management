// ErrorBoundary component to display any error messages
import React from "react";

function ErrorBoundary({ error }) {
  if (!error) return null; // If no error, do not render anything
  return <div className="alert alert-danger text-center mt-3">{error}</div>; // Display error in an alert box
}

export default ErrorBoundary;
