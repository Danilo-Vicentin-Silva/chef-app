import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
	apiKey: "AIzaSyA8dq2S3aFLvVPLQyLqYsUBGKfqrO1264w",
	authDomain: "chef-app-cefbe.firebaseapp.com",
	projectId: "chef-app-cefbe",
	storageBucket: "chef-app-cefbe.appspot.com",
	messagingSenderId: "565131885762",
	appId: "1:565131885762:web:5c789304cc97c7b3184f5b",
}
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
