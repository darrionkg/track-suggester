$(document).ready(function() {
  $("#surveyForm").submit(function(event) {
    var answer1 = $("input:radio[name=environment]:checked").val();
    var answer2 = $("input:radio[name=frontBackEnd]:checked").val();
    var answer3 = $("input:radio[name=problemSolving]:checked").val();
    var answer4 = $("webMobile").val();
    var answer5 = $("language").val();
    console.log(answer1);
    event.preventDefault();
    //if(".question1" === "")
  });
});
