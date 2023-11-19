function convertToBinary() {
  let decimal = document.getElementById("decimal").value;
  let binary = '';
  let isNegative = false;

  if (decimal < 0) {
      isNegative = true;
      decimal = -decimal;
  }

  while (decimal > 0) {
      binary = Math.trunc(decimal % 2) + binary;
      decimal = Math.trunc(decimal / 2);
  }

  if (isNegative) {
      binary = '-' + binary;
  }

  if(binary!='') {
    document.getElementById("result").textContent = 'Le nombre binaire est: ' + binary;
  }
}

