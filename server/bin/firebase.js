import { initializeApp } from "firebase-admin/app";

// initialize firebase admin, uses environment variables
const firebaseApp = initializeApp();
console.log(firebaseApp.name);

export default firebaseApp;
