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
  newsView: {
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginRight: 10,
  },
  newsImage: {
    height: heightScale(7),
    width: widthScale(2),
    objectFit: 'fill',
    borderRadius: 10,
  },
  newsDataView: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 5,
    left: heightScale(40),
    top: heightScale(40),
    borderRadius: 10,
    alignItems: 'center',
  },
  newsDate: {
    fontSize: heightScale(50),
    color: COLORS.primary,
    fontFamily: FONTS.InterBold,
    lineHeight: heightScale(42),
  },
  newsMonth: {
    fontSize: heightScale(80),
    color: COLORS.primary,
    fontFamily: FONTS.InterMedium,
    lineHeight: 16,
  },
  newsTitle: {
    fontFamily: FONTS.InterBold,
    fontSize: heightScale(60),
    color: COLORS.black,
    paddingHorizontal: 5,
  },
  newsCategoryView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginVertical: 5,
  },
  newsCategoryTitle: {
    textTransform: 'uppercase',
    fontSize: heightScale(72),
    fontFamily: FONTS.InterBold,
    color: COLORS.primary,
  },
  newsCategoryTime: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(64),
    color: COLORS.grey,
  },
  newsListView: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    marginVertical: heightScale(60),
    gap: 10,
  },
  newsListImage: {
    height: heightScale(10),
    width: heightScale(10),
  },
  newsListDetails: {
    justifyContent: 'space-between',
    flexShrink: 1,
  },
  newsListTitle: {
    textTransform: 'uppercase',
    fontSize: heightScale(72),
    fontFamily: FONTS.InterBold,
    color: COLORS.primary,
  },
  newsListDesc: {
    flexGrow: 1,
    fontFamily: FONTS.InterBold,
    color: COLORS.black,
    fontSize: heightScale(60),
  },
  newsListTime: {
    fontFamily: FONTS.InterMedium,
    marginBottom: 10,
    fontSize: heightScale(64),
    color: COLORS.grey,
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
});
