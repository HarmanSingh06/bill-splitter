var slider = document.getElementById("range");
var output = document.getElementById("people");

output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = this.value;
  }

  function getInputVal(id){
    return document.getElementById(id).value;
  }
  document.getElementById("form").addEventListener("submit",calculate);

  function calculate(e){
    e.preventDefault();
    var numberOfPerson = getInputVal("range");
    var amount = getInputVal("amount") ;
    var splitBill = Math.floor((amount/numberOfPerson)*100)/100
    document.getElementById("output").innerHTML = splitBill;

  }
