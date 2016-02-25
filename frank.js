deleteChatFromDom: function (event) {
    var chatId = $(this).closest("post-msg-container").data("chatid");
    myChat.deleteChats(postId);
    myChat.addAllChatsToDom();
  },





deleteChats: function deleteChats(postId) {
    console.log("http://tiny-tiny.herokuapp.com/jankChatApp/posts" + '/' + chatId);
    $.ajax({
      url: myChat.url + '/' + chatId,
      method: "DELETE",
      success: function (response) {
        myChat.getChats();
      }
    });
  },
