import firebase from "firebase"

// Firebaseの設定
const firebaseConfig = {
 apiKey: process.env.API_KEY,
 authDomain: process.env.AUTH_DOMAIN,
 databaseURL: process.env.DATABASE_URL,
 projectId: process.env.PROJECT_ID,
 storageBucket: process.env.STORAGE_BUCKET,
 messagingSenderId: process.env.MESSAGING_SENDER_ID,
 appId: process.env.APP_ID,
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase