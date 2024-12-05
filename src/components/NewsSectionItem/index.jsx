import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Skeleton from 'react-native-reanimated-skeleton';
import RenderHTML from 'react-native-render-html';
import {layout, styles} from './style';
import {heightScale, timeAgo} from '../../utils/helper';
import {BASE_URL, COLORS, tagsStyles} from '../../utils/constants';
import {useTranslation} from 'react-i18next';
import {FONTS} from '../../assets';

const NewsSectionItem = ({item, onPress, index}) => {
  const {t} = useTranslation();
  return item ? (
    <TouchableOpacity style={styles.newsView} key={index} onPress={onPress}>
      <Image
        source={{uri: `${BASE_URL}${item?.news_image}`}}
        style={styles.newsImage}
      />
      {/* <View style={styles.newsDataView}>
        <Text style={styles.newsDate}>10</Text>
        <Text style={styles.newsMonth}>JUNE</Text>
      </View> */}
      <View style={styles.newsCategoryView}>
        <Text style={styles.newsCategoryTitle} numberOfLines={1}>
          {item?.news_category?.title}
        </Text>
        <Text style={styles.newsCategoryTime} numberOfLines={1}>
          {timeAgo(item?.publishedAt, t)}
        </Text>
      </View>
      {/* <View style={styles.htmlContent}>
        <RenderHTML
          contentWidth={1}
          source={{html: item?.news_description}}
          tagsStyles={tagsStyles}
        />
      </View> */}
      <Text
        style={{
          fontSize: heightScale(60),
          fontFamily: FONTS.InterSemiBold,
          color: COLORS.black,
        }}
        numberOfLines={1}>
        {item?.title}
      </Text>
    </TouchableOpacity>
  ) : (
    <Skeleton isLoading layout={[layout]} />
  );
};

export default NewsSectionItem;
