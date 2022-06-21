import React from "react";
import { ErrorMessage } from "formik";

const Error = ({ name }) => {
  return (
    <div style={{ color: "red" }}>
      <ErrorMessage name={name} />
    </div>
  );
};

export default Error;