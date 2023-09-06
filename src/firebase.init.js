// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey:process.env.REACT_APP_API_KEY,
  // authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  // projectId:process.env.REACT_APP_PROJECTID,
  // storageBucket:process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId:process.env.REACT_APP_MESSAGINGSENDERID,
  // appId:process.env.REACT_APP_APPID
  apiKey: "AIzaSyAE8yxS5rz8DWOQSGw80wWBCEOpgF363Bo",
  authDomain: "bicycle-2a227.firebaseapp.com",
  projectId: "bicycle-2a227",
  storageBucket: "bicycle-2a227.appspot.com",
  messagingSenderId: "179285776437",
  appId: "1:179285776437:web:96146218510862a7e1b97c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;