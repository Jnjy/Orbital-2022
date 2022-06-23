import { ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../config/FirebaseConfig";

export const uploadImage = async (img, folder, col) => {
  const storageRef = ref(
    storage,
    "images/" + col + "/" + folder + "/" + img.name
  );
  const uploadTask = await uploadBytesResumable(storageRef, img);
  return uploadTask;
};
