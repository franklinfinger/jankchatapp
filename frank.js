deleteChatFromDom: function (event) {
    var chatId = $(this).closest("post-msg-container").data("chatid");
    myChat.deleteChats(postId);
    myChat.addAllChatsToDom();
  },









//place this in the initEvents: function()












<section>
  <div id="user-login-data"></div>
  <input type="text" id="login-name" />
  <input type="button" id="submitbtn" value="Save Text to Local Storage" />
</section>

$("#submitbtn").click(function () {
    SaveToLocalStorage();
});

function SaveToLocalStorage(){
  var username = $("#login-name").val();
  localStorage.setItem('LocalStorageKey', username);
  RetrieveFromLocalStorage();
}

function RetrieveFromLocalStorage() {
  var retrivedValue = 'None';
  var retrivedValue = localStorage.getItem('LocalStorageKey', retrivedValue);
  $("#user-login-data").text(retrivedValue);
}
