var templates = {
  enterChat: [
    '<div  class="enter-msg-wrapper">',
      '<form>',
      '<input type="text" value="" class="enter-msg" placeholder="enter message">',
      '<%= message %>',
      '</form>',
    '</div>'
].join(""),

postChat: [
    // <!-- add date of message? day and time -->
    '<div data-chatid="<%= _id %>" class="post-msg-wrapper">',
    '<h4><%= username %></h4>',
    '<span class="time">7:48pm</span>',
    '<button class ="delete-chat">Delete</button>',
      '<p class="post-msg">',
        '<%= message %></p>',
    '</div>',
].join("")

} // end of templates
