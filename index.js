/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHc2jfrh4b38ctfEXNT09IdDPh6Q-EsfI",
  authDomain: "loztoan.firebaseapp.com",
  databaseURL: "https://loztoan-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "loztoan",
  storageBucket: "loztoan.appspot.com",
  messagingSenderId: "573098348380",
  appId: "1:573098348380:web:c8c7dd5a37371569b43b99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  var database = firebase.database();

send.addEventListener('click',(e) =>{ 
Sends();
});
read.addEventListener('click',(e) =>{ 
Getval();
});

function Sends(){
    Number = parseFloat(document.getElementById('Number').value);
const db = getDatabase();
  set(ref(db, 'Number/'), {
    Value : Number
  });
}

function Getval(){
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Number` + '/Value')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        document.getElementById('val').innerHTML = "Number/Value="+snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}
