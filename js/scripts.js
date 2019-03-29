$(document).ready(function() {
  $("#surveyForm").submit(function(event) {
    $(".rubyRails, .phpDrupal, .javaAndroid, .cssDesign, .cSharpNet").hide();

    var answer1 = $("input:radio[name=environment]:checked").val();
    var answer2 = $("input:radio[name=frontBackEnd]:checked").val();
    var answer3 = $("input:radio[name=problemSolving]:checked").val();
    var answer4 = $("#webMobile").val();
    var answer5 = $("#language").val();

    // language points
    var ruby = 0;
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
    } else if(answer1 === "selfEmployed") {
      php += 1;
      css += 1;
    }
    //Question 2
    if(answer2 === "frontEnd") {
      css += 1;
    } else if(answer === "backEnd") {
      ruby += 1;
      php += 1;
      java += 1;
      cSharp += 1;
    }
    //Question 3
    if(answer3 === "frontEnd") {
      css += 1;
    } else if(answer4 === "backEnd") {
      ruby += 1;
      php += 1;
      java += 1;
      cSharp += 1;
    }
    //Question 4
    if(answer4 === "web") {
      ruby += 1;
      php += 1;
      css += 1;
      cSharp += 1;
    } else if(answer4 === "mobile") {
      java += 1;
    }
    //Question 5
    if(answer5 === "ruby") {
      ruby += 2;
    } else if(answer5 === "php") {
      php += 2;
    } else if(answer5 === "java") {
      java += 2;
    } else if(answer5 === "css") {
      css += 2;
    } else if(answer5 === "cSharp") {
      cSharp += 2;
    }

    //Shows Results. If 2 values are equal, shows both.
    if(ruby >= php && ruby >= java && ruby >= css && ruby >= cSharp) {
      $(".rubyRails").show();
      if(ruby === php) {
        $(".phpDrupal").show();
      } else if(ruby === java) {
        $(".javaAndroid").show();
      } else if(ruby === css) {
        $(".cssDesign").show();
      } else if(ruby === cSharp) {
        $(".cSharpNet").show();
      }
    } else if(php >= ruby && php >= java && php >= css && php >= cSharp) {
      $(".phpDrupal").show();
      if(php === ruby) {
        $(".rubyRails").show();
      } else if(php === java) {
        $(".javaAndroid").show();
      } else if(php === css) {
        $(".cssDesign").show();
      } else if(php === cSharp) {
        $(".cSharpNet").show();
      }
    } else if(java >= ruby && java >= php && java >= css && java >= cSharp) {
      $(".javaAndroid").show();
      if(java === ruby) {
        $(".rubyRails").show();
      } else if(java === php) {
        $(".phpDrupal").show();
      } else if(java === css) {
        $(".cssDesign").show();
      } else if(java === cSharp) {
        $(".cSharpNet").show();
      }
    } else if(css >= ruby && css >= php && css >= java && css >= cSharp) {
      $(".cssDesign").show();
      if(css === ruby) {
        $(".rubyRails").show();
      } else if(css === php) {
        $(".phpDrupal").show();
      } else if(css === java) {
        $(".javaAndroid").show();
      } else if(css === cSharp) {
        $(".cSharpNet").show();
      }
    } else if(cSharp >= ruby && cSharp >= php && cSharp >= java && cSharp >= cSharp) {
      $(".cSharpNet").show();
      if(cSharp === ruby) {
        $(".rubyRails").show();
      } else if(cSharp === php) {
        $(".phpDrupal").show();
      } else if(cSharp === java) {
        $(".javaAndroid").show();
      } else if(cSharp === css) {
        $(".cssDesign").show();
      }
    } else {
      console.log("Unknown Error.")
      location.reload();
    }

    event.preventDefault();

  });
});
