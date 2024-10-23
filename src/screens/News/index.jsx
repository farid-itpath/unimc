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
import {ICONS, IMAGES} from '../../assets';
import {EventCategories} from '../../utils/data';
import Section from '../../components/Section';
import {useNews} from './useNews';

const News = () => {
  const {selectedCategory, scrollRef, handleSelectCategory} = useNews();
  const renderCategoryItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => handleSelectCategory(index)}
        style={[
          styles.eventCategoriesView,
          {
            backgroundColor:
              index === selectedCategory ? COLORS.primary : COLORS.white,
          },
        ]}
        key={index}>
        {item.icon && (
          <Image
            source={item.icon}
            style={[
              styles.eventCategoriesImage,
              {
                tintColor:
                  index === selectedCategory ? COLORS.white : COLORS.primary,
              },
            ]}
          />
        )}
        <Text
          style={[
            styles.eventCategoryTitle,
            {
              color: index === selectedCategory ? COLORS.white : COLORS.primary,
            },
          ]}>
          {item.categoryName}
        </Text>
      </TouchableOpacity>
    );
  };
  const renderNews = ({item, index}) => {
    return (
      <View style={styles.newsView} key={index}>
        <Image source={item} style={styles.newsImage} />
        <View style={styles.newsDataView}>
          <Text style={styles.newsDate}>10</Text>
          <Text style={styles.newsMonth}>JUNE</Text>
        </View>
        <View style={styles.newsCategoryView}>
          <Text style={styles.newsCategoryTitle}>SPORTS</Text>
          <Text style={styles.newsCategoryTime}>2 min ago</Text>
        </View>
        <Text style={styles.newsTitle}>Appassionata concerts</Text>
      </View>
    );
  };
  const renderCategories = ({item, index}) => {
    return (
      <View style={styles.newsListView}>
        <Image source={IMAGES.categoryImage} style={styles.newsListImage} />
        <View style={styles.newsListDetails}>
          <Text style={styles.newsListTitle}>Sports</Text>
          <Text style={styles.newsListDesc}>Women's leadership conference</Text>
          <Text style={styles.newsListTime}>5 hours ago</Text>
        </View>
      </View>
    );
  };
  const renderHeaderComponent = title => {
    return (
      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <View style={styles.seeAllView}>
          <Text style={styles.seeAllText}>See All </Text>
          <Image source={ICONS.arrowRight} />
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={COLORS.primary} />
      <ScrollView ref={scrollRef}>
        <View style={styles.headerView}>
          <Text style={styles.headerTitle}>News</Text>
          <TouchableOpacity>
            <Image source={ICONS.search} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={[{categoryName: 'All'}, ...EventCategories]}
          renderItem={renderCategoryItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />
        <Section
          title="Recent News"
          data={new Array(4).fill(IMAGES.todaysEvent)}
          renderItem={renderNews}
        />
        <FlatList
          data={EventCategories}
          renderItem={renderCategories}
          scrollEnabled={false}
          style={styles.flatList}
          ListHeaderComponent={() => renderHeaderComponent('SPORTS')}
        />
        <FlatList
          data={EventCategories}
          renderItem={renderCategories}
          scrollEnabled={false}
          style={styles.flatList}
          ListHeaderComponent={() => renderHeaderComponent('MUSIC')}
        />
        <FlatList
          data={EventCategories}
          renderItem={renderCategories}
          scrollEnabled={false}
          style={styles.flatList}
          ListHeaderComponent={() => renderHeaderComponent('FOOD')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default News;
