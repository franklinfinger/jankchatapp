// this is a comment
$(document).ready(function() {
  myChat.init();

});

// myChat main Object calling initStyling & initEvents
var myChat = {
  url: 'http://tiny-tiny.herokuapp.com/collections/jankchat2',
  init: function() {
    myChat.initStyling();
    myChat.initEvents();
  },

  // initStyling
  initStyling: function() {
    // myChat.addAllChatsToDom();
    // myChat.getChats();
    myChat.getUsernameFromLogin();
    //setInterval will load chats ever 2 sec between users
    // setInterval(myChat.getChats, 2000);

  },

  initEvents: function() {
    $('.enter-msg-form').on('submit', myChat.submitChat);
    $('.post-msg-container').on('click', '.delete-chat', myChat.deleteChatFromDom);
    $('.login-form').on('submit', myChat.getUsernameFromLogin);
    $('.login-form').on('submit', function() {
      event.preventDefault();
      myChat.getUsernameFromLogin();
      $('.login-wrapper').hide();
      $('.main-container').show();
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

  submitChat: function(event) {
    event.preventDefault();
    var newChat = myChat.getChatFromDom();
    console.log(newChat);
    myChat.addChats(newChat);
    $('input').val('');
  },

  getChatFromDom: function() {
    var content = $('.enter-msg').val();
    var username = myChat.getUsernameFromStorage();
    var time = moment(new Date()).format('LT');
    console.log(username);
    return {
      username: username,
      message: content,
      time: time
    }
  },


  addAllChatsToDom: function(chatsArr) {
    // chatsArr.preventDefault();
    $('.post-msg-container').html('');
    console.log("chats array: ", chatsArr);
    _.each(chatsArr, function(el) {
      var tmpl = _.template(templates.postChat);
      //to get the chat to load in the top of the page use append
      console.log(el);
      $('.post-msg-container').prepend(tmpl(el));

      $('.post-msg-container').scrollTop($('.post-msg-container')[0].scrollHeight)
      // myChat.setInterval();
    });
    $('.post-msg-container').scrollTop($('.post-msg-container')[0].scrollHeight)
  },

  //delete event
  deleteChatFromDom: function (event) {
      // window.glob = $(this);
      var chatId = $(this).closest(".post-msg-wrapper").data('chatid');
      var loginName = $(this).siblings('h4').text();
      console.log(loginName);
      if (localStorage.getItem('login') === loginName) {
        myChat.deleteChats(chatId);
        myChat.addAllChatsToDom();
      } else {
        alert('Sorry, only the current user can delete this message.');
      }
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

  deleteChats: function deleteChats(chatId) {
      console.log('http://tiny-tiny.herokuapp.com/collections/jankchat2' + '/' + chatId);
      $.ajax({
        url: myChat.url + '/' + chatId,
        method: "DELETE",
        success: function (data) {
          console.log(data);
          myChat.getChats();
        }
      });
    }
} // end of myChat
