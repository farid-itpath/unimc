import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import {SCREENS} from '../../utils/constants';

export const useSplash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.navigate(SCREENS.BOTTOMTAB.name);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
};
