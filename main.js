$(document).ready(function() {
  myChat.init();
});


var chats = [];
// myChat main Object calling initStyling & initEvents
var myChat = {
  url: 'http://tiny-tiny.herokuapp.com/collections/jankchat',
  init: function() {
    myChat.initStyling();
    myChat.initEvents();
  },


  // initStyling
  initStyling: function() {
    // myChat.addAllChatsToDom();
    myChat.getChats();
  },

  // initEvents
  initEvents: function() {
    $('form').on('submit', myChat.submitChat);
    $('section').on('click', '.delete', myChat.deleteChatFromDom);
    $('.post-msg-wrapper').hover(function() {

    })
  },

// 

  submitChat: function(event) {
    event.preventDefault();

    var newChat = myChat.getChatFromDom();
    console.log(newChat);
    myChat.addChats(newChat);
    $('input').val('');
  },

  getChatFromDom: function() {
    // var username = prompt('Login here');
    // var username = $('input[name="login"]').val();
    var content = $('.enter-msg').val();
    // localStorage.setItem(username);
    console.log(content);
    return {
      username: username,
      message: content
    }
  },

  addAllChatsToDom: function(chatsArr) {
    // chatsArr.preventDefault();
    $('.post-msg-container').html('');
    console.log("chats array: ", chatsArr);
    _.each(chatsArr, function(el) {
      var tmpl = _.template(templates.postChat);
      $('.post-msg-container').append(tmpl(el));
    });
  },

  //delete event
  deleteChatFromDom: function (event) {
      var chatId = $(this).closest("post-msg-container").data('chatid');
      myChat.deleteChats(chatId);
      myChat.addAllChatsToDom();
  },

  getChats: function() {
    $.ajax({
      url: myChat.url,
      method: 'GET',
      success: function(chats) {
        console.log(chats);
        myChat.addAllChatsToDom(chats);
      },
      error: function(err) {
        console.log(err);
      }
    });
  },

  addChats: function(newChat) {
    $.ajax({
      url: myChat.url,
      method: 'POST',
      data: newChat,
      success: function (response) {
        myChat.getChats();
      },
      error: function(err) {
        console.log("error, err");
      }
    });
  },

  deleteChats: function deleteChats(postId) {
      console.log('http://tiny-tiny.herokuapp.com/collections/jankchat' + '/' + chatId);
      $.ajax({
        url: myChat.url + '/' + chatId,
        method: "DELETE",
        success: function (response) {
          myChat.getChats();
        }
      });
    },





  // userLoggedIn: function() {
  //   var user = data.username;
  // }

} // end of myChat
