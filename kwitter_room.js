
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBAbDrGcCQUhG3MprKsbKPj2Bv7qGr1DjE",
      authDomain: "kwitter-10892.firebaseapp.com",
      projectId: "kwitter-10892",
      storageBucket: "kwitter-10892.appspot.com",
      messagingSenderId: "1016903183163",
      appId: "1:1016903183163:web:4eed149e48b9b0c52c651e"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
