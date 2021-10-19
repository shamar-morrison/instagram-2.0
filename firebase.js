// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDdDDq-Fco8sFZSHRz-8KnbROUNXTo7ET8',
	authDomain: 'instagram-clone-ts-56f15.firebaseapp.com',
	projectId: 'instagram-clone-ts-56f15',
	storageBucket: 'instagram-clone-ts-56f15.appspot.com',
	messagingSenderId: '1005013942657',
	appId: '1:1005013942657:web:35e85b20f2322246b3e880',
};

// Initialize Firebase
const app = !getApps.length() ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
