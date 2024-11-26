import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';
import {heightScale, widthScale} from '../../utils/helper';
import {FONTS} from '../../assets';

export const styles = StyleSheet.create({
  newsView: {
    padding: heightScale(60),
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginRight: 10,
    width: widthScale(1.8),
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
  htmlContent: {
    height: 38,
    overflow: 'hidden',
    flex: 4,
  },
});

export const layout = {
  key: '1',
  width: widthScale(1.8),
  height: heightScale(4),
  marginRight: 10,
  borderRadius: 10,
};
