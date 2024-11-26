import {StyleSheet} from 'react-native';
import {FONTS} from '../../assets';
import {heightScale, widthScale} from '../../utils/helper';
import {COLORS} from '../../utils/constants';

export const styles = StyleSheet.create({
  tabIcon: {
    height: heightScale(36),
    width: heightScale(36),
  },
  tabBarLabelStyle: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(48),
    color: COLORS.black,
  },
  tabBarView: {
    width: widthScale(5),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
