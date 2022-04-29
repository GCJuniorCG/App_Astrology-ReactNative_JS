//soma vogais

//const name = require('./index');
// let alma = 'Gilberto Camargo Junior';

export const calculateSoul = name => {
  const resultadoAlma = name.toLowerCase().replace(/ /g, '').split('');

  const vog = {
    a: '1',
    e: '5',
    i: '9',
    o: '6',
    u: '3',
  };

  let sum1 = resultadoAlma.map(letra => vog[letra] || 0);
  for (var i = 0; i < sum1.length; i++) {
    sum1[i] = +sum1[i];
  }

  var vog1 = 0;
  for (var i = 0; i < sum1.length; i++) {
    vog1 += sum1[i];
  }

  var sum2 = String(vog1).split('');
  for (var i = 0; i < sum2.length; i++) {
    sum2[i] = +sum2[i];
  }

  var vog2 = 0;
  for (var i = 0; i < sum2.length; i++) {
    vog2 += sum2[i];
  }

  var sum3 = String(vog2).split('');
  for (var i = 0; i < sum3.length; i++) {
    sum3[i] = +sum3[i];
  }

  var vog3 = 0;
  for (var i = 0; i < sum3.length; i++) {
    vog3 += sum3[i];
  }

  return vog3;
};
