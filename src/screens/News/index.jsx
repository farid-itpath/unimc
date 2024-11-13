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
} from 'react-native';
import {styles} from './style';
import {COLORS} from '../../utils/constants';
import {ICONS} from '../../assets';
import Section from '../../components/Section';
import {useNews} from './useNews';
import NewsSectionItem from '../../components/NewsSectionItem';
import CategoryItem from '../../components/CategoryItem';
import FlatListItem from '../../components/FlatListItem';
import {timeAgo} from '../../utils/helper';

const News = () => {
  const {
    categories,
    selectedCategory,
    news,
    t,
    handleSelectCategory,
    handlePressSeeAll,
    handlePressSearch,
    handlePressNews,
  } = useNews();
  const renderCategoryItem = ({item, index}) => {
    return (
      <CategoryItem
        item={item}
        index={index}
        onPress={() => handleSelectCategory(index)}
        selectedCategory={selectedCategory}
      />
    );
  };
  const renderNews = ({item, index}) => {
    return (
      <NewsSectionItem
        item={item}
        onPress={() => handlePressNews(item?.id)}
        index={index}
      />
    );
  };
  const renderNewsItem = ({item, index}) => {
    return (
      <FlatListItem
        item={item}
        itemDate={timeAgo(item?.submittedAt)}
        itemDesc={item?.news_description}
        itemImage={item?.news_image}
        itemTitle={item?.title}
        onPress={() => handlePressNews(item?.id)}
        key={index}
      />
    );
  };
  const renderHeaderComponent = title => {
    return (
      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity
          style={styles.seeAllView}
          onPress={() => handlePressSeeAll(title)}>
          <Text style={styles.seeAllText}>{t('see_all')} </Text>
          <Image source={ICONS.arrowRight} style={styles.arrowRight} />
        </TouchableOpacity>
      </View>
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
    <>
      <SafeAreaView style={styles.statusBarSafeArea} />
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar backgroundColor={COLORS.primary} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerView}>
            <Text style={styles.headerTitle}>{t('news')}</Text>
            <TouchableOpacity onPress={handlePressSearch}>
              <Image source={ICONS.search} style={styles.searchIcon} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={[{icon_image: '', title: 'All'}, ...(categories || [])]}
            renderItem={renderCategoryItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
          />
          <Section
            title="Recent News"
            data={news}
            renderItem={renderNews}
            onPressSeeAll={() => handlePressSeeAll('Recent News')}
          />
          {selectedCategory === 0 ? (
            categories?.map((category, index) => {
              const categoryData = news?.filter(
                newsItem => newsItem?.news_category?.title === category?.title,
              );
              return categoryData?.length ? (
                <FlatList
                  data={
                    news.filter(
                      newsItem =>
                        newsItem?.news_category?.title === category?.title,
                    ) || new Array(2).fill()
                  }
                  renderItem={renderNewsItem}
                  scrollEnabled={false}
                  style={styles.flatList}
                  ListHeaderComponent={() =>
                    renderHeaderComponent(category?.title)
                  }
                  ListEmptyComponent={renderEmptyComponent}
                  key={index}
                />
              ) : null;
            })
          ) : (
            <FlatList
              data={
                news?.filter(
                  newsItem =>
                    newsItem?.news_category?.title ===
                    categories[selectedCategory - 1]?.title,
                ) || new Array(2).fill()
              }
              renderItem={renderNewsItem}
              scrollEnabled={false}
              style={styles.flatList}
              ListHeaderComponent={() =>
                renderHeaderComponent(categories[selectedCategory - 1]?.title)
              }
              ListEmptyComponent={renderEmptyComponent}
            />
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default News;
