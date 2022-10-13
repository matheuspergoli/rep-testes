// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBlHOgRU-ywYE2xHfHzXADF1T4ngquKqpM',
	authDomain: 'teste-de-auth-245ae.firebaseapp.com',
	projectId: 'teste-de-auth-245ae',
	storageBucket: 'teste-de-auth-245ae.appspot.com',
	messagingSenderId: '631390009890',
	appId: '1:631390009890:web:8c4714a5660ba36983e87b'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
