import {StyleSheet} from 'react-native';
import {heightScale, widthScale} from '../../utils/helper';
import {COLORS} from '../../utils/constants';
import {FONTS} from '../../assets';

export const styles = StyleSheet.create({
  eventView: {
    padding: heightScale(60),
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginRight: 10,
    width: widthScale(1.8),
  },
  eventImage: {
    height: heightScale(7),
    width: widthScale(2),
    objectFit: 'fill',
    borderRadius: 10,
    alignSelf: 'center',
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
    fontSize: heightScale(52),
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
    fontSize: heightScale(68),
    color: COLORS.grey,
    flexGrow: 1,
  },
});

export const layout = {
  key: '1',
  width: widthScale(1.8),
  height: heightScale(4),
  marginRight: 10,
  borderRadius: 10,
};
