import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../config/FirebaseConfig";

export const uploadImage = (file) => {
  const storageRef = ref(storage, "images/" + file.name);
  const uploadTask = uploadBytesResumable(storageRef, file, {
    contentType: "image/jpeg",
  });
  return uploadTask;
};
