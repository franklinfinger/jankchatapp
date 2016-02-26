deleteChatFromDom: function (event) {
    var chatId = $(this).closest("post-msg-container").data("chatid");
    myChat.deleteChats(postId);
    myChat.addAllChatsToDom();
  },





deleteChats: function deleteChats(postId) {
    console.log('http://tiny-tiny.herokuapp.com/collections/<collectionName>' + '/' + chatId);
    $.ajax({
      url: myChat.url + '/' + chatId,
      method: "DELETE",
      success: function (response) {
        myChat.getChats();
      }
    });
  },

//delete event
deleteChatFromDom: function (event) {
    var chatId = $(this).closest("post-msg-container").data('chatid');
    myChat.deleteChats(chatId);
    myChat.addAllChatsToDom();
  },



//place this in the initEvents: function()

$('section').on('click', '.delete', myBlog.deleteChatFromDom);




*** USER name *****
var alert = prompt("Enter User Name")
sessionStorage.setItem('key', 'value');
