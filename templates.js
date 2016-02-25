var templates = {
  enterChat: [
    '<div class="enter-msg-wrapper">',
      '<input type="text" value="" class="enter-msg" placeholder="enter message">',
    '</div>',
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
