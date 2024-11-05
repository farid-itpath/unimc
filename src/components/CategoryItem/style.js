import {StyleSheet} from 'react-native';
import {heightScale, widthScale} from '../../utils/helper';
import {FONTS} from '../../assets';
import {COLORS} from '../../utils/constants';

export const styles = StyleSheet.create({
  eventCategoriesView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  eventCategoryTitle: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(60),
    color: COLORS.primary,
  },
});

export const layout = {
  key: '1',
  width: widthScale(4),
  height: heightScale(24),
  marginRight: widthScale(20),
  borderRadius: 20,
};
