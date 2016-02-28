// initStyling
initStyling: function() {
  // myChat.addAllChatsToDom();
  // myChat.getChats();
  // myChat.getUsernameFromLogin();
  //setInterval will load chats ever 2 sec between users
  // setInterval(myChat.getChats, 2000);

},

// initEvents
initEvents: function() {
  $('.enter-msg-form').on('submit', myChat.submitChat);
  $('.post-msg-container').on('click', '.delete-chat', myChat.deleteChatFromDom);
  $('.login-form').on('submit', myChat.getUsernameFromLogin);
  $('.login-form').on('submit', function() {
    $('.login-form-container').addClass('hidden');
    $('.main-container').removeClass('hidden');
  });
},

// set username
getUsernameFromLogin: function () {
var EnterUsername = $('#username').val();
localStorage.setItem('login', EnterUsername);
myChat.getUsernameFromStorage();
},

getUsernameFromStorage: function() {
return localStorage.getItem('login');
},

//delete event
deleteChatFromDom: function (event) {
    // window.glob = $(this);
    if (localStorage.getItem('login') === $('#username').val()) {
      var chatId = $(this).closest(".post-msg-wrapper").data('chatid');
      myChat.deleteChats(chatId);
      myChat.addAllChatsToDom();
    } else {
      alert('Sorry, only the current user can delete this message.');
    }
},
