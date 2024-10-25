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
    marginBottom: heightScale(40),
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
  eventView: {
    padding: heightScale(60),
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginRight: 10,
  },
  eventImage: {
    height: heightScale(7),
    width: widthScale(2),
    objectFit: 'fill',
    borderRadius: 10,
  },
  eventDataView: {
    position: 'absolute',
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 5,
    left: heightScale(40),
    top: heightScale(40),
    borderRadius: 10,
    alignItems: 'center',
  },
  eventDate: {
    fontSize: heightScale(50),
    color: COLORS.primary,
    fontFamily: FONTS.InterBold,
    lineHeight: heightScale(42),
  },
  eventMonth: {
    fontSize: heightScale(80),
    color: COLORS.primary,
    fontFamily: FONTS.InterMedium,
    lineHeight: 16,
  },
  eventTitle: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(60),
    color: COLORS.black,
    padding: 5,
    marginVertical: 5,
  },
  eventAddressView: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  eventLocationIcon: {
    height: heightScale(72),
    width: heightScale(72),
    tintColor: COLORS.grey,
  },
  eventAddressText: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(64),
    color: COLORS.grey,
  },
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
  eventCategoriesImage: {
    height: heightScale(50),
    width: heightScale(50),
    tintColor: COLORS.primary,
  },
  eventCategoryTitle: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(60),
    color: COLORS.primary,
  },
  flatList: {
    paddingHorizontal: heightScale(40),
    marginTop: heightScale(40),
  },
  eventListView: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    gap: 10,
  },
  eventListImage: {
    height: heightScale(10),
    width: heightScale(10),
  },
  eventListDetails: {
    justifyContent: 'space-between',
    flexShrink: 1,
    width: '100%',
  },
  eventListTitle: {
    textTransform: 'uppercase',
    fontSize: heightScale(72),
    fontFamily: FONTS.InterBold,
    color: COLORS.primary,
    marginBottom: 5,
  },
  eventListDesc: {
    fontFamily: FONTS.InterBold,
    color: COLORS.black,
    fontSize: heightScale(60),
  },
  eventListTime: {
    fontFamily: FONTS.InterMedium,
    marginBottom: 10,
    fontSize: heightScale(64),
    color: COLORS.grey,
  },
});
