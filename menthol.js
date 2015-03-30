var colors = require('colors');

var username = ''; // mint email goes here
var password = ''; // mint password goes here
var goalAmount = 5000; // how much money you'd like to have

console.log('counting your money...'.grey);

// pepper-mint uses promises
// https://github.com/kriskowal/q
require('pepper-mint')(username, password)
.then(function(mint) {
  return mint.getAccounts();
})
.then(function(accounts) {

  var balance = 0;

  // add up balances of objects in the accounts array     
  accounts.forEach(function(account) {
    // to inclde credit cards add || 'credit'
    if (account.klass == 'bank') {
      balance += account.value;    
    }       
  });

  var displayBal = '$' + balance;
  var displayPercent = goalPercent(goalAmount, balance) + '%';

  console.log("you have " + displayBal.green);
  console.log("that's " + displayPercent.yellow + " of your goal");
  console.log(congrats(balance).grey);
})
.fail(function(err) {
  console.error("aww rats! [>_<] can't access mint account!\n".red, err);
});


function goalPercent(goal, balance) {
  return Math.floor((balance / goal) * 100);
}

// congratulate the user on being a somethingaire
function congrats(dollars) {
  var congrats = 'congrats on being a ';
  if (dollars >= 1000000) {
    congrats += 'million';
  } else if (dollars >= 1000) {
    congrats += 'thousand';
  } else if (dollars >= 100) {
    congrats += 'hundred';
  } else {
    congrats += 'broken';
  }
  return congrats + 'aire!';
}