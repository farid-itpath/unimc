import {useEffect} from 'react';
import {Linking, Platform} from 'react-native';
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
  const navigationWithDelay = async () => {
    const url = await Linking.getInitialURL();
    if (url) {
      const parts = url.split('/');
      const uniqueId = parts[parts.length - 1];
      if (uniqueId) {
        navigation.reset({
          index: 1,
          routes: [
            {name: SCREENS.BOTTOMTAB.name},
            {name: SCREENS.EVENTDETAILS.name, params: {eventId: uniqueId}},
          ],
        });
      } else {
        navigation.reset({
          index: 0,
          routes: [{name: SCREENS.BOTTOMTAB.name}],
        });
      }
    } else {
      navigation.reset({
        index: 0,
        routes: [{name: SCREENS.BOTTOMTAB.name}],
      });
    }
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      navigationWithDelay();
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
