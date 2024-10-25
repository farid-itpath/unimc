import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Animated from 'react-native-reanimated';
import {COLORS} from '../../utils/constants';
import {styles} from './style';
import {IMAGES} from '../../assets';
import {useSplash} from './useSplash';

const Splash = () => {
  const {animatedLogo} = useSplash();
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={COLORS.white} />
      <Animated.Image source={IMAGES.logo} style={[animatedLogo]} />
    </SafeAreaView>
  );
};

export default Splash;
