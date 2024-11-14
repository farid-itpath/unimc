import {StyleSheet} from 'react-native';
import {heightScale} from '../../../utils/helper';
import {FONTS} from '../../../assets';
import {COLORS} from '../../../utils/constants';

export const styles = StyleSheet.create({
  accordionView: {
    paddingHorizontal: heightScale(40),
    paddingBottom: heightScale(40),
  },
  accordionHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accordionTitle: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(40),
    color: COLORS.primary,
  },
  collapseIcon: {
    height: heightScale(72),
    width: heightScale(72),
    tintColor: COLORS.primary,
  },
  accordionDesc: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(60),
    marginTop: 8,
    color: COLORS.grey,
  },
});
