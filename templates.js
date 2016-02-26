var templates = {
  enterChat: [
    '<div data-chatid="<%= _id %>" class="enter-msg-wrapper">',
      '<form>'
      '<input type="text" value="<%= message %>" class="enter-msg" placeholder="enter message">',
      '</form>',
    '</div>'
].join("");

postChat: [
    // <!-- add date of message? day and time -->
    '<h3><%= username %></h3>',
    '<div class="post-msg-wrapper">',
      '<p class="post-msg">',
        '<%= postedMessage %></p>',
    '</div>',
].join("");

} // end of templates
