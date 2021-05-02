$(document).ready(function() {
  $("form#name").submit(function(event) {
    event.preventDefault();

    $("#output").show();
  });
});
$(document).ready(function() {
  const over18 = confirm("Are you over 18?");

  if (over18) {
    $('#add').show();
  } else {
    $('#under-18').show();
  }
});