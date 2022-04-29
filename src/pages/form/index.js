// import { Input } from '@chakra-ui/react';

import {SafeAreaView, Button, TextInput} from 'react-native';
import {useState, useEffect} from 'react';
import {useLocalStorage} from '../../lib/useLocalStorage';
import {calculateAppearance} from '../../lib/calcs/calculateAppearance';
import {calculateSoul} from '../../lib/calcs/calculateSoul';
import {calculateKarmicLesson} from '../../lib/calcs/calculateKarmicLesson';
import {calculateLifeLesson} from '../../lib/calcs/calculateLifeLesson';
import {calculatePersonalYear} from '../../lib/calcs/calculatePersonalYear';
import {calculatePurpouse} from '../../lib/calcs/calculatePurpouse';
import {calculateQuintessence} from '../../lib/calcs/calculateQuintessence';

export default function Form() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [savedData, setSavedData] = useLocalStorage('app-astro', '{}');

  const handleClick = () => {
    const appearance = calculateAppearance(name);
    const soul = calculateSoul(name);
    const karmicLesson = calculateKarmicLesson(name);
    const lifeLesson = calculateLifeLesson(date);
    const personalYear = calculatePersonalYear(date);
    const purpouse = calculatePurpouse(name);
    const quintessence = calculateQuintessence(name, date);
    const data = {
      name,
      date,
      appearance,
      soul,
      karmicLesson,
      lifeLesson,
      personalYear,
      purpouse,
      quintessence,
    };
    setSavedData(data);

    window.location.href = '/';
  };

  const handleInputChange = event => {
    if (event.target.name === 'name') {
      setName(event.target.value);
    }
    if (event.target.name === 'date') {
      setDate(event.target.value);
    }
  };

  useEffect(() => {
    if (!setName || !setDate) {
      return;
    }
    console.log(savedData);

    setName(savedData.name);
    setDate(savedData.date);
  }, [savedData, setName, setDate]);

  return (
    <SafeAreaView>
      <TextInput name="name" value={name} onChange={handleInputChange} />{' '}
      <TextInput
        name="date"
        value={date}
        onChange={handleInputChange}
        type="date"
      />
      <Button onPress={handleClick}> Cadastrar </Button>
    </SafeAreaView>
  );
}
