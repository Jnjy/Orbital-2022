import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

function TextFieldBox({ name, ...props }) {
  const [field, meta] = useField(name);

  const configTextField = {
    ...field,
    ...props,
    fullWidth: true,
    variant: "outlined",
  };

  if (meta && meta.touched && meta.error) {
    configTextField.error = true;
    configTextField.helperText = meta.error;
  }

  return <TextField {...configTextField} />;
}

export default TextFieldBox;
