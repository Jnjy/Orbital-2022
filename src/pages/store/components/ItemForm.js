import { Button, Grid, Stack, TextField } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useRef } from "react";
import ErrorMessage from "./Error";
import TextFieldBox from "../../../components/FormsUI/TextFieldBox";
import { addItem, linkCommunityItem, updateImgRef } from "../../../hooks/useDB";
import { useAuth } from "../../../hooks/useAuth";
import { uploadImage } from "../../../hooks/useStorage";

const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

const INITIAL_FORM_STATE = {
  itemName: "",
  itemPrice: "",
  itemDesc: "",
  itemCond: "",
  image: "",
  ownerID: "",
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

function ItemForm({ handleClose, addI, cid }) {
  const { user } = useAuth();

  const imageRef = useRef(null);

  const handleSubmit = (values) => {
    let iid = "";

    const newValue = {
      itemName: values.itemName,
      itemPrice: values.itemPrice,
      itemDesc: values.itemDesc,
      itemCond: values.itemCond,
      image: "placeholder-image.png",
      ownerID: user.uid,
    };

    let promise = "";

    if (values.image === "") {
      promise = addItem(newValue).then((r) => {
        //1a. Link Community to Item
        linkCommunityItem(cid, r.id).then((r) => r);
        iid = r.id;
        addI(iid);
        //console.log("Added NO IMAGE");
        return r;
      });
    }

    if (values.image !== "") {
      //1. Create Item
      promise = addItem(newValue)
        .then((r) => {
          //1a. Link Community to Item
          linkCommunityItem(cid, r.id).then((r) => r);
          iid = r.id;
          return r;
        })
        //2. Add image
        .then((r) => {
          const promise = uploadImage(values.image, iid, "items");
          const result = Promise.resolve(promise);
          //console.log(result);
          return result;
        })
        //3. Store image location to db
        .then((r) => {
          //console.log(r);
          updateImgRef("items", iid, { image: r.ref.fullPath });
          addI(iid);
          //console.log("Added YES IMAGE");
        });
    }

    Promise.resolve(promise);
    handleClose();

    // addItem(newValue).then((r) => {
    //   linkCommunityItem(cid, r.id);
    //   addI(r.id);
    // });
    // handleClose();
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
                <TextFieldBox
                  name="itemName"
                  fullWidth
                  label="Item Name"
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextFieldBox
                  name="itemPrice"
                  fullWidth
                  label="Item Price"
                  required
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextFieldBox
                  name="itemCond"
                  fullWidth
                  label="Item Condition"
                  required
                />
              </Grid>
            </Grid>
            <TextFieldBox
              id="outlined-textarea"
              name="itemDesc"
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
