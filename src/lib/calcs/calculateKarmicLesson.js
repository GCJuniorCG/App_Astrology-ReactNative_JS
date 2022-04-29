export const calculateKarmicLesson = name => {
  const resultadoCarma = name.toLowerCase().replace(/ /g, '').split('');

  const l = {
    a: '1',
    b: '2',
    c: '3',
    d: '4',
    e: '5',
    f: '6',
    g: '7',
    h: '8',
    i: '9',
    j: '1',
    k: '2',
    l: '3',
    m: '4',
    n: '5',
    o: '6',
    p: '7',
    q: '8',
    r: '9',
    s: '1',
    t: '2',
    u: '3',
    v: '4',
    w: '5',
    x: '6',
    y: '7',
    z: '8',
  };

  let sum1 = resultadoCarma.map(letra => l[letra] || 0);
  for (var i = 0; i < sum1.length; i++) {
    sum1[i] = +sum1[i];
  }

  const filteredSum1 = sum1.filter(function (elem, pos) {
    return sum1.indexOf(elem) == pos;
  });

  let sum2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  var lcarmica = sum2.filter(function (element) {
    if (sum1.indexOf(element) == -1) return element;
  });

  return lcarmica;
};
