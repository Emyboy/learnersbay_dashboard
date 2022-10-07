import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyClxJ3wXZ8i-im_DwIhAuFHkGOdjgJarC0",
    authDomain: "learnersbay-dev.firebaseapp.com",
    projectId: "learnersbay-dev",
    storageBucket: "learnersbay-dev.appspot.com",
    messagingSenderId: "597245364966",
    appId: "1:597245364966:web:43d4a13cb284ced10b8927",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Storage and get a reference to the service
export const storage = getStorage(app);
