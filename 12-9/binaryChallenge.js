var i = 0;
var carry = 0;
var newNumber = [];
var s1 = '101';
var s2 = '1010';

// for (i = 0; i < s1.length; i++) {
while(i < s1.length && i < s2.length) {
  if (carry) {
    if (parseInt(s1[s1.length - i - 1]) && parseInt(s2[s2.length - i - 1])) {
      carry = 1;
      newNumber.unshift(1)
    } else if (parseInt(s1[s1.length - i - 1]) || parseInt(s2[s2.length - i - 1])) {
      carry = 1; 
      newNumber.unshift(0);
    } else {
      carry = 0;
      newNumber.unshift(1);
    }
  } else {
    if (parseInt(s1[s1.length - i - 1]) && parseInt(s2[s2.length - i - 1])) {
      carry = 1;
      newNumber.unshift(0);
    } else if ( parseInt(s1[s1.length - i - 1]) || parseInt(s2[s2.length - i - 1]) ){
      newNumber.unshift(1);
      carry = 0;
    } else {
      carry = 0;
      newNumber.unshift(0);
    }
  }
  i++;
}
if (i === s1.length) {
  for (i = i; i < s2.length; i++) {
    if (carry) {
      if (s2[s2.length - i - 1]){
        newNumber.unshift(0);
        carry = 1;
      } else {        
        newNumber.unshift();
        carry = 0;
      }
    } else {
      newNumber.unshift(s2[s2.length - i - 1]);
    }
  }
  if (carry) {
    newNumber.unshift(carry);
    carry = 0;
  }
} else {
  for (i = i; i < s1.length; i++) {
    if (carry) {
      if (s1[s1.length - i - 1]){
        newNumber.unshift(0);
        carry = 1;
      } else {
        newNumber.unshift(1);
        carry = 0;
      }
    } else {
      newNumber.unshift(s1[s1.length - i - 1]);
    }
  }
  if (carry) {
    newNumber.unshift(carry);
    carry = 0;
  }
}

console.log(newNumber.join(''));