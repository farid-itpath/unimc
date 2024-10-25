import {StyleSheet} from 'react-native';
import {heightScale} from '../../utils/helper';
import {FONTS} from '../../assets';
import {COLORS} from '../../utils/constants';

export const styles = StyleSheet.create({
  section: {
    marginBottom: heightScale(60),
  },
  sectionHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: heightScale(60),
    paddingHorizontal: heightScale(40),
  },
  sectionTitle: {
    fontFamily: FONTS.InterMedium,
    color: COLORS.black,
    fontSize: heightScale(50),
  },
  seeAllView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(60),
  },
  flatListContainer: {
    paddingHorizontal: heightScale(40),
  },
  arrowRight: {
    height: heightScale(100),
    width: heightScale(100),
    tintColor: COLORS.grey,
  },
});
