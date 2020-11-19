
let index =0 ;
let attempt=0;
let score=0;
let wrong=0;
let questions = quiz.sort(function(){
    return 0.5 - Math.random();
});


let totalQuestion = questions.length;

 $ (function () {

    //timer code start ------------------

    let totalTime= 200;
    let min= 0;
    let sec= 0;
    let counter= 0;

    let timer= setInterval(function () {
        counter++;
        min = Math.floor((totalTime - counter) / 60);  // calculating minutes
        sec = totalTime - (min * 60) - counter;    


        $(".timerBox span").text(min +":"+ sec);

        if(counter==totalTime){

            alert("Time is up. press OK to show the score.");
            result();
            clearInterval(timer);
        }

    }, 1000); // timer set for 1 sec interval 



    //timer end here --------------------

    //print questions

    printQuestion(index);

});


    //function print question start ----------------
    
    function printQuestion(i) {
    $(".questionBox").text (questions[i].question);
    $(".optionBox span").eq(0).text(questions[i].option[0]);
    $(".optionBox span").eq(1).text(questions[i].option[1]);
    $(".optionBox span").eq(2).text(questions[i].option[2]);
    $(".optionBox span").eq(3).text(questions[i].option[3]);    
}


    //function end here -------------------------------------




    //function to check the answers if correct ------------------
    function checkAnswer(option) {
    attempt++;

    let optionClicked = $(option).data("opt");
    
    //console.log(questions[index]);

    if (optionClicked == questions[index].answer) {
        $(option).addClass("right");
        score++;
    }
    else {
        $(option).addClass("wrong");
        wrong++;
    }

    $ (".scoreBox span").text(score);

    $(".optionBox span").attr("onclick","");
    
}



    //end of function to check the answers if correct ------------------



    // function on Nextquestion ---------------------------------------

function showNext() {

    if(index>=questions.length - 1) {
        showResult(0);
        return;
    }
    index++;

    $(".optionBox span").removeClass();

    $(".optionBox span").attr("onclick","checkAnswer(this)");

    printQuestion(index);
}
    // end of function on nextquestion

    // function of result start -----------------------------------------
function showResult(k) {

    if (k==1&&
        index < questions.length -1 && 
        !confirm ("Quiz Whizzer has not finished yet. Press OK to skip quiz & get your final score."))
         {
            return;
        }
   result();
}


    //end of function of result -----------------------------------------


    //Result function start ---------------------------------------------


    function result() {
        $("#questionScreen").hide();
        $("#resultScreen").show();
        $("#totalQuestion").text(totalQuestion);
        $("#attemptQuestion").text(attempt);
        $("#correctAnswers").text(score);
        $("#WrongAnswer").text(wrong);
        
    }
    // End of result function ----------------------------------------