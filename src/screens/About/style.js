import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';
import {heightScale, widthScale} from '../../utils/helper';
import {FONTS} from '../../assets';

export const styles = StyleSheet.create({
  statusBarSafeArea: {
    flex: 0,
    backgroundColor: COLORS.primary,
  },
  safeAreaView: {
    flex: 1,
  },
  headerView: {
    backgroundColor: COLORS.primary,
    height: heightScale(12),
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: widthScale(12),
    position: 'absolute',
    zIndex: 10,
    width: '100%',
  },
  scrollView: {
    marginTop: heightScale(12),
    paddingBottom: heightScale(12),
  },
  headerTitle: {
    fontFamily: FONTS.InterBold,
    fontSize: heightScale(48),
    color: COLORS.white,
  },
  settingsIcon: {
    height: heightScale(44),
    width: heightScale(44),
    tintColor: COLORS.white,
  },
  settingsView: {
    padding: 5,
    borderRadius: (heightScale(40) + 10) / 2,
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
  eventCategoryTitle: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(60),
  },
  flatListContainer: {
    marginVertical: heightScale(40),
    paddingHorizontal: heightScale(40),
  },
});
