
var firebaseConfig = {
    apiKey: "AIzaSyCen-GzVyog_FicSBspWaa32R91Uy7Kemk",
    authDomain: "lcapp-a6d67.firebaseapp.com",
    projectId: "lcapp-a6d67",
    storageBucket: "lcapp-a6d67.appspot.com",
    messagingSenderId: "1038035416426",
    appId: "1:1038035416426:web:30cada020207e81698e113",
    measurementId: "G-3GP55Q0SJ1"
  };
  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";

function addRoom() {

    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({

          purpose : "adding Room name"

    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";


}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

console.log("room_name - ")
    "<div class='room_name' id="+ Room_names +" onclick='redirectToRoomName(this.id)' #"+Room_names+"></div> <hr> "
    document.getElementById("output").innerHTML += row;
    
    //End code
    });});}
getData();

function redirectToRoomName(name) {

    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"
}