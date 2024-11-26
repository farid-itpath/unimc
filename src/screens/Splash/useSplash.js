import {useEffect} from 'react';
import {Platform} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {PERMISSIONS, request} from 'react-native-permissions';
import {useSelector} from 'react-redux';
import i18n from 'i18next';
import {SCREENS} from '../../utils/constants';

export const useSplash = () => {
  const navigation = useNavigation();
  const opacity = useSharedValue(0);
  const {language} = useSelector(state => state.language);
  i18n.changeLanguage(language);
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
  useEffect(() => {
    requestLocationPermission();
  }, []);

  const requestLocationPermission = async () => {
    let permission;

    if (Platform.OS === 'ios') {
      permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
    } else {
      permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
    }

    await request(permission);
  };
  return {
    animatedLogo,
  };
};
