import {StyleSheet} from 'react-native';
import {heightScale, widthScale} from '../../utils/helper';
import {COLORS} from '../../utils/constants';
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
  },
  headerTitle: {
    fontFamily: FONTS.InterBold,
    fontSize: heightScale(48),
    color: COLORS.white,
  },
  searchIcon: {
    height: heightScale(30),
    width: heightScale(30),
    tintColor: COLORS.white,
  },
  flatListContainer: {
    marginVertical: heightScale(40),
    paddingHorizontal: heightScale(40),
  },
  eventCategoriesView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginRight: 10,
  },
  eventCategoriesImage: {
    height: heightScale(50),
    width: heightScale(50),
  },
  eventCategoryTitle: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(60),
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
    color: COLORS.primary,
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
  arrowRight: {
    height: heightScale(100),
    width: heightScale(100),
    tintColor: COLORS.grey,
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
