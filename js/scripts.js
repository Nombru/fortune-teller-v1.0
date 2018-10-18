//business logic starts
var resultsArray = [];
var total = 0;
function addResults(num) {
  for (var i = 0; i < num.length; i++) {
    total += num[i];
  };
};

//business logic ends


//ui logic starts
$(document).ready(function(){
  $(".click").click(function(){
    $("#quiz").show();
    $(".click").hide();
  });

  $("#start").click(function(){
    $("#quiz").hide();
    $("input:checkbox[name=lucky]:checked").each(function(){
      var luckyHappenings = parseFloat($(this).val());
      resultsArray.push(luckyHappenings);
    });
    $("input:checkbox[name=unlucky]:checked").each(function(){
      var unluckyHappenings = parseFloat($(this).val());
      resultsArray.push(unluckyHappenings);
    });
    addResults(resultsArray);
    console.log(total);


    if  (total === 0) {
      $("#answer").append(
        '<h4>Your Fortune Is...</h4>' +
        '<h3>This is the calm before the storm</h3>');
        $("#results").show();
      } else if (total > 3) {
        $("#answer").append(
          '<h4>Your Fortune Is...</h4>' +
          '<h3>Go buy lottery ticket and ask out Rihanna because you\'re fire.</h3>');
          $("#results").show();
      } else if (total <= 3 && total > 0) {
        $("#answer").append(
          '<h4>Your Fortune Is...</h4>' +
          '<h3>Go ask Rihanna out but don’t expect any response. <br> Luckily you will also notice your shoe is untied and not trip AT ALL.</h3>');
          $("#results").show();
      } else if (total < 0 && total > -4) {
        $("#answer").append(
          '<h4>Your Fortune Is...</h4>' +
          '<h3>Keep an eye out for your shoe laces getting untied. You’ll probably forget, and trip a little.</h3>');
          $("#results").show();
      } else if (total < -3) {
        $("#answer").append(
          '<h4>Your Fortune Is...</h4>' +
          '<h3>Just give up, I’m sorry. <br>Try again next week after binge-watching Brooklyn 99 for some levity.</h3>');
          $("#results").show();
      } else {
        alert("Pick some answers, you dangoose!");
        $("#quiz").show();
      };
  });

  $("#restart").click(function(){
    event.preventDefault();
    $("#answer").remove();
  console.log("Hi!");
    $("#results").remove();
    empty(total);
    $("#quiz").show();
  });
});
//ui logic ends

// ––––This code is attempting to display a message if the user didn't select anything –––––––––


// // if {
// //   $("#quiz:checkbox:checked").prop(false);
// //   alert("Pick some answers, you dangoose!");
// //   $("#quiz").show();
// } else if {
