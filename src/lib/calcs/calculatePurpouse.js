import { calculateSoul } from './calculateSoul';
import { calculateAppearance } from './calculateAppearance';

export const calculatePurpouse = name => {
  const propo = calculateSoul(name) + calculateAppearance(name);

  var sum = String(propo).split('');
  for (var i = 0; i < sum.length; i++) {
    sum[i] = +sum[i];
  }

  var conspropo = 0;
  for (var i = 0; i < sum.length; i++) {
    conspropo += sum[i];
  }

  return conspropo;
};
