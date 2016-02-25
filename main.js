$(document).ready(function() {
  myChat.init();
});

// myChat main Object calling initStyling & initEvents
var myChat = {
  url: 'http://tiny-tiny.herokuapp.com/collections/jankChatApp',
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

  // CRUD events
  getChats: function() {
    $.ajax({
      url: myChat.url,
      method: 'GET',
      success: function(chats) {
        console.log(chats);
        myChat.addAllChats(chats);
      },
      error: function(err) {
        console.log(err);
      }
    });

  },
  addChats: function(newChat) {
    $.ajax({
      url:
    });

    chats.push(newChat);
  },
  deleteChats: function(idx)
    chats.splice(idx, 1);
  },

} // end of myChat
