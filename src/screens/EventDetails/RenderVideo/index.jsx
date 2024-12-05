import {TouchableOpacity, Image, View} from 'react-native';
import React, {useState} from 'react';
import {ICONS} from '../../../assets';
import {heightScale} from '../../../utils/helper';
import Skeleton from 'react-native-reanimated-skeleton';
import {BASE_URL} from '../../../utils/constants';

const RenderVideo = ({item, handleVideoPress}) => {
  const [videoLoader, setVideoLoader] = useState(true);
  return (
    <View>
      {(videoLoader || item === null) && (
        <Skeleton
          layout={[
            {
              height: heightScale(8),
              width: heightScale(8),
              marginRight: 10,
              borderRadius: 10,
              overflow: 'hidden',
            },
          ]}
        />
      )}
      <TouchableOpacity onPress={() => handleVideoPress(item?.path)}>
        <Image
          source={{uri: `${BASE_URL}${item?.video_thumbnail_path}`}}
          style={{
            height: videoLoader ? 0 : heightScale(8),
            width: videoLoader ? 0 : heightScale(8),
            marginRight: 10,
            borderRadius: 10,
            overflow: 'hidden',
          }}
          onLoadEnd={() => setVideoLoader(false)}
        />
        <Image
          source={ICONS.play}
          style={{
            height: 20,
            width: 20,
            position: 'absolute',
            left: heightScale(8) / 2 - 10,
            top: heightScale(8) / 2 - 10,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default RenderVideo;
