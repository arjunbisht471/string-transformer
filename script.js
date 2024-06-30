let mainInput = document.getElementById("mainInput");
let upperCase = document.getElementById('upperCase');
let lowerCase = document.getElementById('lowerCase');
let Trim = document.getElementById('Trim');
mainInput.addEventListener("keyup",()=>{
upperCase.textContent = mainInput.value.toUpperCase();
lowerCase.textContent = mainInput.value.toLowerCase();
Trim.textContent = mainInput.value.trim();

let words = mainInput.value.split(/\s+/);
  let pascalCased = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');
  pascalCase.textContent = pascalCased;

  let snakeCased = mainInput.value.toLowerCase().replace(/\s+/g, '_');
  snakeCase.textContent = snakeCased;
});