var player1;
var player2;
var number1 = 0;
var number2 = 0;
     player1 = localStorage.getItem("player_1_name");
     player2 = localStorage.getItem("player_2_name");
     document.getElementById("player1_name").innerHTML = player1 + " score; ";
     document.getElementById("player2_name").innerHTML = player2 + " score ";
     document.getElementById("player1_name_output").innerHTML = player1;
     document.getElementById("player2_name_output").innerHTML = player2;
     function send(){
          number1 = document.getElementById("number1").value;
          number2 = document.getElementById("number2").value;
          answer = parseInt(number1) * parseInt(number2);
          question_numbers = "<h4>" + number1 + "X" + number2 + "</h4>";
          inputbox = "<br>Answer: <input id='input_answer' placeholder='Enter your answer here'>";
          check_button = "<br><br><button type='button' class='btn btn-primary' onclick='check()'>Check</button>";
          row = question_numbers + inputbox + check_button;
          document.getElementById("output").innerHTML = row;
          document.getElementById("number1").value = "";
          document.getElementById("number2").value = "";
     }