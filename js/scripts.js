$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();

    $("#userinfo").show();
  });
});
