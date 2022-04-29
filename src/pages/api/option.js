export default async (req, res) => {
  const value = req.query.type;
  const number = req.query.number;

  let numbers = number.split(',');

  let json = require(`../../data/${value}.json`);

  let numberMix = '';
  numbers.map(item => {
    numberMix = `${numberMix} <hr> ${json[item]}`;
  });

  console.log(numbers);

  res.status(200).json({ description: numberMix });
};
