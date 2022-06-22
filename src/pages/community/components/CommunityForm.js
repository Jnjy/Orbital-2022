import { Button, Stack, TextField } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRef } from "react";
import ErrorMessage from "../../store/components/Error";
import TextFieldBox from "../../../components/FormsUI/TextFieldBox";
import { addCommunity, linkUserCommunity } from "../../../hooks/useDB";
import { useAuth } from "../../../hooks/useAuth";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const INITIAL_FORM_STATE = {
  name: "",
  shortDesc: "",
  address: "",
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
  const { user } = useAuth();

  const imageRef = useRef(null);

  const handleSubmit = (values) => {
    console.log(values);
    addCommunity(values).then((r) => linkUserCommunity(user.uid, r.id));
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
            <TextFieldBox fullWidth name="name" label="Community Name" />
            <TextFieldBox fullWidth name="address" label="Community Address" />
            <TextFieldBox
              id="outlined-textarea"
              name="shortDesc"
              label="commDescription"
              placeholder="Description"
              maxRows={4}
              multiline
              required
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
          <Button type="submit">Add</Button>
        </Form>
      )}
    </Formik>
  );
}

export default ItemForm;
