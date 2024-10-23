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
    fontFamily: FONTS.InterBold,
    fontSize: heightScale(52),
    color: COLORS.primary,
  },
  collapseIcon: {
    height: heightScale(40),
    width: heightScale(40),
    tintColor: COLORS.primary,
  },
  accordionDesc: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(64),
    marginTop: 8,
  },
});
