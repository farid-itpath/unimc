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
    // flex: 1,
  },
  headerView: {
    height: heightScale(2.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImageView: {
    position: 'absolute',
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    overflow: 'hidden',
  },
  headerImage: {
    height: heightScale(2.5),
    width: widthScale(1),
    objectFit: 'cover',
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
    marginTop: heightScale(16),
  },
  screenHeaderText: {
    fontFamily: FONTS.InterMedium,
    color: COLORS.white,
    fontSize: heightScale(42),
    flexShrink: 1,
  },
  eventCategoriesView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginRight: 10,
    zIndex: 1,
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
  eventDataView: {
    alignSelf: 'flex-end',
    marginRight: widthScale(16),
    marginBottom: heightScale(36),
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 8,
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
  newsTitle: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(24),
    color: COLORS.black,
    marginBottom: heightScale(40),
  },
  newsDetailsView: {
    paddingHorizontal: heightScale(40),
    marginBottom: heightScale(40),
  },
  aboutText: {
    fontFamily: FONTS.InterMedium,
    color: COLORS.black,
    fontSize: heightScale(60),
    marginBottom: 10,
  },
  publishInfoTitle: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(56),
    textDecorationLine: 'underline',
    color: COLORS.primary,
    marginBottom: 8,
    textTransform: 'uppercase',
  },
  publishDate: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(72),
    color: COLORS.grey,
    textTransform: 'capitalize',
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

export const layout = {
  title: {
    height: 50,
    width: '100%',
  },
  description: {
    height: heightScale(4),
    width: '100%',
    marginTop: 20,
  },
  publishDate: {
    height: heightScale(72),
    width: widthScale(3),
  },
};
