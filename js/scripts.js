$(document).ready(function() {
  $("#").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    console.log(person1Input);

    $("#text").show();
  });
});