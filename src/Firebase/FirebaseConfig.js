import firebase from "firebase";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

export const firebaseApp = firebase.initializeApp({
   apiKey: "AIzaSyB-WUDlZGjVlUe4wqwVYTQ2ZooirvGDndg",
  authDomain: "miniproject12-76aca.firebaseapp.com",
  projectId: "miniproject12-76aca",
  storageBucket: "miniproject12-76aca.appspot.com",
  messagingSenderId: "231409128817",
  appId: "1:231409128817:web:02bcf2b665758bd6d352d0",
  
});

const app = initializeApp(firebaseApp);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;


