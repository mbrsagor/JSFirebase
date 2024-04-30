const firebaseConfig = {
    apiKey: "AIzaSyBZJ4IzV9vXyLdBT-m8nEAB81Exz1LY3Ho",
    authDomain: "mynewchat-6c1a2.firebaseapp.com",
    projectId: "mynewchat-6c1a2",
    storageBucket: "mynewchat-6c1a2.appspot.com",
    messagingSenderId: "348556921164",
    appId: "1:348556921164:web:880cb2506e14b0028667e9"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.database();

// Send message using form data
document.getElementById("send-message").addEventListener("submit", postChat);
function postChat(e) {
  e.preventDefault();
  const chatTxt = document.getElementById("message");
  const message = chatTxt.value;
  database.ref('data').push({
    message: message
  });
  // clear field after send message
  chatTxt.value = "";
}

// Get messages in template
const fetchChat = database.ref("data");
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  // console.log(messages.message)
  const msg = "<li>" + messages.message + "</li>";
  document.getElementById("messages").innerHTML += msg;
});

