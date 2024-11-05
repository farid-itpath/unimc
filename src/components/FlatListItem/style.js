import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';
import {heightScale} from '../../utils/helper';
import {FONTS} from '../../assets';

export const styles = StyleSheet.create({
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
    borderRadius: 10,
  },
  eventListDetails: {
    justifyContent: 'space-between',
    flexShrink: 1,
    width: '100%',
  },
  eventListTitle: {
    textTransform: 'uppercase',
    fontSize: heightScale(72),
    fontFamily: FONTS.InterBold,
    color: COLORS.primary,
    marginBottom: 5,
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
});

export const layout = {
  key: '1',
  width: '100%',
  height: heightScale(8),
  marginBottom: heightScale(36),
  borderRadius: 20,
};
