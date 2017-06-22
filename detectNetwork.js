// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  var prefix = cardNumber.substring(0,2);
  var cardLength = cardNumber.length;

  //Switch
  //Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  //Switch shares prefix of '4' and length 16 and 19 with Visa
  var fourDigitPrefix = cardNumber.substring(0,4);
  if(fourDigitPrefix === '4903' || fourDigitPrefix === '4905' || fourDigitPrefix === '4911' || fourDigitPrefix === '4936'){
    if(cardLength === 16 || cardLength === 18 || cardLength === 19){
      return 'Switch';
    }
  }//end if
  var sixDigitPrefix = cardNumber.substring(0,6);
  if(sixDigitPrefix === '564182' || sixDigitPrefix === '633110' || fourDigitPrefix === '6333' || fourDigitPrefix === '6759'){
    if(cardLength === 16 || cardLength === 18 || cardLength === 19){
      return 'Switch';
    }
  }
  //Diner's Club
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  if (prefix === '38' || prefix === '39' && cardLength === 14){
  	  return 'Diner\'s Club';
  }
  //American Express
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  if (prefix === '34' || prefix === '37' && cardLength === 15) {
      return 'American Express';
  }
  //Visa
  //Visa always has a prefix of 4 and a length of 13, 16, or 19.
  if (cardNumber.substring(0,1) === '4') {
      if(cardLength === 13 || cardLength === 16 || cardLength === 19){
        return 'Visa';
  	  }
  }
  //MasterCard
  //MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  if ((prefix == '51' || prefix == '52' || prefix === '53' || prefix === '54' || prefix === '55') && cardLength === 16 ) {
      	return 'MasterCard';
  }
  //Discover
  //Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  if (cardNumber.substring(0,4) === '6011' || parseInt(cardNumber.substring(0,3)) >= 644 && parseInt(cardNumber.substring(0,3)) <= 649 || cardNumber.substring(0,2) === '65'){
  	  if ( cardLength === 16 || cardLength === 19){
  	  	return 'Discover';
  	  }
  }
  //Maestro
  //Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  if (cardNumber.substring(0,4) === '5018' || cardNumber.substring(0,4) === '5020' || cardNumber.substring(0,4) === '5038' || cardNumber.substring(0,4) === '6304') {
    if (cardLength >= 12 && cardLength <= 19){
  	  	return 'Maestro';
  	  }
  }
  //China UnionPay
  //China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  for (var i = 622126; i <= 622925; i++){
    for( var x = 16; x <= 19; x++){
      if(cardNumber.substring(0,6) === i.toString() && cardLength === x){
        return 'China UnionPay';
      }//end if
    }//end for
  }// end for
  for (var i = 624; i <= 626; i++){
    for(var x = 16; x <= 19; x++){
      if(cardNumber.substring(0,3) === i.toString() && cardLength === x){
        return 'China UnionPay';
      }//end if
    }
  }//end for
  for (var i = 6282; i <= 6288; i++){
    for( var x = 16; x <= 19; x++){
      if(cardNumber.substring(0,4) === i.toString() && cardLength === x){
        return 'China UnionPay';
      }//end if
    }//end for
  }// end for

  return 'Unable to determine';
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};


