var buttonColor=["red", "blue","green","yellow"];

var gamePattern=[];

var userSelectedPattern=[];

var level =0;
var isStarted=false;

$(document).keypress(function(){
    if(!isStarted){
        $("#level-title").text("level"+level);
        isStarted=true;
        level++;
        nextSequence();
    }
})


$(".btn").on("click",function(){
    var userChosenColour=$(this).attr("id");
    userSelectedPattern.push(userChosenColour);
    console.log(userSelectedPattern);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userSelectedPattern.length-1);
})

function nextSequence(){
    userSelectedPattern=[];
    $("#level-title").text("level  "+level);
    level++;
    

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
    

function startOver(){
    isStarted=false;
    level=0;
    gamePattern=[];
}
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userSelectedPattern[currentLevel]){
        console.log("SUCCESS");

        if(gamePattern.length===userSelectedPattern.length){
            setTimeout(function(){
                nextSequence();
            },1000)
        }
    }else{
        console.log("Wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");},100);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}
