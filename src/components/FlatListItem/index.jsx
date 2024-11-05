import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Skeleton from 'react-native-reanimated-skeleton';
import {layout, styles} from './style';
import {IMAGES_BASE_URL} from '../../utils/constants';
import {timeAgo} from '../../utils/helper';

const FlatListItem = ({item, onPress}) => {
  return item ? (
    <TouchableOpacity style={styles.eventListView} onPress={onPress}>
      <Image
        source={{uri: `${IMAGES_BASE_URL}${item?.news_image}`}}
        style={styles.eventListImage}
      />
      <View style={styles.eventListDetails}>
        <View>
          <Text style={styles.eventListTitle} numberOfLines={1}>
            {item?.title}
          </Text>
          <Text style={styles.eventListDesc} numberOfLines={2}>
            {item?.news_description}
          </Text>
        </View>
        <Text style={styles.eventListTime}>{timeAgo(item?.submittedAt)}</Text>
      </View>
    </TouchableOpacity>
  ) : (
    <Skeleton isLoading layout={[layout]} />
  );
};

export default FlatListItem;
