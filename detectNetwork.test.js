// You can also use should instead of expect, which changes the style
// slightly. It really doesn't matter which one you use - check out 
// http://chaijs.com/guide/styles/ for more info, but it's important
// to be consistent (unlike in this file, where we use BOTH expect
// and should, but that's just for learning), so once you've gotten 
// these tests to pass using should syntax, refactor your tests to 
// use either expect or should, but not both. 
var should = chai.should();

/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
 /*
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });


  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
*/

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    //throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    //RAB changed detectNetwork to 14 digits was 13 digits. Added a '2' on the end
    if (detectNetwork('39345678901232') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(result) {
    if(result === false) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });
});

describe('Visa', function() {
  it('has a prefix of 4 and a length of 13', function() {
    detectNetwork('4123456789012').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4123456789012345').should.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4123456789012345678').should.equal('Visa');
  });
});

describe('MasterCard', function() {
 
  it('has a prefix of 51 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  it('has a prefix of 65 and a length of 16', function (){
    detectNetwork('6512345678912121').should.equal('Discover');
  });
  it('has a prefix of 65 and a length of 19', function (){
    detectNetwork('6512345678912121123').should.equal('Discover');
  });
  it('has a prefix of 6011 and a length of 16', function () {
    detectNetwork('6011123456789101').should.equal('Discover');
  });
  
  it('has a prefix of 6011 and a length of 19', function () {
    detectNetwork('6011123456789101123').should.equal('Discover');
  });
  it('has a prefix of 644 - 649 and a length of 16', function () {
    var dPrefix = ['644', '645', '646', '647', '648', '649'];
    for (var i = 0; i < dPrefix.length; i++) {
      detectNetwork(dPrefix[i] + '1234567891123').should.equal('Discover');
    }//end for
  });
  it('has a prefix of 644 - 649 and a length of 19', function () {
    var dPrefix = ['644', '645', '646', '647', '648', '649'];
    for (var i = 0; i < dPrefix.length; i++) {
      detectNetwork(dPrefix[i] + '1234567891123123').should.equal('Discover');
    }//end for
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var mPrefix = ['5018', '5020', '5038', '6304'];
  mPrefix.forEach( function (prefix) {
    it('has a prefix of ' + prefix + ' and a length of 12 - 19', function () {
      var testNum = prefix + '123456789101213';
      for(var i = 12; i <= 19; i++){
          detectNetwork(testNum.substring(0,i)).should.equal('Maestro');
      }//end 2nd for
    });
  });//end forEach
});

describe('China UnionPay', function (){
  it('has a prefix of 622126-622925 and a length of 16 - 19', function (){
    //13 digit string for use as cPrefix + card number
    var testNum = '1234567891011';
    for(var cPrefix = 622126; cPrefix <= 622925; cPrefix++){
      //cPrefix + 10 === 16 and cPrefix + 13 === 19
      for(var x = 10; x <= 13; x++){
        detectNetwork(cPrefix.toString() + testNum.substring(0,x)).should.equal('China UnionPay');
      }//end for
    }//end for
  });//end it
  it('has a prefix of 624 - 626 and a length of 16 - 19', function () {
    //16 digit string for use as cPrefix + card number 
    var testNum = '1234567891123123';
    for(var cPrefix = 624; cPrefix <= 626; cPrefix++){
      //cPrefix + 13 === 16 and cPrefix + 16 === 19
      for (var x = 13; x <= 16; x++){
        detectNetwork(cPrefix.toString() + testNum.substring(0,x)).should.equal('China UnionPay');
      }//end for
    }//end for
  });//end it
  it('has a prefix of 6282 - 6288 and a length of 16 - 19', function () {
    //15 digit string for use as cPrefix + card number 
    var testNum = '123456789112312';
    for(var cPrefix = 6282; cPrefix <= 6288; cPrefix++){
      //cPrefix + 12 === 16 and cPrefix + 15 === 19
      for (var x = 12; x <= 15; x++){
        detectNetwork(cPrefix.toString() + testNum.substring(0,x)).should.equal('China UnionPay');
      }//end for
    }//end for
  });//end it
});
//Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
describe('Switch', function (){
  it('has a prefix of 4903 and a length of 16, 18, or 19', function () {
    var testNum = '934567891012121';
    for(var i = 12; i <= 15; i++){
      if(i == 13) continue; 
      console.log('4903' + testNum.substring(0,i));
      detectNetwork('4903' + testNum.substring(0,i)).should.equal('Switch');
    }
  });
  it('has a prefix of 4905 and a length of 16, 18, or 19', function () {
    var testNum = '934567891012121';
    for(var i = 12; i <= 15; i++){
      if(i == 13) continue; 
      detectNetwork('4905' + testNum.substring(0,i)).should.equal('Switch');
    }
  });
  it('has a prefix of 4911 and a length of 16, 18, or 19', function () {
    var testNum = '934567891012121';
    for(var i = 12; i <= 15; i++){
      if(i == 13) continue; 
      detectNetwork('4911' + testNum.substring(0,i)).should.equal('Switch');
    }
  });
  it('has a prefix of 4936 and a length of 16, 18, or 19', function () {
    var testNum = '934567891012121';
    for(var i = 12; i <= 15; i++){
      if(i == 13) continue; 
      detectNetwork('4936' + testNum.substring(0,i)).should.equal('Switch');
    }
  });
  it('has a prefix of 6333 and a length of 16, 18, or 19', function () {
    var testNum = '934567891012121';
    for(var i = 12; i <= 15; i++){
      if(i == 13) continue; 
      detectNetwork('6333' + testNum.substring(0,i)).should.equal('Switch');
    }
  });
  it('has a prefix of 6759 and a length of 16, 18, or 19', function () {
    var testNum = '934567891012121';
    for(var i = 12; i <= 15; i++){
      if(i == 13) continue; 
      detectNetwork('6759' + testNum.substring(0,i)).should.equal('Switch');
    }
  });
  it('has a prefix of 564182 and a length of 16, 18, or 19', function () {
    var testNum = '934567891012121';
    for(var i = 10; i <= 13; i++){
      if(i == 11) continue; 
      detectNetwork('564182' + testNum.substring(0,i)).should.equal('Switch');
    }
  });
  it('has a prefix of 633110 and a length of 16, 18, or 19', function () {
    var testNum = '934567891012121';
    for(var i = 10; i <= 13; i++){
      if(i == 11) continue; 
      detectNetwork('633110' + testNum.substring(0,i)).should.equal('Switch');
    }
  });
});
