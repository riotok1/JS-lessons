const keyValue = document.getElementById('keyValue');
const code = document.getElementById('code');
const codeHex = document.getElementById('codeHex');

document.body.onkeydown = function(evt) {
  keyValue.textContent = evt.key;
  code.textContent = evt.which;
  codeHex.textContent = evt.which.toString(16);  
};