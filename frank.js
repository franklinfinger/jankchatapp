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
    //setInterval will load chats ever 2 sec between users
    setInterval(myChat.getChats, 2000);

  },

  initEvents: function() {
    $('.enter-msg-form').on('submit', myChat.submitChat);
    $('.post-msg-container').on('click', '.delete-chat', myChat.deleteChatFromDom);
    $('.login-form').on('submit', myChat.getUsernameFromLogin);
    $('.login-form').on('submit', function() {
      event.preventDefault();
      myChat.getUsernameFromLogin();
      $('.login-form-container').hide();
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
      $('.post-msg-container').append(tmpl(el));
      // myChat.setInterval();
    });
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
} // end of myChat















// this is a comment
// $(document).ready(function() {
//   myChat.init();
//
// });


//setting the chats to show after 2 sec
// myChat main Object calling initStyling & initEvents
// var myChat = {
//   url: 'http://tiny-tiny.herokuapp.com/collections/jankchat1',
//   init: function() {
//     myChat.initStyling();
//     myChat.initEvents();
//   },


  // initStyling
  // initStyling: function() {
  //   // myChat.addAllChatsToDom();
  //   myChat.getChats();
  //   myChat.getUsernameFromLogin();
  //   //setInterval will load chats ever 2 sec between users
  //   setInterval(myChat.getChats, 2000);
  //
  // },

  // initEvents
  // initEvents: function() {
  //   $('form').on('submit', myChat.submitChat);
  //   $('.post-msg-container').on('click', '.delete-chat', myChat.deleteChatFromDom);
  // },

// set username
//  getUsernameFromLogin: function () {
//   var EnterUsername = prompt('Enter username');
//   localStorage.setItem('login', EnterUsername);
//   myChat.getUsernameFromStorage();
// },

//  getUsernameFromStorage: function() {
//   return localStorage.getItem('login');
// },

  // submitChat: function(event) {
  //   event.preventDefault();
  //   var newChat = myChat.getChatFromDom();
  //   console.log(newChat);
  //   myChat.addChats(newChat);
  //   $('input').val('');
  // },

  // getChatFromDom: function() {
  //   var content = $('.enter-msg').val();
  //   var username = myChat.getUsernameFromStorage();
  //   var time = moment(new Date()).format('LT');
  //   console.log(username);
  //   return {
  //     username: username,
  //     message: content,
  //     time: time
  //   }
  // },


  // addAllChatsToDom: function(chatsArr) {
    // chatsArr.preventDefault();
    // $('.post-msg-container').html('');
    // console.log("chats array: ", chatsArr);
    // _.each(chatsArr, function(el) {
    //   var tmpl = _.template(templates.postChat);
      //to get the chat to load in the bottom of the page use prepend
      // $('.post-msg-container').prepend(tmpl(el));
      // myChat.setInterval();
  //   });
  // },

  //delete event
  // deleteChatFromDom: function (event) {
  //     window.glob = $(this);
  //     var chatId = $(this).closest(".post-msg-wrapper").data('chatid');
  //     myChat.deleteChats(chatId);
  //     myChat.addAllChatsToDom();
  // },

  // getChats: function() {
  //   $.ajax({
  //     url: myChat.url,
  //     method: 'GET',
  //     success: function(chats) {
  //       console.log(chats);
  //       myChat.addAllChatsToDom(chats);
  //     },
  //     error: function(err) {
  //       console.log(err);
  //     }
  //   });
  // },
  //
  // addChats: function(newChat) {
  //   $.ajax({
  //     url: myChat.url,
  //     method: 'POST',
  //     data: newChat,
  //     success: function (response) {
  //       myChat.getChats();
  //     },
  //     error: function(err) {
  //       console.log("error, err");
  //     }
  //   });
  // },
  //
  // deleteChats: function deleteChats(chatId) {
  //     console.log('http://tiny-tiny.herokuapp.com/collections/jankchat1' + '/' + chatId);
  //     $.ajax({
  //       url: myChat.url + '/' + chatId,
  //       method: "DELETE",
  //       success: function (data) {
  //         console.log(data);
  //         myChat.getChats();
  //       }
  //     });
  //   }





  // userLoggedIn: function() {
  //   var user = data.username;
  // }

// } // end of myChat
