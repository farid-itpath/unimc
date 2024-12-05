import {View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {BASE_URL} from '../../../utils/constants';
import Skeleton from 'react-native-reanimated-skeleton';
import {heightScale} from '../../../utils/helper';

const RenderedImage = ({item, handleImagePress}) => {
  const [imageLoader, setImageLoader] = useState(true);
  return (
    <View>
      {(imageLoader || item === null) && (
        <Skeleton
          layout={[
            {
              height: heightScale(8),
              width: heightScale(8),
              marginRight: 10,
              borderRadius: 10,
            },
          ]}
        />
      )}
      <TouchableOpacity
        onPress={() => handleImagePress({url: item?.path, title: 'Preview'})}>
        <Image
          source={{uri: `${BASE_URL}${item?.path}`}}
          style={{
            height: imageLoader ? 0 : heightScale(8),
            width: imageLoader ? 0 : heightScale(8),
            marginRight: 10,
            borderRadius: 10,
          }}
          onLoadEnd={() => setImageLoader(false)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default RenderedImage;
