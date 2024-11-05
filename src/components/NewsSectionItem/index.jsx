import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Skeleton from 'react-native-reanimated-skeleton';
import {layout, styles} from './style';

const NewsSectionItem = ({item, onPress, index}) => {
  return item ? (
    <TouchableOpacity style={styles.newsView} key={index} onPress={onPress}>
      <Image source={item} style={styles.newsImage} />
      <View style={styles.newsDataView}>
        <Text style={styles.newsDate}>10</Text>
        <Text style={styles.newsMonth}>JUNE</Text>
      </View>
      <View style={styles.newsCategoryView}>
        <Text style={styles.newsCategoryTitle}>SPORTS</Text>
        <Text style={styles.newsCategoryTime}>2 min ago</Text>
      </View>
      <Text style={styles.newsTitle} numberOfLines={1}>
        Appassionata concerts
      </Text>
    </TouchableOpacity>
  ) : (
    <Skeleton isLoading layout={[layout]} />
  );
};

export default NewsSectionItem;
