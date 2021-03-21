const jan012020 = {
  'original-values': [
    '2021-01-01 00:00:00 UTC',

    '2021-01-01 00:00:00 AEDT',

    '2021-01-01 00:00:00 +12',

    '2021-01-01 00:00:00 -12',

    '2021-01-01 00:00:00 +1230',

    '2021-01-01 00:00:00 -1230',

    '2021-01-01 00:00:00',

    '2021-01-01 00:00 UTC',

    '2021-01-01 00:00 AEDT',

    '2021-01-01 00:00 +12',

    '2021-01-01 00:00 -12',

    '2021-01-01 00:00 +1230',

    '2021-01-01 00:00 -1230',

    '2021-01-01 00:00',

    '2021-01-01 00:00.123 UTC',

    '2021-01-01 00:00:00.123 UTC',
  ],
};

const data = [jan012020];
const query = document.querySelector.bind(document);
const table = query('table');

for (let indexOuter = 0; indexOuter < data.length; indexOuter++) {
  for (let index = 0; index < data[indexOuter]['original-values'].length; index++) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.innerHTML = jan012020['original-values'][index];
    tr.appendChild(td);
    table.appendChild(tr);
  }
}
