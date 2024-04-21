const pass = document.querySelector('#pass');
const passConf = document.querySelector('#passconf');
const passRules = document.querySelector('#pass-rules');
const passMatch = document.querySelector('#pass-match');
const btn = document.querySelector('#submit');

passConf.addEventListener("input", () => {
  if (passConf.value !== pass.value) {
    btn.setAttribute('disabled', '');
    passMatch.style.color = 'red';
    passMatch.style.fontWeight = '600';
    return passMatch.textContent = 'Passwords not matching'
  } 
  else {
    btn.removeAttribute('disabled');
    passMatch.style.color = 'white';
    return passMatch.textContent = 'Passwords match';
  };
});


// `Password must have:
//   - One uppercase character
//   - One lowercase character
//   - One number or special character
//   - Minimum eight characters`;