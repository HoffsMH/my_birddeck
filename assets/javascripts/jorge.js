$(document).ready(function(){
  fetchPosts()
  fetchPostsButton()
  createPost()
})

function fetchPostsButton() {
  $('#button-fetch').on('click', function(){
    fetchPosts()
  })
}

function renderPost(post) {
  $('#latest-posts').append(
    "<div class='post' data-id='"
    + post.id
    + "'><h6>Published on "
    + post.created_at
    + "</h6><p>"
    + post.description
    + "</p></div>"
  )
}

function fetchPosts() {
  var newestItemID = parseInt($('.post').last().attr('data-id'))

  $.ajax({
    type: 'GET',
    url:  'https://turing-birdie.herokuapp.com/api/v1/posts.json',
    success: function(posts){
      $.each(posts, function(index, post){
        if (isNaN(newestItemID) || post.id > newestItemID) {
          renderPost(post)
        }
      })
    }
  })
}

function createPost() {
  $('#create-post').on('click', function(){
    var postDescription = $('#post-description').val()
    var postParams      = {
      post: {
        description: postDescription
      }
    }

    $('#post-description').val('')

    $.ajax({
      type:    'POST',
      url:     'https://turing-birdie.herokuapp.com/api/v1/posts.json',
      data:    postParams,
      success: function(post){
        fetchPosts()
      }
    })
  })
}
