//soma dia (10) + mes (1O) + ano (1+9+9+9)

export const calculateLifeLesson = date => {
  const bornDate = new Date(Date.parse(date));

  const dayMonth = `${bornDate.getDay() + 1}/${bornDate.getMonth() + 1}`;
  const year = `${bornDate.getFullYear()}`;

  let diaMes1 = dayMonth.split('/');
  for (var i = 0; i < diaMes1.length; i++) {
    diaMes1[i] = +diaMes1[i];
  }

  var dm1 = 0;
  for (var i = 0; i < diaMes1.length; i++) {
    dm1 += diaMes1[i];
  }

  var diaMes2 = String(dm1).split('');
  for (var i = 0; i < diaMes2.length; i++) {
    diaMes2[i] = +diaMes2[i];
  }

  var dm2 = 0;
  for (var i = 0; i < diaMes2.length; i++) {
    dm2 += diaMes2[i];
  }

  var diaMes3 = String(dm2).split('');
  for (var i = 0; i < diaMes3.length; i++) {
    diaMes3[i] = +diaMes3[i];
  }

  var dm3 = 0;
  for (var i = 0; i < diaMes3.length; i++) {
    dm3 += diaMes3[i];
  }

  //Ano
  let ano1 = year.split('');
  for (var i = 0; i < ano1.length; i++) {
    ano1[i] = +ano1[i];
  }

  var a1 = 0;
  for (var i = 0; i < ano1.length; i++) {
    a1 += ano1[i];
  }

  var ano2 = String(a1).split('');
  for (var i = 0; i < ano2.length; i++) {
    ano2[i] = +ano2[i];
  }

  var a2 = 0;
  for (var i = 0; i < ano2.length; i++) {
    a2 += ano2[i];
  }

  var ano3 = String(a2).split('');
  for (var i = 0; i < ano3.length; i++) {
    ano3[i] = +ano3[i];
  }

  var a3 = 0;
  for (var i = 0; i < ano3.length; i++) {
    a3 += ano3[i];
  }

  //dia/mes/ano

  var dma = a3 + dm3;

  var dma1 = String(dma).split('');

  for (var i = 0; i < dma1.length; i++) {
    dma1[i] = +dma1[i];
  }

  var aa1 = 0;
  for (var i = 0; i < dma1.length; i++) {
    aa1 += dma1[i];
  }

  var dma2 = String(aa1).split('');

  for (var i = 0; i < dma2.length; i++) {
    dma2[i] = +dma2[i];
  }

  var aa2 = 0;
  for (var i = 0; i < dma2.length; i++) {
    aa2 += dma2[i];
  }

  var dma3 = String(aa2).split('');

  for (var i = 0; i < dma3.length; i++) {
    dma3[i] = +dma3[i];
  }

  var aa3 = 0;
  for (var i = 0; i < dma3.length; i++) {
    aa3 += dma3[i];
  }

  return aa3;
};
