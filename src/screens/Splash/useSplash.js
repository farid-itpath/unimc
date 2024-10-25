import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {SCREENS} from '../../utils/constants';

export const useSplash = () => {
  const navigation = useNavigation();
  const opacity = useSharedValue(0);
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: [{name: SCREENS.BOTTOMTAB.name}],
      });
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);
  const animatedLogo = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));
  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 2000,
    });
  }, []);
  return {
    animatedLogo,
  };
};
