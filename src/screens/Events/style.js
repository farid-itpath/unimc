import {StyleSheet} from 'react-native';
import {heightScale, widthScale} from '../../utils/helper';
import {COLORS} from '../../utils/constants';
import {FONTS} from '../../assets';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  headerView: {
    backgroundColor: COLORS.primary,
    height: heightScale(14),
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: widthScale(10),
  },
  headerTitle: {
    fontFamily: FONTS.InterBold,
    fontSize: heightScale(48),
    color: COLORS.white,
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
  eventView: {
    padding: 10,
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
    left: 20,
    top: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  eventDate: {
    fontSize: heightScale(50),
    color: COLORS.primary,
    fontFamily: FONTS.InterBold,
    lineHeight: 20,
  },
  eventMonth: {
    fontSize: heightScale(80),
    color: COLORS.primary,
    fontFamily: FONTS.InterMedium,
    lineHeight: 16,
  },
  eventTitle: {
    fontFamily: FONTS.InterBold,
    fontSize: heightScale(60),
    color: COLORS.black,
    padding: 5,
  },
  eventAddressView: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  eventAddressText: {
    fontFamily: FONTS.InterMedium,
  },
});
