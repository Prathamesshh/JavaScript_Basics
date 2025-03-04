const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.innerHTML = `Please enter a valid height.`;
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = `Please enter a valid weight.`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    if(bmi<18.6){
      results.innerHTML=`<span>Under weigth :${bmi}</span>`;
      }else if(bmi>18.6 && bmi<24.9){
          results.textContent=`Normal Weight:${bmi}`;
      }else{
          results.textContent=`Over Weight : ${bmi}`
      }
  }
});
