const allElements = document.body.querySelectorAll('td');

const checks = ['2021-01-01 19:00:00 AEDT', '2021-01-01 19:00:00 AEDT'];

for (let index = 0; index < allElements.length; index++) {
  if (allElements[index].innerHTML == checks[index]) {
    allElements[index].insertAdjacentHTML('afterend', `<div class="success">✅</div>`);
  } else {
    allElements[index].insertAdjacentHTML('afterend', `<div class="failed">❌</div>`);
  }
}
