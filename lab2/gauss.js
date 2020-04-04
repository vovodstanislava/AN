const main = () => {
  let i, j, k, l, m, n = 5;
  let a = [
  [
    26, 1, 3, 3, -1, 202
  ]
,
  [
    1, 27, 2, 2, 3, 155
  ]
,
  [
    3, 2, 28, -2, -1, 95
  ]
,
  [
    3, 2, -2, 29, 3, 178
  ]
,
  [
    -1, 3, -1, 3, 30, 257
  ]
];
  let A = [];

  let x = [];
  let sum = 0, det = 1, aux;

  console.log("Proiectul numarul doi;\nTema: Reolvarea sistemelor de ecuatii algebrice liniare;\nElaborat de Spataru Denis");
  console.log("Sistemul initial: ");
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++)
      console.log(a[i][j]);
    console.log("\n", a[i][n]);
  }
  //Etapa 1
  for (l = 0; l < n; l++) {
    if (a[l][l] == 0) {
      let m = l + 1;
      while ((a[m][l] == 0) && (m < n))
        m++;
      if (m >= n) {
        console.log("det = 0.");
        return 0;
      }
      for (j = 0; j <= n; j++) {
        aux = a[l][j];
        a[l][j] = a[m][j];
        a[m][j] = aux;
      }

    }

    for (i = 0; i < n; i++)
      if (i != l)
        for (j = l + 1; j <= n; j++) {
          a[i][j] = a[i][j] - a[i][l] * a[l][j] / a[l][l];
        }
    for (i = l + 1; i < n; i++)
      a[i][l] = 0;
    for (i = 0; i < l; i++)
      a[i][l] = 0;
    console.log("Sistemul la pasul ", l + 1);
    for (i = 0; i < n; i++) {
      for (j = 0; j < n; j++)
        console.log(a[i][j]);
      console.log("\n", a[i][n]);
    }
  }
  //Etapa 2
  for (i = 0; i < n; i++) {
    x[i] = a[i][n] / a[i][i];
  }
  console.log("Solutia este:  ");
  for (i = 0; i < n; i++)
    console.log(x[i]);

  //Verificarea
  console.log("\nVerificare: AX-B = 0? ");
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++)
      A[i][j] = a[i][j];

    A[i][n] = a[i][n];
    if (a[l][l] == 0) {
      let m = l + 1;
      while ((a[m][l] == 0) && (m < n))
        m++;
      if (m >= n) {
        console.log("det = 0.");
        return 0;
      }
      for (j = 0; j <= n; j++) {
        aux = a[l][j];
        a[l][j] = a[m][j];
        a[m][j] = aux;
      }

    }

    for (i = l + 1; i < n; i++)
      for (j = l + 1; j <= n; j++) {
        a[i][j] = a[i][j] - a[i][l] * a[l][j] / a[l][l];
      }
    for (i = l + 1; i < n; i++)
      a[i][l] = 0;
    console.log("Sistemul la pasul ", l + 1);
    for (i = 0; i < n; i++) {
      for (j = 0; j < n; j++)
        console.log(a[i][j]);
      console.log("\n", a[i][n]);
    }
  }
  //Etapa 2
  x[n - 1] = a[n - 1][n] / a[n - 1][n - 1];
  for (i = n - 2; i >= 0; i--) {
    sum = 0;
    for (j = i + 1; j < n; j++)
      sum = sum + a[i][j] * x[j];
    x[i] = (a[i][n] - sum) / a[i][i];
  }
  console.log("Solutia este:  ");
  for (i = 0; i < n; i++)
    console.log(x[i]);

  //Verificarea
  console.log("\nVerificare: AX-B = 0? ");
  for (i = 0; i < n; i++) {
  }
  for (i = 0; i < n; i++) {
    sum = -A[i][n];
    for (j = 0; j < n; j++)
      sum = sum + A[i][j] * x[j];
    console.log(sum);
  }

  return 0;
}
main();