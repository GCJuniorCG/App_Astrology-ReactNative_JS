import {options} from '../../data/options';
import {View, Text, SafeAreaView, Linking} from 'react-native';

export default function Main() {
  const keys = Object.keys(options);

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
