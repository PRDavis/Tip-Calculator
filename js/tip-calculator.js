var theCheck = {













function myFunction() {
  var billTotal = document.getElementById("billTotal").value;
  var tipPercent=  document.getElementById("tipPercent").value;
  tipPercent=(tipPercent / 100 );
  var splitNumber = document.getElementById("splitNum").value;
  var amount=billTotal;
  ////////////////////////////////////
  // @ TODO do you need to round up ?
  ////////////////////////////////////
  if((splitNumber * 1 > 1) && ((parseInt((amount/splitNumber)*100)*splitNumber) < amount)){
    amount=(amount/splitNumber)+ 0.01;
  }   else{
    amount=amount/splitNumber;
  }
  amount=toCurrency(amount);
  var tipOutAmount=amount*tipPercent;
  tipOutAmount=toCurrency(tipOutAmount);
  var totalWithTip=amount*1+tipOutAmount*1;
  totalWithTip=toCurrency(totalWithTip);
  document.getElementById("amount").innerHTML="$"+amount;
  document.getElementById("tipOutAmount").innerHTML="$"+tipOutAmount;
  document.getElementById("totalWithTip").innerHTML="$"+totalWithTip;
  return ;
}


function toCurrency(raw){
  raw=(parseInt(raw*100))/100;
  raw=raw.toFixed(2);
  return raw;
}
// @TODO refactor using knockoutjs for better view updates


// TODO - change the rounding formula to get rid of erroneous uprounding
// TODO - finish the responsive work with bootstrap
// TODO - upload to gh pages and test on mobile devices


};

$(ko.applyBindings(theCheck));
