export const calculateAppearance = name => {
  const resultadoAparencia = name.toLowerCase().replace(/ /g, '').split('');

  const con = {
    b: '2',
    c: '3',
    d: '4',
    f: '6',
    g: '7',
    h: '8',
    j: '1',
    k: '2',
    l: '3',
    m: '4',
    n: '5',
    p: '7',
    q: '8',
    r: '9',
    s: '1',
    t: '2',
    v: '4',
    w: '5',
    x: '6',
    y: '7',
    z: '8',
  };

  let sum1 = resultadoAparencia.map(letra => con[letra] || 0);
  for (var i = 0; i < sum1.length; i++) {
    sum1[i] = +sum1[i];
  }

  var cons1 = 0;
  for (var i = 0; i < sum1.length; i++) {
    cons1 += sum1[i];
  }

  var sum2 = String(cons1).split('');
  for (var i = 0; i < sum2.length; i++) {
    sum2[i] = +sum2[i];
  }

  var cons2 = 0;
  for (var i = 0; i < sum2.length; i++) {
    cons2 += sum2[i];
  }

  var sum3 = String(cons2).split('');
  for (var i = 0; i < sum3.length; i++) {
    sum3[i] = +sum3[i];
  }

  var cons3 = 0;
  for (var i = 0; i < sum3.length; i++) {
    cons3 += sum3[i];
  }

  return cons3;
};
