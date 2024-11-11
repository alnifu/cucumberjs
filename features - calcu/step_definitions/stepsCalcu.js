const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let num1, num2, sum;

Given('I have {int}', function (int) {
    num1 = int;
    //console.log('I have ' + num1)
});

When('I add {int}', function (int) {
    num2 = int;
   // console.log('I add ' + num2)
});

Then('I get the sum of <sum>', function () {
   sum = num1 + num2;
  // console.log('I get the sum of ' + sum)
});