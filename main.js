$(document).ready(function() {
  myChat.init();
});

// myChat main Object calling initStyling & initEvents
var myChat = {
  url: 'http://tiny-tiny.herokuapp.com/jankChatApp/chats',
  init: function() {
    myChat.initStyling();
    myChat.initEvents();
  },


  // initStyling
  initStyling: function() {
    myChat.addAllChats();
    myChat.getChats();
  },

  // initEvents
  initEvents: function() {
    $('form').on('submit', myChat.submitChat);
  },

submitChat: function(event) {
  event.preventDefault();
  var newChat = myChat.getChatFromDom();
  console.log(newChat);
  myChat.addChat(newChat);
  $('input').val('');
},

getChatFromDom: function() {
  var username = $('input[name="login"]').val();
  var content = $('.enter-msg').val();
  return {
    username: username,
    message: message
  }
},

addAllChatsToDom: function(chatsArr) {
  $('.post-msg-container').html('');
  _.each(chatsArr function(el) {
    var tmpl = _.templates(templates.postChat);
    $('.post-msg-container').append(tmpl(el));
  });
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


  deleteChats: function(idx)
    chats.splice(idx, 1);

  },
  // userLoggedIn: function() {
  //   var user = data.username;
  // }

} // end of myChat
