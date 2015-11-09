$(document).ready(function () {
  $.ajax({
    type: 'GET',
    url: "https://turing-birdie.herokuapp.com/api/v1/posts.json",
    success: function() {
      console.log("success")
    }
  });
});
