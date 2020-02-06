$(document).ready(function(){
    $("#quote").on("click", function(){
    $.ajax({
      url: "https://api.icndb.com/jokes/random/1?firstName=mr",
      method : "GET",
      success: function(result) {
      var joke = result['value'][0]['joke'];
      var author = result['value'][0]['categories'][0]
          $('.quote-text').html(joke);
          $('.cate').html(author);
        }
   });
  });


    $("button").addClass("animated shake");
     $("section").addClass("animated shake");
});
