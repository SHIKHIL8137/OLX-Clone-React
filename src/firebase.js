
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut ,updateProfile} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAZ0sD6HPh-1qlCWW55fHWvtd7mpJWrSFo",
  authDomain: "olxcloneproject-cc7d0.firebaseapp.com",
  projectId: "olxcloneproject-cc7d0",
  storageBucket: "olxcloneproject-cc7d0.firebasestorage.app",
  messagingSenderId: "549694690945",
  appId: "1:549694690945:web:af2ebec529e606e20f9f80"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      authProvider: "local",
      email,
      name,
    });
    await updateProfile(user, {
      displayName: name
    });
    return res
  } catch (error) {
    throw error
  }
};

const login = async (email, password) => {
  try {
   const res = await signInWithEmailAndPassword(auth, email, password);
    return res.user
  } catch (error) {
    console.log(error);
   throw error
  }
};

const logout = async () => {
  try {
    await signOut(auth);
    toast.success('LogOut')
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};

export { auth, db, login, signup, logout };
