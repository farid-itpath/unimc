import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';
import {heightScale, widthScale} from '../../utils/helper';
import {FONTS} from '../../assets';

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
    tintColor: COLORS.black,
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
  flatList: {
    paddingHorizontal: heightScale(40),
    marginTop: heightScale(40),
  },
  listEmptyComponent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: widthScale(1.12),
    height: heightScale(4),
  },
  listEmptyComponentText: {
    fontFamily: FONTS.InterBold,
    color: COLORS.primaryLight,
    fontSize: heightScale(40),
  },
});
