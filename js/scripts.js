$(document).ready(function() {
  $("#surveyForm").submit(function(event) {
    var answer1 = $("input:radio[name=environment]:checked").val();
    var answer2 = $("input:radio[name=frontBackEnd]:checked").val();
    var answer3 = $("input:radio[name=problemSolving]:checked").val();
    var answer4 = $("#webMobile").val();
    var answer5 = $("#language").val();
    // language points
    var ruby = 0
    var php = 0;
    var java = 0;
    var css = 0;
    var cSharp = 0;
    // Question 1
    if(answer1 === "startup") {
      ruby += 1;
      php += 1;
    } else if(answer1 === "small") {
      ruby += 1;
      css += 1;
      cSharp += 1;
      java += 1;
    } else if(answer1 === "large") {
      cSharp += 1;
      java += 1;
    } else {
      php += 1;
      css += 1;
    }
    //Question 2
    if(answer2 === "frontEnd") {
      css += 1;
    } else {
      ruby += 1;
      php += 1;
      java += 1;
      cSharp += 1;
    }
    //Question 3
    if(answer3 === "frontEnd") {
      css += 1;
    } else {
      ruby += 1;
      php += 1;
      java += 1;
      cSharp += 1;
    }

    console.log(answer1);
    console.log(answer2);
    console.log(answer3);
    console.log(answer4);
    console.log(answer5);
    event.preventDefault();

  });
});
