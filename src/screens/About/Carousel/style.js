import {StyleSheet} from 'react-native';
import {heightScale, widthScale} from '../../../utils/helper';
import {COLORS} from '../../../utils/constants';
import {FONTS} from '../../../assets';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  itemView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    height: heightScale(4.2),
    width: widthScale(1.1),
    objectFit: 'fill',
  },
  itemText: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(48),
    color: COLORS.black,
    alignSelf: 'flex-start',
    paddingHorizontal: heightScale(40),
    marginVertical: 5,
  },
  paginationContainer: {
    paddingVertical: 0,
  },
  dotStyle: {
    width: 30,
    height: 8,
    borderRadius: 8,
    backgroundColor: COLORS.primary,
  },
  inactiveDotStyle: {
    width: 16,
    height: 16,
    backgroundColor: COLORS.primaryLight,
  },
});
