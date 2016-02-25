
postChat: [
  '<div class="post-msg-container">',
    // <!-- add date of message? day and time -->
    '<h3><%= username %></h3>',
    '<div class="post-msg-wrapper">',
      '<p class="post-msg">',
        '<%= postedMessage %></p>',
    '</div>',
  '</div>'
].join[];
