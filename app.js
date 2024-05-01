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
  const customerTxt = document.getElementById("customermsg");
  const message = chatTxt.value;
  const customermsg = customerTxt.value;
  database.ref('chat').push({
    message: message,
    customermsg: customermsg
  });
  // clear field after send message
  chatTxt.value = "";
}

// Get/Fetch messages in template
const fetchChat = database.ref("chat");
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const msg = "<li> Admin: " + messages.message + "</li>";
  const customermsg = "<li> Customer: " + messages.customermsg + "</li>";
  document.getElementById("messages").innerHTML += msg;
  document.getElementById("customer_messages").innerHTML += customermsg;
});
