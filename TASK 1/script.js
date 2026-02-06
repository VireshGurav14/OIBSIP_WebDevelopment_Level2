let expression = "";

function press(num){
  expression += num;
  document.getElementById("result").innerText = expression;
}

function clearAll(){
  expression = "";
  document.getElementById("result").innerText = "0";
}

function erase(){
  expression = expression.slice(0, -1);
  document.getElementById("result").innerText = expression || "0";
}

function calculate(){
  if(expression === "") return;

  try{
    expression = eval(expression).toString();
  }catch{
    expression = "Error";
  }

  document.getElementById("result").innerText = expression;
}
