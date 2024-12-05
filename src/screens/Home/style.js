import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';
import {heightScale, widthScale} from '../../utils/helper';
import {FONTS} from '../../assets';

export const styles = StyleSheet.create({
  statusBarSafeArea: {
    flex: 0,
    backgroundColor: COLORS.primary,
  },
  safeAreaView: {
    flex: 1,
  },
  headerView: {
    backgroundColor: COLORS.primary,
    height: heightScale(12),
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: widthScale(12),
    position: 'absolute',
    zIndex: 10,
    width: '100%',
  },
  scrollView: {
    marginTop: heightScale(12),
    paddingBottom: heightScale(12),
  },
  logo: {
    height: heightScale(12),
    width: widthScale(2),
  },
  emptyView: {
    height: heightScale(30),
    width: heightScale(30),
  },
  searchIcon: {
    height: heightScale(30),
    width: heightScale(30),
    tintColor: COLORS.white,
  },
  flatList: {
    paddingHorizontal: heightScale(40),
    marginTop: heightScale(40),
  },
  sectionHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    color: COLORS.grey,
  },
  arrowRight: {
    height: heightScale(100),
    width: heightScale(100),
    tintColor: COLORS.grey,
  },
  listEmptyComponent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: widthScale(1.12),
    // height: heightScale(4),
  },
  listEmptyComponentText: {
    fontFamily: FONTS.InterBold,
    color: COLORS.primaryLight,
    fontSize: heightScale(40),
  },
});
