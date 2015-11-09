$(document).ready(function () {
  $.ajax({
    type: 'GET',
    url: "https://turing-birdie.herokuapp.com/api/v1/posts.json",
    success: function(post) {
      $('#latest-posts').append(
        "<div class='post'><h6>Published on some date</h6><p></p></div>"
      )
    }
  });
});
