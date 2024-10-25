import {StyleSheet} from 'react-native';
import {heightScale, widthScale} from '../../utils/helper';
import {COLORS} from '../../utils/constants';
import {FONTS} from '../../assets';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLORS.extraLightGrey,
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: heightScale(40),
    marginVertical: heightScale(72),
    gap: widthScale(16),
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
  searchInputView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    borderRadius: 30,
    paddingHorizontal: widthScale(20),
    height: heightScale(18),
  },
  searchInput: {
    flex: 1,
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(52),
  },
  searchIcon: {
    tintColor: COLORS.primary,
    height: heightScale(36),
    width: heightScale(36),
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingHorizontal: heightScale(40),
    marginTop: 5,
  },
  filterView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: COLORS.primary,
    padding: 8,
    borderRadius: 20,
  },
  iconView: {
    height: heightScale(40),
    width: heightScale(40),
    borderRadius: heightScale(40) / 2,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterIcon: {
    height: heightScale(60),
    width: heightScale(60),
    tintColor: COLORS.primary,
  },
  filterText: {
    fontFamily: FONTS.InterMedium,
    fontSize: heightScale(64),
    color: COLORS.white,
  },
  eventListView: {
    flexDirection: 'row',
    padding: 10,
    borderRadius: 20,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    gap: 10,
  },
  eventListImage: {
    height: heightScale(10),
    width: heightScale(10),
  },
  eventListDetails: {
    justifyContent: 'space-between',
    flexShrink: 1,
  },
  eventListTitle: {
    textTransform: 'uppercase',
    fontSize: heightScale(72),
    fontFamily: FONTS.InterBold,
    color: COLORS.primary,
  },
  eventListDesc: {
    fontFamily: FONTS.InterBold,
    color: COLORS.black,
    fontSize: heightScale(60),
  },
  eventListTime: {
    fontFamily: FONTS.InterMedium,
    marginBottom: 10,
    fontSize: heightScale(64),
    color: COLORS.grey,
  },
  flatList: {
    paddingHorizontal: heightScale(40),
    marginTop: heightScale(40),
  },
});
