function checkAnswer(answer){

  let result = document.getElementById("result");

  if(answer === "CSS"){
    result.innerHTML = "Correct Answer!";
    result.style.color = "green";
  }

  else{
    result.innerHTML = "Wrong Answer!";
    result.style.color = "red";
  }
}