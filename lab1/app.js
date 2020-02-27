class Expression {
  constructor(eps) {
    this.eps = eps;
    this.res = [];
  }

  f(x) {
    return Math.pow(x, 3) + 2 * Math.pow(x, 2) - 23 * x - 46
  };

  fi(x) {
    let stasea;
    if (x > -3 && x < 3) {
      return (Math.pow(x, 3) + 2 * x * x - 46) / 23
    } else {
      stasea = Math.pow(Math.abs(23 * x + 46 - 2 * x * x), 1 / 3)
    }
    return (x > 0) ? stasea : -stasea;
  };

  fp(x) {
    return 3 * x * x + 4 * x - 23
  };

  getResult(a, b, h) {
    const res = [];
    for (let x = a; x < b; x += h) {
      if (this.f(x) * this.f(x + h) < 0) {
        res.push({
          x: x + h,
          x0: x,
          fx: this.f(x)
        })
      }
    }
    return res
  }

  bisection(a, b) {
    const res = {};
    let k = 0, x;
    do {
      k++;
      x = (+a + +b) / 2;
      if (this.f(x) === 0) {
        res.k = k;
        res.x = x;
        break
      }
      if (this.f(a) * this.f(x) < 0) b = x;
      else a = x

    }
    while (Math.abs(this.f(x)) > this.eps);
    res.k = k;
    res.x = x;
    return res
  }

  iteratie(a, b) {
    const res = {};
    let x0, x, delta;
    let k = 0;
    x0 = a;
    do {
      k++;
      x = this.fi(x0);
      res.k = k;
      res.x = x;
      if (Math.abs(this.f(x)) < this.eps) return res;
      delta = Math.abs(x - x0);
      x0 = x;
    } while (delta > this.eps);
    res.k = k;
    res.x = x;
    return res;
  }

  tangentei(a, b) {
    const res = {};
    let x0, x, delta, k = 0;
    x0 = (+a + +b) / 2;
    do {
      k++;
      x = x0 - this.f(x0) / this.fp(x0);

      if (this.f(x) === 0) {
        res.k = k;
        res.x = x;
        break
      }
      delta = Math.abs(x - x0);
      x0 = x
    }
    while (delta > this.eps);
    res.k = k;
    res.x = x;
    return res
  }

  newton(a, b) {
    const res = {};
    let x0, x, delta, k = 0;
    x0 = (+a + +b) / 2;
    let fp0 = this.fp(x0);
    do {
      k++;
      x = x0 - this.f(x0) / fp0;

      if (this.f(x) === 0) {
        res.k = k;
        res.x = x;
        break
      }
      delta = Math.abs(x - x0);
      x0 = x
    }
    while (delta > this.eps);
    res.k = k;
    res.x = x;
    return res
  }

  secantelor(a, b,) {
    const res = {};
    let x0, x, x1, delta, k = 1;
    x0 = a;
    x1 = b;
    do {
      k++;
      x = x1 - this.f(x1) * (x1 - x0) / (this.f(x1) - this.f(x0));
      res.k = k;
      res.x = x;
      if (Math.abs(this.f(x)) < this.eps) {
        return res;
      }
      delta = Math.abs(x - x1);
      x0 = x1;
      x1 = x;
    } while (delta > this.eps);
    res.k = k;
    res.x = x;
    return res;
  }


  coardelor(a, b) {
    const res = {};
    let x0, x, x1, delta, f0;
    let k = 1;
    x0 = b;
    x1 = a;
    f0 = this.f(x0);
    do {
      k++;
      x = x1 - this.f(x1) * (x1 - x0) / (this.f(x1) - f0);
      res.k = k;
      res.x = x;
      if (Math.abs(this.f(x)) < this.eps) {
        return res;
      }
      delta = Math.abs(x - x1);
      x1 = x;
    } while (delta > this.eps);
    res.k = k;
    res.x = x;
    return res;
  }

  mixta(a, b,) {
    const res = {};
    let x0, x, x1, delta, k = 1;
    x0 = (+a + +b) / 2;
    x1 = x0 - this.f(x0) / this.fp(x0);
    do {
      k++;
      x = x1 - this.f(x1) * (x1 - x0) / (this.f(x1) - this.f(x0));
      res.k = k;
      res.x = x;
      if (Math.abs(this.f(x)) < this.eps) {
        return res;
      }
      delta = Math.abs(x - x1);
      x0 = x1;
      x1 = x;
    } while (delta > this.eps);
    res.k = k;
    res.x = x;
    return res;
  }

  sectiuneAur(a, b) {
    const res = {};
    let x_stang, x_drept, SA, k = 0, a1 = +a, b1 = +b;
    SA = (Math.sqrt(5) - 1) / 2;
    x_stang = b1 - (b1 - a1) * SA;
    x_drept = a1 + (b1 - a1) * SA;
    do {
      if (Math.abs(this.f(x_stang)) < Math.abs(this.f(x_drept))) {
        b1 = x_drept;
        x_drept = x_stang;
        x_stang = b1 - (b1 - a1) * SA;
      }
      if (Math.abs(this.f(x_stang)) > Math.abs(this.f(x_drept))) {
        a1 = x_stang;
        x_stang = x_drept;
        x_drept = a1 + (b1 - a1) * SA;
      }
      k++;
    } while (Math.abs(b1 - a1) > this.eps);
    res.k = k;
    res.x = (a1 + b1) / 2;
    return res;
  }


  getMethod() {
    const r = this.getResult(-6, 6, 0.101);
    for (let i = 0; i < r.length; i++) {
      const result = this.bisection(r[i].x0, r[i].x);
      const result1 = this.tangentei(r[i].x0, r[i].x);
      const result2 = this.newton(r[i].x0, r[i].x);
      const result3 = this.secantelor(r[i].x0, r[i].x);
      const result4 = this.coardelor(r[i].x0, r[i].x);
      const result5 = this.mixta(r[i].x0, r[i].x);
      const result6 = this.sectiuneAur(r[i].x0, r[i].x);
      const result7 = this.iteratie(r[i].x0, r[i].x);


      this.res.push({
          Method: "Bisectia",
          x: result.x.toFixed(12),
          k: result.k,
          fx: this.f(result.x).toExponential(3)
        },
        {
          Method: "Tangentei",
          x: result1.x.toFixed(12),
          k: result1.k,
          fx: this.f(result1.x).toExponential(3)
        },
        {
          Method: "Newton",
          x: result2.x.toFixed(12),
          k: result2.k,
          fx: this.f(result2.x).toExponential(3)
        },
        {
          Method: "Secantelor",
          x: result3.x.toFixed(12),
          k: result3.k,
          fx: this.f(result3.x).toExponential(3)
        },
        {
          Method: "Coardelor",
          x: result4.x.toFixed(12),
          k: result4.k,
          fx: this.f(result4.x).toExponential(3)
        },
        {
          Method: "Mixta",
          x: result5.x.toFixed(12),
          k: result5.k,
          fx: this.f(result5.x).toExponential(3)
        },
        {
          Method: "SectiuneAur",
          x: result6.x.toFixed(12),
          k: result6.k,
          fx: this.f(result6.x).toExponential(3)
        },
        {
          Method: "Iteratiilor",
          x: result7.x.toFixed(12),
          k: result7.k,
          fx: this.f(result7.x).toExponential(3)
        }
      )

    }
    return this.res
  }
}

const expr = new Expression(1e-12);
const table = document.getElementById('table');
const results = expr.getResult(-6, 6, 0.101);
const table2 = document.getElementById('table2');
const method = expr.getMethod();

table.innerHTML = ` ${
  results.map(item => `
    <tr>
        <td>${item.x0.toFixed(2)}</td>
        <td>${item.x.toFixed(2)}</td>
    </tr>
`).join('')
}`;
table2.innerHTML = `${
  method.map(item => `
    <tr>
        <td>${item.Method}</td>
        <td>${item.x}</td>
        <td>${item.k}</td>
        <td>${item.fx}</td>
    </tr>
`).join('')
}`;
