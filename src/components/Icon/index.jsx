import React from 'react';
import {Image} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {IMAGES_BASE_URL} from '../../utils/constants';
import {styles} from './style';
import {heightScale} from '../../utils/helper';

const Icon = ({uri, tintColor}) => {
  return uri?.split('.')[1] === 'png' ? (
    <Image
      source={{uri: `${IMAGES_BASE_URL}${uri}`}}
      style={[styles.image, {tintColor: tintColor}]}
    />
  ) : uri?.split('.')[1] === 'svg' ? (
    <SvgUri
      uri={`${IMAGES_BASE_URL}${uri}`}
      width={heightScale(50)}
      height={heightScale(50)}
    />
  ) : null;
};

export default Icon;
