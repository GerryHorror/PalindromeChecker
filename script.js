function isPalindrome(str) {
  const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
  const reverseStr = cleanStr.split('').reverse().join('');
  return cleanStr === reverseStr;
}

document.getElementById('check-btn').addEventListener('click', function() {
  const textInput = document.getElementById('text-input').value;
  const resultDiv = document.getElementById('result');

  if (!textInput) {
    alert('Please input a value');
  } else {
    const message = textInput + (isPalindrome(textInput) ? ' is' : ' is not') + ' a palindrome';
    resultDiv.textContent = message;
  }
});
