import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';
import {heightScale} from '../../utils/helper';
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
