import './App.css';
import Navbar from './components/Navbar';
import ServicesSection from './components/ServicesSection';

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyArPRD7PSo2AZYhvH3qt59GX2U6vcq9Stw",
//   authDomain: "amizone-f1022.firebaseapp.com",
//   projectId: "amizone-f1022",
//   storageBucket: "amizone-f1022.appspot.com",
//   messagingSenderId: "302743134357",
//   appId: "1:302743134357:web:fff91d0a9511eae2a87b9c",
//   measurementId: "G-KS7JPKF4PB"
// };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

function App() { 

  return (
    <>
    
    <Navbar
    b1='LMS'
    b2='More'
    />

    <ServicesSection/>
    
    </>
  );
}

export default App;






