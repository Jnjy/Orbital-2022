import { Button, Stack, TextField } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRef } from "react";
import ErrorMessage from "../../store/components/Error";
import TextFieldBox from "../../../components/FormsUI/TextFieldBox";
import {
  addCommunity,
  linkUserCommunity,
  updateImgRef,
} from "../../../hooks/useDB";
import { useAuth } from "../../../hooks/useAuth";
import { uploadImage } from "../../../hooks/useStorage";

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

function ItemForm({ handleClose, addC }) {
  const { user } = useAuth();

  const imageRef = useRef(null);

  const handleSubmit = (values) => {
    let cid = "";

    const newValue = {
      name: values.name,
      shortDesc: values.shortDesc,
      address: values.address,
      image: "placeholder-image.png",
    };

    let promise = "";

    if (values.image === "") {
      promise = addCommunity(newValue).then((r) => {
        //1a. Link user to communtiy (optional step at this juncture tbh)
        linkUserCommunity(user.uid, r.id).then((r) => r);
        cid = r.id;
        addC(cid);
        console.log("Added NO IMAGE");
        return r;
      });
    }

    if (values.image !== "") {
      //1. Create Community
      promise = addCommunity(newValue)
        .then((r) => {
          //1a. Link user to communtiy (optional step at this juncture tbh)
          linkUserCommunity(user.uid, r.id).then((r) => r);
          cid = r.id;
          return r;
        })
        //2. Add image
        .then((r) => {
          const promise = uploadImage(values.image, cid, "community");
          const result = Promise.resolve(promise);
          return result;
        })
        //3. Store image location to db
        .then((r) => {
          //console.log(r);
          updateImgRef("community", cid, { image: r.ref.fullPath });
          addC(cid);
        });
    }
    Promise.resolve(promise);
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
            <TextFieldBox
              fullWidth
              name="name"
              label="Community Name"
              required
            />
            <TextFieldBox
              fullWidth
              name="address"
              label="Community Address"
              required
            />
            <TextFieldBox
              id="outlined-textarea"
              name="shortDesc"
              label="Community Description"
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
