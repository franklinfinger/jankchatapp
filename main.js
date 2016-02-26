// this is a comment
$(document).ready(function() {
  myChat.init();
});


// myChat main Object calling initStyling & initEvents
var myChat = {
  url: 'http://tiny-tiny.herokuapp.com/collections/jankchat1',
  init: function() {
    myChat.initStyling();
    myChat.initEvents();
  },


  // initStyling
  initStyling: function() {
    // myChat.addAllChatsToDom();
    myChat.getChats();
    myChat.getUsernameFromLogin();
  },

  // initEvents
  initEvents: function() {
    $('form').on('submit', myChat.submitChat);
    $('.post-msg-container').on('click', '.delete-chat', myChat.deleteChatFromDom);
    // $('.post-msg-wrapper').hover(function() {
    //
    // })
  },

// set username
 getUsernameFromLogin: function () {
  var EnterUsername = prompt('Enter username?');
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
    // var username = prompt('Login here');
    // var username = $('input[name="login"]').val();
    var content = $('.enter-msg').val();
    var username = myChat.getUsernameFromStorage();
    console.log(username);
    return {
      username: username,
      message: content
    }
  },

  // setInterval: function(myChat.addAllChatsToDom(), 1000 );,

  addAllChatsToDom: function(chatsArr) {
    // chatsArr.preventDefault();
    $('.post-msg-container').html('');
    // console.log("chats array: ", chatsArr);
    _.each(chatsArr, function(el) {
      var tmpl = _.template(templates.postChat);
      $('.post-msg-container').append(tmpl(el));
      // myChat.setInterval();
    });
  },

  //delete event
  deleteChatFromDom: function (event) {
      window.glob = $(this);
      var chatId = $(this).closest(".post-msg-wrapper").data('chatid');
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

  deleteChats: function deleteChats(chatId) {
      console.log('http://tiny-tiny.herokuapp.com/collections/jankchat1' + '/' + chatId);
      $.ajax({
        url: myChat.url + '/' + chatId,
        method: "DELETE",
        success: function (data) {
          console.log(data);
          myChat.getChats();
        }
      });
    }





  // userLoggedIn: function() {
  //   var user = data.username;
  // }

} // end of myChat
