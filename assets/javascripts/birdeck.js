$(document).ready(function () {
  $.ajax({
    type: 'GET',
    url: "https://turing-birdie.herokuapp.com/api/v1/posts.json",
    success: function(posts) {

      $.each(posts, function(index, post) {
        $('#latest-posts').append(
          "<div class='post' data-id='"+post.id+"''><h6>Published on "+ post.created_at+" </h6><p> "+post.description+" </p></div>"
        )
      })
    }
  });
  $('#create-post').on('click',  function () {
    var description = $('post-description').val
    $.ajax({
      type: 'POST',
      url: "https://turing-birdie.herokuapp.com/api/v1/posts.json",
      parameters: description
      success: function() { console.log('winter is coming') }
    });
  })
});
