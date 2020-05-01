const app1 = document.getElementById('seidel')

let main2 = () => {
    let a = [
        [30, 1, 2, 3, 1],
        [1, 29, 1, 2, 3],
        [2, 1, 28, 1, 2],
        [3, 2, 1, 27, 1],
        [1, 3, 2, 1, 26]
    ];
    let b = [203, 229, 238, 259, 279];
    let x = [0, 0, 0, 0, 0];
    let y = [];
    let n = 5, m = 5, i = 0, j = 0;

    app1.innerHTML += `<b>Metoda Seidel:</b>`

    while (m > 0) {
        app1.innerHTML += `<div style="margin-top: 10px">Iteratia la pasul: ${m}</div>`
        for (i = 0; i < n; i++) {
            y[i] = (b[i] / a[i][i]);
            for (j = 0; j < n; j++) {
                if (j === i)
                    continue;
                y[i] = y[i] - ((a[i][j] / a[i][i]) * x[j]);
                x[i] = y[i];
            }
            app1.innerHTML += `<div style="margin-top: 5px">Solutia nr ${i + 1}: ${y[i].toFixed(2)}</div>`
        }
        m--;
    }
}

main2()
