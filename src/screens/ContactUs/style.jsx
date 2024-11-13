import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';
import {FONTS} from '../../assets';
import {heightScale, widthScale} from '../../utils/helper';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: heightScale(40),
    marginVertical: heightScale(72),
  },
  backIconView: {
    padding: 8,
    borderRadius: (heightScale(48) + 16) / 2,
  },
  backIcon: {
    height: heightScale(48),
    width: heightScale(48),
    tintColor: COLORS.primary,
  },
  searchIcon: {
    height: heightScale(36),
    width: heightScale(36),
    tintColor: COLORS.primary,
  },
  headerTitle: {
    fontFamily: FONTS.InterBold,
    fontSize: heightScale(48),
    color: COLORS.black,
  },
  headerTitle1: {
    fontFamily: FONTS.InterSemiBold,
    fontSize: heightScale(55),
    color: COLORS.black,
    marginVertical: heightScale(100),
  },
  formContainer: {
    padding: 20,
  },
  textInput: {
    borderWidth: 1.5,
    borderColor: COLORS.grey,
    fontSize: heightScale(56),
    color: COLORS.black,
    fontFamily: FONTS.InterMedium,
    borderRadius: 10,
    padding: 10,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  errorText: {
    color: COLORS.error,
    fontSize: heightScale(76),
    marginBottom: 10,
  },
  buttonApplyView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    paddingVertical: heightScale(56),
    borderRadius: 20,
    marginTop: heightScale(150),
  },
  buttonApplyTitle: {
    fontFamily: FONTS.InterMedium,
    color: COLORS.white,
    fontSize: heightScale(50),
  },
});
