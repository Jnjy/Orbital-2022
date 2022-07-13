import React from 'react'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button, Grid, Stack } from '@mui/material';
import TextFieldBox from '../../../components/FormsUI/TextFieldBox';

const INITIAL_FORM_STATE = {
    username: "",
    phone: "",
    telegram: ""
};

const FORM_VALIDATION = Yup.object().shape({
    
});

function EditProfileForm(props) {

    function handleSubmit(values) {
        console.log(props.props.profile);
    }

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
                    <TextFieldBox
                    name="username"
                    fullWidth
                    label="Username"
                    value={props.props.profile.name}
                    required
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextFieldBox
                    name="phone"
                    fullWidth
                    label="Phone Number"
                    value={props.props.profile.phone}
                    required
                    />
                </Grid>
                <Grid item xs={12} md={4}>
                    <TextFieldBox
                    name="telegram"
                    fullWidth
                    label="Telegram Handle"
                    required
                    />
                </Grid>
                </Grid>
            </Stack>
            <br />
            <br />
            <Button variant="outlined" type="submit">Edit</Button>
            </Form>
        )}
        </Formik>
    )
}

export default EditProfileForm