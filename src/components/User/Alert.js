import React, { useEffect } from "react";

const Alert = ({ type, msg, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 4000);
    return () => clearTimeout(timeout);
  }, [removeAlert]);
  return (
    <div className="alert-container">
      <p className={`alert alert-${type}`}>{msg}</p>
    </div>
  );
};

export default Alert;
