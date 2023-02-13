//BUSINESS LOGIC

function collectNumbers(number) {
  result = [];

  for (let i = number; i>0;i--) {
    result.push(i);
  };
  return result;
};




//UI LOGIC

window.addEventListener("load", function() {
  document.getElementById("button").addEventListener("click",handleFormSubmission);
}); 

function handleFormSubmission (event) {
  event.preventDefault();

  const number = document.getElementById("input").value;
  const countdownArray = collectNumbers(number);
  const output = document.createElement("p")
  const body = document.querySelector("body");
  const div = document.createElement("div");
  body.append(div);
  div.append(output);
  output.innerText = countdownArray;
  
  

}