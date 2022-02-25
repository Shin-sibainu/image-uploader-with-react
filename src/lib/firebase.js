import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDteMise6muOFjvxNX_t36rQPEN42NQWIU",
  authDomain: "image-uploader-14ae2.firebaseapp.com",
  projectId: "image-uploader-14ae2",
  storageBucket: "image-uploader-14ae2.appspot.com",
  messagingSenderId: "271236565947",
  appId: "1:271236565947:web:7820807b905a7eaa64129e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
