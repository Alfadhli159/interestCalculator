function compute() {
  var A = document.getElementById("Amount").value;
  var R = document.getElementById("Rate").value;
  var Y = document.getElementById("Years").value;
  var Year = new Date().getFullYear()+parseInt(Y);
  var Rate = R / 100;

  var FV = (A * (1 + (Rate * Y))) - A ;

    if (A <= 0 || A === ""){
    alert(" Enter a positive number!");

    return false;

  

  }

  document.getElementById("result").innerHTML="If you deposit "+ A + ",\<br\>at an interest rate of "+ R +"%\<br\>You will receive an amount of "+ FV +",\<br\>in the year "+ Year +"\<br\>"


}

var output = document.getElementById("demo");
var selectValue = document.getElementById("Rate").oninput = function() {

  var value = (this.value - this.min) / (this.max - this.min) * 100
  output.innerHTML = this.value;
}
