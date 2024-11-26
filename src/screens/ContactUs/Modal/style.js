import {StyleSheet} from 'react-native';
import {heightScale, widthScale} from '../../../utils/helper';
import {FONTS} from '../../../assets';
import {COLORS} from '../../../utils/constants';
export const styles = StyleSheet.create({
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: heightScale(50),
    borderRadius: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  image: {
    width: widthScale(2),
    height: heightScale(6),
    resizeMode: 'contain',
  },
  text: {
    marginVertical: heightScale(60),
    fontFamily: FONTS.InterMedium,
    color: COLORS.black,
    textAlign: 'center',
  },
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: widthScale(1.5),
  },
  buttonAllowStyle: {
    backgroundColor: COLORS.primary,
    borderRadius: 10,
    width: widthScale(3.2),
  },
  buttonRefusalStyle: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.primary,
    width: widthScale(3.2),
  },
  buttonAllowText: {
    fontFamily: FONTS.InterMedium,
    color: COLORS.white,
    padding: heightScale(70),
    alignSelf: 'center',
  },
  buttonRefusalText: {
    fontFamily: FONTS.InterMedium,
    color: COLORS.primary,
    padding: heightScale(70),
    alignSelf: 'center',
  },
});
