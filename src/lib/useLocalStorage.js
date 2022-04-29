import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState();

  async function getStoredItem(key, initialValue) {
    try {
      // pega item do localstorage
      const item = await AsyncStorage.getItem(key);
      // parse item ou retorna initalValue
      const value = item ? JSON.parse(item) : initialValue;
      setStoredValue(value);
    } catch (error) {
      // deu merda. cospe o erro
      console.log(error);
    }
  }

  useEffect(() => {
    getStoredItem(key, initialValue);
  }, [key, initialValue]);

  const setValue = async value => {
    try {
      // salva o valor no state
      setStoredValue(value);
      // salva o valor no localstorage
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // deu merda. cospe o erro
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
