import { calculatePurpouse } from './calculatePurpouse';
import { calculateLifeLesson } from './calculateLifeLesson';

export const calculateQuintessence = (name, date) => {
  const quint = calculatePurpouse(name) + calculateLifeLesson(date);

  var sum = String(quint).split('');
  for (var i = 0; i < sum.length; i++) {
    sum[i] = +sum[i];
  }

  var consquint = 0;
  for (var i = 0; i < sum.length; i++) {
    consquint += sum[i];
  }
  return consquint;
};
