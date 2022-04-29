import {useLocalStorage} from '../../lib/useLocalStorage';
import {View, Text, SafeAreaView, Linking} from 'react-native';
import {useEffect} from 'react';
//import {Link} from '@chakra-ui/react';
import {options} from '../../data/options';

export default function Main() {
  const [savedData, _] = useLocalStorage('app-astro', '{}');

  //se não tiver name ou date salvo no local storage retorna para o form,

  useEffect(() => {
    if (savedData.name === '' && savedData.date === '') {
      window.location.href = '/form';
    }
  }, [savedData]);

  const keys = Object.keys(options);
  //utilizamos o object.keys para criar um array (string) dos dados de options

  return (
    <SafeAreaView>
      <Text>Pagina Inicial</Text>
      {keys &&
        keys.map(key => {
          const element = options[key];
          const {title, url} = element;
          //percorremos o array criado utilizando a chave para localizar o elemento em options
          return (
            <View key={url}>
              <Linking href={`calculated/${url}`}>{title}</Linking>
              {/* encaminhamos para opcao clicada via link/href */}
            </View>
          );
        })}
    </SafeAreaView>
  );
}
