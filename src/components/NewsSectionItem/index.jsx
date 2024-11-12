import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Skeleton from 'react-native-reanimated-skeleton';
import {layout, styles} from './style';
import {timeAgo} from '../../utils/helper';
import {BASE_URL} from '../../utils/constants';

const NewsSectionItem = ({item, onPress, index}) => {
  return item ? (
    <TouchableOpacity style={styles.newsView} key={index} onPress={onPress}>
      <Image
        source={{uri: `${BASE_URL}${item?.news_image}`}}
        style={styles.newsImage}
      />
      <View style={styles.newsDataView}>
        <Text style={styles.newsDate}>10</Text>
        <Text style={styles.newsMonth}>JUNE</Text>
      </View>
      <View style={styles.newsCategoryView}>
        <Text style={styles.newsCategoryTitle}>
          {item?.news_category?.title}
        </Text>
        <Text style={styles.newsCategoryTime}>
          {timeAgo(item?.submittedAt)}
        </Text>
      </View>
      <Text style={styles.newsTitle} numberOfLines={1}>
        {item?.news_description}
      </Text>
    </TouchableOpacity>
  ) : (
    <Skeleton isLoading layout={[layout]} />
  );
};

export default NewsSectionItem;
