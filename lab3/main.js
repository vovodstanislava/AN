const nm = 10;

const g = x => {
  return x * Math.exp(Math.sin(x));
};

const main = () => {
  console.log("Proiect Nr 3 !\n");
  let i;
  let j;
  let n = 8;
  let k;
  const l = 10;
  let aleg;
  // let x[nm] = {-5, -3, -1, 1, 3, 5, 7, 9};
  // let y[nm] = {150, 260, 66, 48, 687, 6300, 28890, 91976};
  // let z[nm] = {2, -6, -4, -2, 0, -8, 4, 6, 8, 4.55};
  const x = [1];
  const y = [...new Array(nm)];
  const z = [1.1, 1.7, 2.5, 1.01, 1.05, 1.15, 1.19, 2, 2.6, 2.8];
  const df = [...new Array(nm)];
  const cerc = [...new Array(nm)];
  let t;
  let h = 0.2;
  let pn;
  let q;
  let delta;
  do {
    console.log("\n Functia este data in mod discret ............. 1");
    console.log("\n Este cunoscuta expresia functiei ............. 2");
    console.log("\n Finisarea lucrului cu programul .............. 0");
    console.log("\n \t Alegeti (de la a la c) -> ");
    aleg = 1;

    switch (aleg) {
      case 1:
        console.log("\nIntroduceti numarul de noduri -> ");
        n = 6;
        /* console.log("\nIntroduceti nodurile ");
        for(i=0; i<n; i++) {
            console.log("\n x[%d] = ",i);	scanf("%lf",&x[i]);
        } */
        /* console.log("\nIntroduceti valorile functiei in noduri -> ");
        for(i=0; i<n; i++) {
            console.log("\n f(%lf) =",x[i]);	scanf("%lf",&df[i]);
        } */
        /* console.log("\nIntroduceti numarul de puncte -> "); scanf("%d",&k);
        for(j=0; j<k; j++) {
            console.log("\nIntroduceti punctul %d -> ",j+1);	scanf("%lf",&z[j]);
        } */
        h = x[1] - x[0];
        console.log("Baza leterpolarii \n ");
        console.log("\n | %5c %5c %6c %6c\n ", "X", "|", "F", "|");
        for (i = 0; i < n; i++) {
          console.log("\n | %7.2lf | %13.8lf |", x[i], y[i])
        }
        ;
        console.log("\n ");
        // Alcatuim tabeluldiferentelor finite
        cerc[0] = y[0];
        for (j = 1; j < n; j++) {
          for (i = 0; i < n - j; i++) {
            y[i] = y[i + 1] - y[i]
          }
          cerc[j] = y[n - i];
        }
        console.log("\n\n Diferentele finite necesare leterpolarii Newton 1\n ");
        for (i = 0; i < n; i++) {
          console.log(" %8.2lf", cerc[i])
        }
        ;

        console.log("\n\n Tabelul leterpolarii Newton 1\n ");
        console.log("\n | %5c %5c %6s %6c\n ", "Z", "|", "Pn", "|");
        for (k = 0; k < l; k++) {
          t = (z[k] - x[0]) / h;
          pn = cerc[0];
          q = 1;
          for (i = 1; i < n; i++) {
            q = (q * (t - i + 1)) / i;
            pn = pn + q * cerc[i];
          }
          console.log("\n | %7.2lf | %13.4lf |", z[k], pn);
        }
        console.log("\n ");
        break;
      case 2:
        console.log("\nIntroduceti numarul de noduri -> ");
        n = 65;
        console.log("\n Introduceti primul nod si pasul ");
        x[0] = 1;
        h = 2;

        for (i = 1; i < n; i++) {
          x[i] = x[i - 1] + h
        }
        for (i = 0; i < n; i++) {
          y[i] = g(x[i])
        }
        /* console.log("\nIntroduceti numarul de puncte -> "); scanf("%d",&k);
        for(j=0; j<k; j++) {
            console.log("\nIntroduceti punctul %d -> ",j+1);	scanf("%lf",&z[j]);
        } */
        console.log("Baza leterpolarii \n ");
        console.log("\n | %5c %5c %6c %6c\n ", "X", "|", "F", "|");
        for (i = 0; i < n; i++) {
          console.log("\n | %7.2lf | %13.6lf |", x[i], y[i])
        }
        console.log("\n ");
        // Alcatuim tabeluldiferentelor finite
        cerc[0] = y[0];
        for (j = 1; j < n; j++) {
          for (i = 0; i < n - j; i++) {
            y[i] = y[i + 1] - y[i]
          }
          cerc[j] = y[0];
        }
        console.log("\n\n Diferentele finite necesare leterpolarii Newton 1\n ");
        for (i = 0; i < n; i++) {
          console.log(" %8.2lf", cerc[i])
        }

        console.log("\n\n Tabelul leterpolarii Newton 1\n ");
        console.log(
          "\n | %5c %5c %6s %6c %6c %6c %6c %6c\n ",
          "Z",
          "|",
          "Pn",
          "|",
          "G",
          "|",
          "D",
          "|"
        );
        for (k = 0; k < l; k++) {
          t = (z[k] - x[0]) / h;
          pn = cerc[0];
          q = 1;
          for (i = 1; i < n; i++) {
            q = (q * (t - i + 1)) / i;
            pn = pn + q * cerc[i];
          }
          delta = Math.abs(pn - g(z[k]));
          console.log("\n | %7.3lf | %13.8lf | %13.8lf | %13.4le |", z[k], pn, g(z[k]), delta);
        }
        console.log("\n ");
        break;
    }
  } while (aleg !== 0);
};

main();
