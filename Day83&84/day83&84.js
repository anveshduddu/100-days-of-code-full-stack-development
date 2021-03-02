function talk(){
  var know = {
    "Hi" : "Hello,Welcome.",
    "How are you" : "Good! Hope You Are Fine :)",
    "What is your name" : "lalala.",
    "ok" : "Thank You So Much <3",
    "Bye" : "Okay! Will meet soon. TC:).."
  };
  var user = document.getElementById('userBox').value;
    document.getElementById('chatLog').innerHTML = user + "<br>";
  if (user in know) {
    document.getElementById('chatLog').innerHTML = know[user] + "<br>";
  }else{
    document.getElementById('chatLog').innerHTML = "Sorry,I didn't understand <br>";
  }
}
