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

  $("button").click(function(){
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
      $("#results").append(
        '<h4>Your Fortune Is...</h4>' +
        '<h1>This is the calm before the storm</h1>');
    };

    $("#results").show();

  });
});
//ui logic ends
