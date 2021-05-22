function sendquestion(){
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;

    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = '<h4>' + number1 + 'X' + number2 + '</h4>';

    input_box = "<br>Answer : <input type='text' id='input_check_box'>";

    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}

question_turn = "math1_username"
answer_turn = "math2_username"

function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer){
        if(answer_turn == "math1_username"){
            update_math1_score = player1_score+1;
            document.getElementById("math1_score").innerHTML = update_math1_score;
        }
        else{
            update_math2_score = math2_score+1;
            document.getElementById("math2_score").innerHTML = update_math2_score;
        }
    }

    if(question_turn == "math1_username"){
        question_turn = "math2_username"
        document.getElementById("math_question").innerHTML = "Question Turn: "+math2_username;
    }
    else{
        question_turn = "math1_username"
        document.getElementById("math_question").innerHTML = "Question Turn: "+math1_username;
    }
}