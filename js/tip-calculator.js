function theCheck(){


  // this is the data model for the check


  this.total =ko.observable("27.58");
  this.tipPercent = ko.observable("20");
  this.split = ko.observable("1");
  this.amount = ko.computed(function(){
    var unformattedAmount = this.total() / this.split();
    var formattedAmount = (Math.floor(unformattedAmount * 100)/100).toFixed(2);
    var numericFormattedAmount = Number(formattedAmount);
    if (numericFormattedAmount * Number(this.split()) < Number(this.total())){
      numericFormattedAmount = (numericFormattedAmount + 0.01).toFixed(2);
      formattedAmount = numericFormattedAmount;
    }
    return formattedAmount;
  }, this);
  this.tipAmount = ko.computed(function(){
    var unformattedTipAmount = this.amount() * this.tipPercent() * 0.01;
    unformattedTipAmount = (Math.round(unformattedTipAmount*100))/100;
    return (Math.floor(unformattedTipAmount * 100)/100).toFixed(2);
  }, this);
  this.totalWithTip = ko.computed(function(){
    return (Number(this.amount()) + Number(this.tipAmount())).toFixed(2);
  }, this);
  $('#billTotal').focus(function() { $(this).select(); });
}
ko.applyBindings(theCheck());
