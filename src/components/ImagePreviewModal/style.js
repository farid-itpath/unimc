import {StyleSheet} from 'react-native';
import {heightScale} from '../../utils/helper';
import {FONTS} from '../../assets';
import {COLORS} from '../../utils/constants';

export const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: heightScale(40),
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: heightScale(10),
  },
  headerEmptyView: {
    height: heightScale(48),
    width: heightScale(48),
  },
  headerTitle: {
    fontFamily: FONTS.InterBold,
    fontSize: heightScale(48),
    color: COLORS.white,
  },
  closeIconView: {
    padding: 8,
    borderRadius: (heightScale(48) + 16) / 2,
  },
  closeIcon: {
    tintColor: COLORS.white,
    height: heightScale(60),
    width: heightScale(60),
  },
  imageView: {
    height: heightScale(2),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: heightScale(20),
  },
  image: {
    height: heightScale(3),
    width: heightScale(3),
    objectFit: 'contain',
  },
});
