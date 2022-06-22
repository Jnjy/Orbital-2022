import { Button, Stack, TextField } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRef } from "react";
import ErrorMessage from "./Error";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const INITIAL_FORM_STATE = {
  itemName: "",
  itemDescription: "",
  itemImage: "",
  itemCondition: "",
  image: "",
};

const FORM_VALIDATION = Yup.object().shape({
  image: Yup.mixed()
    .nullable()
    .test(
      "FILE_SIZE",
      "Uploaded file is too big.",
      (value) => !value || (value && value.size <= 1024 * 1024)
    )
    .test(
      "FILE_FORMAT",
      "Uploaded file has unsupported format.",
      (value) => !value || (value && SUPPORTED_FORMATS.includes(value?.type))
    ),
});

function ItemForm({ handleClose }) {
  const imageRef = useRef(null);

  const handleSubmit = (values) => {
    console.log(values);
    handleClose();
  };

  return (
    <Formik
      initialValues={{ ...INITIAL_FORM_STATE }}
      onSubmit={handleSubmit}
      validationSchema={FORM_VALIDATION}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <Stack spacing={4}>
            <Stack direction="row" spacing={4}>
              <TextField fullWidth label="Item Name" />
              <TextField fullWidth label="Item Price" />
            </Stack>
            <TextField
              id="outlined-textarea"
              label="Item Description"
              placeholder="Description"
              maxRows={4}
              multiline
            />
            <input
              ref={imageRef}
              type="file"
              name="image"
              onChange={(event) =>
                setFieldValue("image", event.target.files[0])
              }
            />
            <ErrorMessage name="image" />
          </Stack>
          <Button type="submit">Post</Button>
        </Form>
      )}
    </Formik>
  );
}

export default ItemForm;
