import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Grid, Stack } from "@mui/material";
import TextFieldBox from "../../../components/FormsUI/TextFieldBox";
import { updateProfile } from "../../../hooks/useDB";

const INITIAL_FORM_STATE = {
  username: "",
  phone: "",
  telegram: "",
};

const FORM_VALIDATION = Yup.object().shape({});

function EditProfileForm(props) {
  const handleSubmit = (values) => {
    //console.log(props);
    //console.log(props.props.uid.uid);
    let promise = "";
    promise = updateProfile("users", props.uid.uid, {
      phone: values.phone,
      name: values.username,
      telegram: values.telegram,
    });
    Promise.resolve(promise);
    props.su({
      phone: values.phone,
      name: values.username,
      tele: values.telegram,
    });
    //props.sp(values.phone);
    //props.st(values.telegram);
    //handleclose
    props.hc();
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
            <Grid container direction="row" spacing={4}>
              <Grid item xs={12} md={4}>
                <TextFieldBox name="username" fullWidth label="Name" required />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextFieldBox
                  name="phone"
                  fullWidth
                  label="Phone Number"
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextFieldBox
                  name="telegram"
                  fullWidth
                  label="Telegram Handle(@xx)"
                  required
                />
              </Grid>
            </Grid>
          </Stack>
          <br />
          <br />
          <Button variant="outlined" type="submit">
            Edit
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default EditProfileForm;
