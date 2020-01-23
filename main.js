// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCJncsqmMPZyavPcl4Xx_ZQLtnoda25qcA",
    authDomain: "akuaponik-e6140.firebaseapp.com",
    databaseURL: "https://akuaponik-e6140.firebaseio.com",
    projectId: "akuaponik-e6140",
    storageBucket: "akuaponik-e6140.appspot.com",
    messagingSenderId: "61779187614",
    appId: "1:61779187614:web:54aae4d4dab8f38d24688f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

var prePh = document.getElementById("ph");
var preSuhu = document.getElementById("suhu");
var prejarak = document.getElementById("jarak");

var pre1 = firebase.database().ref().child("ph");
pre1.on('value', function (datasnapshot) {
    prePh.innerText = datasnapshot.val();
})

var pre3 = firebase.database().ref().child("temperature");
pre3.on('value', function (datasnapshot) {
    preSuhu.innerText = datasnapshot.val();
})

var pre2 = firebase.database().ref().child("distance");
pre2.on('value', function (datasnapshot) {
    prejarak.innerText = datasnapshot.val();
})