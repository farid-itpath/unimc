import {SafeAreaView, StatusBar, Image} from 'react-native';
import React from 'react';
import {COLORS} from '../../utils/constants';
import {styles} from './style';
import {IMAGES} from '../../assets';
import {useSplash} from './useSplash';

const Splash = () => {
  useSplash();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={COLORS.white} />
      <Image source={IMAGES.logo} />
    </SafeAreaView>
  );
};

export default Splash;
