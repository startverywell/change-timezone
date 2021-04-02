const allElements = document.body.querySelectorAll('td');

const checks = '2021-01-01 00:00:00 PDT';

for (let index = 0; index < allElements.length; index++) {
  if (allElements[index].innerHTML == checks) {
    allElements[index].insertAdjacentHTML(
      'afterend',
      `<div class="success">✅</div>`
    );
  } else {
    allElements[index].insertAdjacentHTML(
      'afterend',
      `<div class="failed">❌</div>`
    );
  }
}
