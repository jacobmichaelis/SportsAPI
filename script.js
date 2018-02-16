$(function(){
  $("#yodaSubmit").click(function(e) {
    e.preventDefault();

    var str = $("#yodaInput").val().replace(" ", "+");

    var yodaUrl = "https://yoda.p.mashape.com/yoda?sentence=" + str;
    $.ajax(function() {
      url: yodaUrl,
      X-Mashape-Key: "ctpYhtpDZvmshRldCNTlVt4l0JY5p12MwtFjsnplrj5I4BGO78",
      Accept: "text/plain"
    });
  });
});
