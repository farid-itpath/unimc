import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {COLORS} from '../../utils/constants';
import {ICONS} from '../../assets';
import {useNewsList} from './useNewsList';
import {styles} from './style';
import FlatListItem from '../../components/FlatListItem';
import {timeAgo} from '../../utils/helper';

const NewsList = () => {
  const {
    news,
    screenTitle,
    t,
    handlePressSearch,
    handlePressBack,
    handlePressNews,
  } = useNewsList();
  const renderNews = ({item, index}) => {
    return (
      <FlatListItem
        item={item}
        itemImage={item?.news_image}
        itemDate={timeAgo(item?.submittedAt)}
        itemDesc={item?.news_description}
        itemTitle={item?.title}
        onPress={handlePressNews}
        key={index}
      />
    );
  };
  const renderEmptyComponent = () => {
    return (
      <View style={styles.listEmptyComponent}>
        <Text style={styles.listEmptyComponentText}>{t('no_data_found')}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar
        backgroundColor={COLORS.extraLightGrey}
        barStyle="dark-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerView}>
          <TouchableHighlight
            onPress={handlePressBack}
            underlayColor={COLORS.primaryExtraLight}
            style={styles.backIconView}>
            <Image source={ICONS.back} style={styles.backIcon} />
          </TouchableHighlight>
          <Text style={styles.headerTitle}>{screenTitle}</Text>
          <TouchableOpacity onPress={handlePressSearch}>
            <Image source={ICONS.search} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={
            screenTitle === 'Recent News'
              ? news
              : news.filter(
                  newsItem => newsItem?.news_category?.title === screenTitle,
                )
          }
          renderItem={renderNews}
          scrollEnabled={false}
          style={styles.flatList}
          ListEmptyComponent={renderEmptyComponent}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsList;
