const table = document.getElementById('table')
const table1 = document.getElementById('table1')
const table2 = document.getElementById('table2')
const table3 = document.getElementById('table3')
const diff = document.getElementById('diff')
const diff2 = document.getElementById('diff2')

const main = () => {
  let i, j, n = 10, k, l = 10;
  let x = [-10, -8, -6, -4, -2, 0, 2, 4, 6, 8];
  let y = [-1351235, -431515, -98083, -11819, -259, 5, 925, 20597, 140861, 564901];
  let z = [-9, -7, -5, -3, 1, 3, 5, 7, 8, 9];
  let cerc = [], t, h, pn, q;

  h = x[1] - x[0];


  for (i = 0; i < n; i++) {
    table.innerHTML += `<tr><td>${x[i]}</td><td>${y[i].toFixed(2)}</td></tr>`
  }

  // Alcatuim tabelul diferentelor finite
  cerc[0] = y[n - 1];
  for (j = 1; j < n; j++) {
    for (i = 0; i < n - j; i++)
      y[i] = y[i + 1] - y[i];
    cerc[j] = y[n - j - 1];
  }

  for (i = 0; i < n; i++) {
    diff.innerHTML += `<div>${cerc[i].toFixed(2)}</div>`
  }


  for (k = 0; k < l; k++) {
    t = (z[k] - x[n - 1]) / h;
    pn = cerc[0];
    q = 1;
    for (i = 1; i < n; i++) {
      q = q * (t + i - 1) / i;
      pn = pn + q * cerc[i];
    }
    table1.innerHTML += `<tr><td>${z[k]}</td><td>${pn.toFixed(2)}</td></tr>`
  }
}


const g = (x) => {
  return (Math.sin(x) * Math.exp(x + 2))/(x + 1);
}

const main2 = () => {
  let i, j, n = 6, k, l = 6;
  let x = [0];
  let y = [];
  let z = [0.1, 0.3, 0.32, 0.4, 0.45, 0.51];
  let cerc = [], t, h = 0.2, pn, q, delta;

  for (i = 1; i < n; i++)
    x[i] = x[i - 1] + h;
  for (i = 0; i < n; i++)
    y[i] = g(x[i]);

  for (i = 0; i < n; i++)
    table2.innerHTML += `<tr><td>${x[i].toFixed(2)}</td><td>${y[i].toFixed(5)}</td></tr>`

  // Alcatuim tabeluldiferentelor finite
  cerc[0] = y[n - 1];
  for (j = 1; j < n; j++) {
    for (i = 0; i < n - j; i++)
      y[i] = y[i + 1] - y[i];
    cerc[j] = y[n - j - 1];
  }

  for (i = 0; i < n; i++)
    diff2.innerHTML += `<div>${cerc[i].toFixed(2)}</div>`

  for (k = 0; k < l; k++) {
    t = (z[k] - x[n - 1]) / h;
    pn = cerc[0];
    q = 1;
    for (i = 1; i < n; i++) {
      q = q * (t + i - 1) / i;
      pn = pn + q * cerc[i];
    }
    delta = Math.abs(pn - g(z[k]));
    table3.innerHTML += `
        <tr>
          <td>${z[k]}</td>
          <td>${pn.toFixed(5)}</td>
          <td>${g(z[k]).toFixed(5)}</td>
          <td>${delta}</td>
        </tr>
      `
  }
}


main()
main2()

