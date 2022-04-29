import {useLocalStorage} from '../lib/useLocalStorage';
import {useEffect} from 'react';
import {View, Text} from 'react-native';

export default function Main() {
  const [savedData, _] = useLocalStorage('app-astro', '{}');

  useEffect(() => {
    if (savedData.name != '' && savedData.date != '') {
      window.location.href = '/main';
    } else {
      window.location.href = '/form';
    }
  }, [savedData]);

  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}
