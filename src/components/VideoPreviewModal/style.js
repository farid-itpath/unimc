import {StyleSheet} from 'react-native';
import {heightScale, widthScale} from '../../utils/helper';
import {FONTS} from '../../assets';
import {COLORS} from '../../utils/constants';

export const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: heightScale(40),
    backgroundColor: COLORS.black,
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
  videoView: {
    alignItems: 'center',
    marginTop: heightScale(20),
    height: heightScale(2),
  },
  video: {
    height: heightScale(2),
    borderWidth: 1,
    width: widthScale(1.1),
  },
});
