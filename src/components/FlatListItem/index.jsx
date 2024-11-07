import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Skeleton from 'react-native-reanimated-skeleton';
import {layout, styles} from './style';
import {IMAGES_BASE_URL} from '../../utils/constants';

const FlatListItem = ({
  item,
  itemImage,
  itemTitle,
  itemDesc,
  itemDate,
  onPress,
}) => {
  return item ? (
    <TouchableOpacity style={styles.eventListView} onPress={onPress}>
      <Image
        source={{uri: `${IMAGES_BASE_URL}${itemImage}`}}
        style={styles.eventListImage}
      />
      <View style={styles.eventListDetails}>
        <View>
          <Text style={styles.eventListTitle} numberOfLines={1}>
            {itemTitle}
          </Text>
          <Text style={styles.eventListDesc} numberOfLines={2}>
            {itemDesc}
          </Text>
        </View>
        <Text style={styles.eventListTime}>{itemDate}</Text>
      </View>
    </TouchableOpacity>
  ) : (
    <Skeleton isLoading layout={[layout]} />
  );
};

export default FlatListItem;
