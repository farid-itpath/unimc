import {StyleSheet} from 'react-native';
import {heightScale, widthScale} from '../../../utils/helper';
import {COLORS} from '../../../utils/constants';
import {FONTS} from '../../../assets';

export const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: heightScale(40),
    marginTop: heightScale(10),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerEmptyView: {
    height: heightScale(48),
    width: heightScale(48),
  },
  headerTitle: {
    fontFamily: FONTS.InterBold,
    fontSize: heightScale(48),
    color: COLORS.black,
  },
  closeIconView: {
    padding: 8,
    borderRadius: (heightScale(48) + 16) / 2,
  },
  closeIcon: {
    tintColor: COLORS.black,
    height: heightScale(48),
    width: heightScale(48),
  },
  optionsContainer: {
    marginTop: heightScale(40),
  },
  optionsRow: {
    flexDirection: 'row',
    gap: widthScale(30),
    marginVertical: 10,
  },
  optionView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    padding: 5,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  optionText: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(56),
  },
  selectedIconView: {
    height: heightScale(40),
    width: heightScale(40),
  },
  selectedIcon: {
    height: heightScale(40),
    width: heightScale(40),
    tintColor: COLORS.white,
  },
  buttonsContainer: {
    marginBottom: heightScale(40),
    gap: heightScale(60),
  },
  buttonApplyView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingVertical: heightScale(56),
    borderRadius: 20,
  },
  buttonApplyTitle: {
    fontFamily: FONTS.InterMedium,
    color: COLORS.white,
    fontSize: heightScale(50),
  },
  buttonCancelView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: heightScale(56),
    borderRadius: 20,
  },
  buttonCancelTitle: {
    fontFamily: FONTS.InterMedium,
    color: COLORS.black,
    fontSize: heightScale(50),
  },
});
