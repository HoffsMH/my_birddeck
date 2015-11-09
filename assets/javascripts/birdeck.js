$(document).ready(function () {

  var fetch_post =  function () {$.ajax({
    type: 'GET',
    url: "https://turing-birdie.herokuapp.com/api/v1/posts.json",
    success: function(posts) {
      $('#latest-posts').html('')
      $.each(posts, function(index, post) {
        $('#latest-posts').append(
          "<div class='post' data-id='"+post.id+"''><h6>Published on "+ post.created_at+" </h6><p> "+post.description+" </p></div>"
        )
      })
    }
  });}
  $('button[name=button-fetch]').on('click',  function () {
    fetch_post();
  })
  fetch_post();

  $('#create-post').on('click',  function () {
    var postDescription = $('#post-description').val()
    var postParams  = { post: {description: postDescription}}
    $.ajax({
      type: 'POST',
      url: "https://turing-birdie.herokuapp.com/api/v1/posts.json",
      data: postParams,
      success: function(posts) {
        fetch_post();
        $('#post-description').val('')

      }
    });
  })
});
