//business logic
var game = function(userInput){
var anything = [];
  for(var number=1; number<=userInput; number++){
   //console.log(number);

    if((number%3===0) && (number%5===0)){
      anything.push("pingpong");
    }
    else if (number%3===0){
      anything.push("ping");
    }
    else if (number%5===0){
      anything.push("pong");
    }
    else {
      anything.push(number);
    }
  }
  return anything;
}
//front-end logic
$(document).ready(function(){
  $("form#gameInput").submit(function(event){
    event.preventDefault();
    var userInput = [parseInt($("#numbers").val())];
console.log(userInput);
var outputs= game(userInput);
outputs.forEach(function(output){
    $(".gameOutput").append("<li>" + output + "</li>" );
});
  });
});
