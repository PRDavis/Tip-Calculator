

function myFunction() {
  var billTotal = document.getElementById("billTotal").value;
  var tipPercent=  document.getElementById("tipPercent").value;
  tipPercent=(tipPercent*.01);
  var splitNumber = document.getElementById("splitNum").value;

  var amount=billTotal;

  //do you need to round up ?

     if(((splitNumber*1 >1) && (amount%splitNumber)!==0)){
       amount=(amount/splitNumber)+.01;
     };
  console.log("here is the amount before currency function : ", amount);
  amount=toCurrency(amount);
console.log("here is the amount after currency function : ", amount);

  var tipOutAmount=amount*tipPercent;

  tipOutAmount=toCurrency(tipOutAmount);
  console.log("here is the tip after currency function : ", tipOutAmount);
  var totalWithTip=amount*1+tipOutAmount*1;
  totalWithTip=toCurrency(totalWithTip);
  console.log("here is the total with tip : ", amount,"+",tipOutAmount,"=",totalWithTip);
  document.getElementById("amount").innerHTML="$"+amount;
  document.getElementById("tipOutAmount").innerHTML="$"+tipOutAmount;
  document.getElementById("totalWithTip").innerHTML="$"+totalWithTip;

return ;
}

function toCurrency(raw){
  raw=(parseInt(raw*100))/100;
  raw=raw.toFixed(2)
  return raw;
  }
// TODO - change the rounding formula to get rid of erroneous uprounding
// TODO - finish the responsive work with bootstrap
// TODO - upload to gh pages and test on mobile devices

// <input type="number" id="billTotal"
//
// <input type="number" id="tipPercent"
//
// <select id="splitNum">
//
// <output id="amount">
//
// <output id="tipOutAmount">
