const o = {
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
const query = document.querySelector.bind(document);
const table = query('table');

for (let index = 0; index < o['original-values'].length; index++) {
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  td.innerHTML = o['original-values'][index];
  tr.appendChild(td);
  table.appendChild(tr);
}
