import {StyleSheet} from 'react-native';
import {heightScale, widthScale} from '../../../utils/helper';
import {FONTS} from '../../../assets';
import {COLORS} from '../../../utils/constants';

export const styles = StyleSheet.create({
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioButtonIcon: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioButtonIconSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  radioButtonLabel: {
    fontSize: 16,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: widthScale(16),
    padding: 8,
    borderRadius: 20,
    marginVertical: 5,
  },
  flag: {
    height: heightScale(16),
    width: heightScale(16),
  },
  languageTitle: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(48),
    color: COLORS.black,
  },
});
