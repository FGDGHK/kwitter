
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyCsXoryvQLO6wKJkXv20Co1ak7_xEZux6c",
      authDomain: "kwitter-c57aa.firebaseapp.com",
      projectId: "kwitter-c57aa",
      storageBucket: "kwitter-c57aa.appspot.com",
      messagingSenderId: "244398625207",
      appId: "1:244398625207:web:06c7127c8f0b7eb3e09832"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
