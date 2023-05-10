// choose btn and input
let tip5Percent = document.querySelector(".tip-5");
let tip10Percent = document.querySelector(".tip-10");
let tip15Percent = document.querySelector(".tip-15");
let tip25Percent = document.querySelector(".tip-25");
let tip50Percent = document.querySelector(".tip-50");
let customPercent = document.querySelector(".custom-percent");
let billAmount = document.querySelector(".input1");
let AmountPeople = document.querySelector(".amount-people");
let resetBtn = document.querySelector(".reset");
// calculate result on fixed percentage
const calculateTipAndTotal = (percentage) => {
  if (billAmount.value == "" || AmountPeople.value == "" || AmountPeople.value == 0) {
    document.querySelector(".amount-tip").textContent = "$0.00";
    document.querySelector(".amount-total").textContent = "$0.00";
  } else {
    let tipAmount =
      ((billAmount.value / AmountPeople.value) * percentage) / 100;
    let total =
      Number(billAmount.value) + Number(tipAmount * AmountPeople.value);
    const integerValue = tipAmount.toFixed(2);
    const integerTotal = total.toFixed(2);
    document.querySelector(".amount-tip").textContent = "$" + integerValue;
    document.querySelector(".amount-total").textContent = "$" + integerTotal;
  }
};
tip5Percent.addEventListener("click", function () {
  calculateTipAndTotal(5);
});
tip10Percent.addEventListener("click", function () {
  calculateTipAndTotal(10);
});
tip15Percent.addEventListener("click", function () {
  calculateTipAndTotal(15);
});
tip25Percent.addEventListener("click", function () {
  calculateTipAndTotal(25);
});
tip50Percent.addEventListener("click", function () {
  calculateTipAndTotal(50);
});
// 
AmountPeople.addEventListener('input', function(){
  if (billAmount.value == "" || AmountPeople.value == "" || AmountPeople.value == 0 || customPercent.value == 0) {
    document.querySelector(".amount-tip").textContent = "$0.00";
    document.querySelector(".amount-total").textContent = "$0.00";
  } else {
    let tipAmount =
      ((billAmount.value / AmountPeople.value) * customPercent.value) / 100;
    let total =
      Number(billAmount.value) + Number(tipAmount * AmountPeople.value);
    const integerValue = tipAmount.toFixed(2);
    const integerTotal = total.toFixed(2);
    document.querySelector(".amount-tip").textContent = "$" + integerValue;
    document.querySelector(".amount-total").textContent = "$" + integerTotal;
  }
})
// 
// custom percentage
console.log(customPercent.value);
const customPercentCalculate = () => {
  if (customPercent.value < 0 || customPercent.value > 100){
    customPercent.value = 0
  }
  if (billAmount.value == "" || AmountPeople.value == "" || AmountPeople.value == 0) {
    document.querySelector(".amount-tip").textContent = "$0.00";
    document.querySelector(".amount-total").textContent = "$0.00";
  } else {
    let tipAmount =
      ((billAmount.value / AmountPeople.value) * customPercent.value) / 100;
    let total =
      Number(billAmount.value) + Number(tipAmount * AmountPeople.value);
    const integerValue = tipAmount.toFixed(2);
    const integerTotal = total.toFixed(2);
    document.querySelector(".amount-tip").textContent = "$" + integerValue;
    document.querySelector(".amount-total").textContent = "$" + integerTotal;
  }
};
customPercent.addEventListener("input", customPercentCalculate);
customPercent.addEventListener("keyup", customPercentCalculate);

// reset button
resetBtn.addEventListener("click", function () {
  document.querySelector(".amount-tip").textContent = "$0.00";
  document.querySelector(".amount-total").textContent = "$0.00";
  billAmount.textContent = "";
  billAmount.value = "";
  AmountPeople.textContent = "";
  AmountPeople.value = "";
  customPercent.textContent = "";
  customPercent.value = "";
  

});
// error checking
AmountPeople.addEventListener('input', function(){
  if(AmountPeople.value === '0'){
    AmountPeople.classList.add('error')
    document.querySelector('.validation').classList.remove("none")
  }else{
    AmountPeople.classList.remove('error')
    document.querySelector('.validation').classList.add("none")
  }
})

