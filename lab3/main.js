const table = document.getElementById('table')
const table1 = document.getElementById('table1')
const table2 = document.getElementById('table2')
const table3 = document.getElementById('table3')
const diff = document.getElementById('diff')
const diff2 = document.getElementById('diff2')
const nm = 10

const g = (x) => {
  return x * Math.exp(Math.sin(x));
}

const main = () => {
  let i, j, n = 7, k, l = 5;
  let x = [2, 2.2, 2.4, 2.6, 2.8, 3, 3.2];
  let y = [150, 206.34432, 283.03424, 384.82176, 517.11168, 686, 898.31232];
  let z = [2.08, 2.15, 2.3, 2.4, 2.8];
  let cerc = [], t, h, pn, q;

  h = x[1] - x[0];


  for (i = 0; i < n; i++) {
    table.innerHTML += `<tr><td>${x[i]}</td><td>${y[i].toFixed(2)}</td></tr>`
  }

  // Alcatuim tabelul diferentelor finite
  cerc[0] = y[0];
  for (j = 1; j < n; j++) {
    for (i = 0; i < n - j; i++)
      y[i] = y[i + 1] - y[i];
    cerc[j] = y[n - i];
  }

  for (i = 0; i < n; i++) {
    diff.innerHTML += `<div>${cerc[i].toFixed(2)}</div>`
  }


  for (k = 0; k < l; k++) {
    t = (z[k] - x[0]) / h;
    pn = cerc[0];
    q = 1;
    for (i = 1; i < n; i++) {
      q = q * (t - i + 1) / i;
      pn = pn + q * cerc[i];
    }
    table1.innerHTML += `<tr><td>${z[k]}</td><td>${pn.toFixed(2)}</td></tr>`
  }
}

const main2 = () => {
  let i, j, n = 7, k, l = 5;
  let x = [2];
  let y = [];
  let z = [2.08, 2.15, 2.3, 2.4, 2.8];
  let cerc = [], t, h = 0.2, pn, q, delta;

  for (i = 1; i < n; i++)
    x[i] = x[i - 1] + h;
  for (i = 0; i < n; i++)
    y[i] = g(x[i]);

  for (i = 0; i < n; i++)
    table2.innerHTML += `<tr><td>${x[i].toFixed(2)}</td><td>${y[i].toFixed(2)}</td></tr>`

  // Alcatuim tabeluldiferentelor finite
  cerc[0] = y[0];
  for (j = 1; j < n; j++) {
    for (i = 0; i < n - j; i++)
      y[i] = y[i + 1] - y[i];
    cerc[j] = y[n - i];
  }

  for (i = 0; i < n; i++)
    diff2.innerHTML += `<div>${cerc[i].toFixed(2)}</div>`

  for (k = 0; k < l; k++) {
    t = (z[k] - x[n-1]) / h;
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
          <td>${pn.toFixed(2)}</td>
          <td>${g(z[k]).toFixed(2)}</td>
          <td>${delta}</td>
        </tr>
      `
  }
}

main()
main2()

