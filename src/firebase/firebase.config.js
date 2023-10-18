
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsYjb0O1B4InqQDeHEWrYCpHIHqNUj5mk",
  authDomain: "gadget-galaxy-a19ea.firebaseapp.com",
  projectId: "gadget-galaxy-a19ea",
  storageBucket: "gadget-galaxy-a19ea.appspot.com",
  messagingSenderId: "580029039824",
  appId: "1:580029039824:web:3f70281852a9320f3fcad5"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
