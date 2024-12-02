import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Skeleton from 'react-native-reanimated-skeleton';
import {RenderHTML} from 'react-native-render-html';
import {layout, styles} from './style';
import {BASE_URL, COLORS} from '../../utils/constants';

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
        source={{uri: `${BASE_URL}${itemImage}`}}
        style={styles.eventListImage}
      />
      <View style={styles.eventListDetails}>
        <Text style={styles.eventListTitle} numberOfLines={1}>
          {itemTitle}
        </Text>
        <View style={styles.htmlContent}>
          <RenderHTML
            contentWidth={1}
            source={{html: itemDesc}}
            tagsStyles={{
              p: {
                marginTop: 0,
                marginBottom: 0,
                paddingTop: 0,
                paddingBottom: 0,
                color: COLORS.black,
              },
              span: {
                marginTop: 0,
                marginBottom: 0,
                paddingTop: 0,
                paddingBottom: 0,
                color: COLORS.black,
              },
              li: {
                color: COLORS.black,
              },
            }}
          />
        </View>
        <Text style={styles.eventListTime}>{itemDate}</Text>
      </View>
    </TouchableOpacity>
  ) : (
    <Skeleton isLoading layout={[layout]} />
  );
};

export default FlatListItem;
