import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyDlo7fBS8r91b7bZgYlpB80zIpfdecsYCM",
  authDomain: "contextauth-b9dbc.firebaseapp.com",
  projectId: "contextauth-b9dbc",
  storageBucket: "contextauth-b9dbc.appspot.com",
  messagingSenderId: "581698654249",
  appId: "1:581698654249:web:ad866414102c2b4bd6cc38"
};


const app = initializeApp(firebaseConfig);
const authenticate= getAuth(app)
module.exports= {app, authenticate}