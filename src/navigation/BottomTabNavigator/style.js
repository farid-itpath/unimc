import {StyleSheet} from 'react-native';
import {FONTS} from '../../assets';
import {heightScale} from '../../utils/helper';

export const styles = StyleSheet.create({
  tabBarStyle: {
    height: heightScale(16),
  },
  tabIcon: {
    height: 25,
    width: 25,
  },
  tabBarLabelStyle: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(60),
  },
});
