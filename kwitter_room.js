user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
//ADD YOUR FIREBASE LINKS HERE
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
      apiKey: "AIzaSyCvry7oceY6yfGlAzMv1teBdlH2-4dmU3A",
      authDomain: "kwitter-d5531.firebaseapp.com",
      projectId: "kwitter-d5531",
      storageBucket: "kwitter-d5531.appspot.com",
      messagingSenderId: "926447229704",
      appId: "1:926447229704:web:15e430e28f5238cef6aabd",
      measurementId: "G-C7J5LXY298"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
       console.log("Room Name - " + Room_names);
       row = "<div class='room_name' id=>"+ Room_names + " onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;
       //End code
     });});}
getData();

function addRoom(){

room_name = document.getElementById("room_name").value
firebase.database().ref("/").child.update({
purpose: "adding room name"
});

     localStorage.setItem("room_name", room_name);

     window.location = "kwitter_page.html";
}
function redirectToRoomName(name){
 console.log(name);
 localStorage.setItem("room_name", name);
 window.location = "kwitter_page.html";
}
getData();
function logout(){
  localStorage.removeItem("user_name")
  window.location = "index.html"
}

 
