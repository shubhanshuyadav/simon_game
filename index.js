var buttonColor=["red", "blue","green","yellow"];

var gamePattern=[];

var userSelectedPattern=[];


$(".btn").on("click",function(){
    var userChosenColour=$(this).attr("id");
    userSelectedPattern.push(userChosenColour);
    console.log(userSelectedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
})

function nextSequence(){
    var randomNumber=Math.floor((Math.random()*4));
    console.log(randomNumber);
    var randomChosenColor=buttonColor[randomNumber];
    console.log(randomChosenColor);
    playSound(randomChosenColor);

    gamePattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    
}

function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){  $("#"+currentColour).removeClass("pressed"); }, 100);
    }


nextSequence();