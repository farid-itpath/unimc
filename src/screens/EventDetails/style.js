import {StyleSheet} from 'react-native';
import {heightScale, widthScale} from '../../utils/helper';
import {COLORS} from '../../utils/constants';
import {FONTS} from '../../assets';

export const styles = StyleSheet.create({
  statusBarSafeArea: {
    flex: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  safeAreaView: {
    flex: 1,
  },
  headerView: {
    height: heightScale(3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    height: heightScale(3),
    width: widthScale(1),
    position: 'absolute',
    objectFit: 'fill',
  },
  innerHeaderView: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    justifyContent: 'space-between',
  },
  screenHeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: heightScale(40),
    gap: heightScale(40),
    marginTop: 10,
  },
  screenHeaderText: {
    fontFamily: FONTS.InterMedium,
    color: COLORS.white,
    fontSize: heightScale(42),
  },
  eventCategoriesView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    zIndex: 11,
    bottom: 22,
    backgroundColor: COLORS.white,
    alignSelf: 'center',
    borderRadius: 20,
  },
  eventCategoriesImage: {
    height: heightScale(50),
    width: heightScale(50),
    tintColor: COLORS.primary,
  },
  eventCategoryTitle: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(52),
    color: COLORS.primary,
  },
  qrIcon: {
    height: heightScale(24),
    width: heightScale(24),
    alignSelf: 'flex-end',
    marginRight: widthScale(16),
    marginBottom: heightScale(36),
    tintColor: COLORS.white,
  },
  eventDetailsView: {
    paddingHorizontal: heightScale(40),
  },
  eventTitle: {
    fontFamily: FONTS.InterRegular,
    fontSize: heightScale(24),
    color: COLORS.black,
  },
  venueDetailView: {
    flexDirection: 'row',
    gap: widthScale(20),
    marginVertical: heightScale(60),
  },
  venueIconView: {
    backgroundColor: COLORS.primaryExtraLight,
    padding: 10,
    borderRadius: 10,
  },
  venueIcon: {
    tintColor: COLORS.primary,
    height: heightScale(32),
    width: heightScale(32),
  },
  venueTexts: {
    justifyContent: 'space-between',
  },
  venueFirstText: {
    fontFamily: FONTS.InterMedium,
    color: COLORS.black,
    fontSize: heightScale(48),
  },
  venueSecondText: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(64),
    color: COLORS.grey,
  },
  eventInfoView: {
    paddingHorizontal: heightScale(40),
    marginTop: heightScale(40),
  },
  eventInfoTitle: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(56),
    textDecorationLine: 'underline',
    color: COLORS.primary,
    marginBottom: 8,
  },
  aboutText: {
    fontFamily: FONTS.InterMedium,
    color: COLORS.black,
    fontSize: heightScale(60),
  },
  listImage: {
    height: heightScale(8),
    width: heightScale(8),
    marginRight: 10,
  },
  organizerInfoView: {
    paddingHorizontal: heightScale(40),
  },
  organizerImage: {
    height: heightScale(14),
    width: heightScale(14),
  },
  organizerTexts: {
    justifyContent: 'space-between',
  },
  organizerFirstText: {
    fontFamily: FONTS.InterMedium,
    color: COLORS.black,
    fontSize: heightScale(52),
  },
  organizerSecondText: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(72),
    color: COLORS.grey,
  },
  organizerDetailView: {
    flexDirection: 'row',
    gap: 10,
    marginTop: heightScale(60),
    marginBottom: heightScale(30),
  },
  back: {
    height: heightScale(48),
    width: heightScale(48),
    tintColor: COLORS.white,
  },
  backIconView: {
    padding: 8,
    borderRadius: (heightScale(48) + 16) / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
