import {Dimensions} from 'react-native';

export const heightScale = factor => Dimensions.get('screen').height / factor;

export const widthScale = factor => Dimensions.get('screen').width / factor;
