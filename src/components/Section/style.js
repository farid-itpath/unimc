import {StyleSheet} from 'react-native';
import {heightScale, widthScale} from '../../utils/helper';
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
  footerComponent: {
    flex: 1,
    backgroundColor: COLORS.primary,
    width: widthScale(4),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerComponentText: {
    fontFamily: FONTS.InterBold,
    color: COLORS.white,
    fontSize: heightScale(60),
  },
  arrowRightFooter: {
    height: heightScale(100),
    width: heightScale(100),
    tintColor: COLORS.white,
  },
  listEmptyComponent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthScale(1.12),
    height: heightScale(4),
  },
  listEmptyComponentText: {
    fontFamily: FONTS.InterBold,
    color: COLORS.primaryLight,
    fontSize: heightScale(40),
  },
});
