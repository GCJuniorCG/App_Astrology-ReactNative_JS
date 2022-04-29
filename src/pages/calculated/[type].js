//import { Link } from '@chakra-ui/layout';
import {View, Text, SafeAreaView, Linking} from 'react-native';
import {useRouter} from 'next/router';
import {useEffect, useState} from 'react';

import {options} from '../../data/options';
import {useLocalStorage} from '../../lib/useLocalStorage';

export default function Type() {
  const router = useRouter();
  const {type} = router.query;
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');
  const [value, setValue] = useState(0);

  const [savedData, _] = useLocalStorage('app-astro', '{}');

  useEffect(() => {
    if (savedData[type] === '') {
      return (window.location.href = '/form');
    }
    console.log({type});
    if (!type || !setDescription) {
      return;
    }
    setValue(savedData[type]);
    const keys = Object.keys(options);
    keys.map(key => {
      const element = options[key];
      const {title, url, file} = element;
      if (url === type) {
        setTitle(title);
        setFile(file);
      }
      //setamos os valores de title e url percorrendo (via object.keys) o options conforme informacao salva pelo type em savedData
    });
  }, [type, savedData, setDescription]);

  useEffect(() => {
    console.log(file, value);
    if (!file || !value) {
      return;
    }

    const getUrl = async () => {
      const fetched = await fetch(
        `/api/option?type=${[file]}&number=${[value]}`,
      );
      const result = await fetched.json();
      setDescription(result.description);
    };
    // utilizamos uma funcao async + fetch + api para manipular o html, desta forma especificamos exatamente o que queremos enviar para o cliente
    getUrl();
  }, [file, value]);

  return (
    <SafeAreaView>
      <Text> {title} </Text>
      <View> {description} </View> <Linking href="/main"> Voltar</Linking>
    </SafeAreaView>
  );
}
