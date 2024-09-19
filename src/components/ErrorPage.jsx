import React from "react";

const ErrorPage = () => {
  return (
    <div className="error-container">
      <h1>404 - Page Not Found</h1>
      <p>
        Sorry, the page you are looking for might have been removed or is
        temporarily unavailable.
      </p>
      <p>
        You can <a href="/">return to the homepage</a>.
      </p>
    </div>
  );
};

export default ErrorPage;
