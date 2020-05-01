const app = document.getElementById('gauss')

app.innerHTML += `<b>Metoda Gauss:</b>`

const main = () => {
    const n = 5;
    const a = [
        [30, 1, 2, 3, 1, 203],
        [1, 29, 1, 2, 3, 229],
        [2, 1, 28, 1, 2, 238],
        [3, 2, 1, 27, 1, 259],
        [1, 3, 2, 1, 26, 279]
    ];
    const x = [];
    let aux;
    let i;
    let j;
    let l;

    app.innerHTML += '<div>Sistemul initial</div>';

    printMatrix(a);

    for (l = 0; l < n; l++) {
        if (a[l][l] === 0) {
            let m = l + 1;
            while ((a[m][l] === 0) && (m < n)) {
                m++
            }
            if (m >= n) {
                console.log('det = 0.');
                return 0
            }
            for (j = 0; j <= n; j++) {
                aux = a[l][j];
                a[l][j] = a[m][j];
                a[m][j] = aux
            }
        }

        for (i = 0; i < n; i++) {
            if (i !== l) {
                for (j = l + 1; j <= n; j++) {
                    a[i][j] = a[i][j] - a[i][l] * a[l][j] / a[l][l]
                }
            }
        }
        for (i = l + 1; i < n; i++) {
            a[i][l] = 0
        }
        for (i = 0; i < l; i++) {
            a[i][l] = 0
        }
        app.innerHTML += `<div>Sistemul la pasul ${l + 1}</div>`;
        printMatrix(a)
    }

    for (i = 0; i < n; i++) {
        x[i] = a[i][n] / a[i][i]
    }

    app.innerHTML += `<div>Solutia este: <br><br></div>`;

    for (i = 0; i < n; i++) {
        app.innerHTML += `<div>Solutia nr ${i + 1}: ${x[i].toFixed(2)}</div>`
    }
};

const printMatrix = (array) => {
    app.innerHTML += `
    <div class="matrix">
      ${array.map(row => `<div>${row.map(item => `<div>${item.toFixed(2)}</div>`).join('')}</div>`).join('')}
    </div>
  `
};

main();
