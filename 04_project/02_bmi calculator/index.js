const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();

  const weight = parseInt(document.querySelector('#weight').value);
  const height = parseInt(document.querySelector('#height').value);
  const result = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;

    // if (bmi<19) {
    // result.innerHTML = `<span>you are underweight</span>`;
    // }
    // else if(bmi>25){
    // result.innerHTML = `<span>you are overweight</span>`;

    // }
    // else{
    // result.innerHTML = `<span>you are fit</span>`;

    // }
  }
});
