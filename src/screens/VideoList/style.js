import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';
import {heightScale, widthScale} from '../../utils/helper';
import {FONTS} from '../../assets';

export const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    // paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: 15,
    marginTop: heightScale(20),
  },
  grid: {
    paddingHorizontal: 10,
  },
  imageCard: {
    height: heightScale(4),
    borderRadius: 15,
    margin: 10,
    overflow: 'hidden',
    backgroundColor: COLORS.white,
    elevation: 5, // Shadow on Android
    shadowColor: '#000', // Shadow on iOS
    shadowOpacity: 0.3,
    shadowOffset: {width: 0, height: 5},
    shadowRadius: 8,
  },
  image: {
    width: widthScale(1.1),
    height: '100%',
  },
  playButton: {
    height: heightScale(20),
    width: heightScale(20),
    position: 'absolute',
    left: widthScale(1.1) / 2 - heightScale(20) / 2,
    top: '45%',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenImage: {
    width: '90%',
    height: '70%',
    borderRadius: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    padding: 5,
    zIndex: 1,
  },
  closeText: {
    fontSize: 28,
    color: COLORS.white,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: heightScale(40),
    marginVertical: heightScale(72),
    // marginTop: heightScale(20),
    height: heightScale(8),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: COLORS.extraLightGrey,
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
});
