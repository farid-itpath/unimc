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
import NewsSectionItem from '../../components/NewsSectionItem';
import CategoryItem from '../../components/CategoryItem';
import FlatListItem from '../../components/FlatListItem';

const News = () => {
  const {
    selectedCategory,
    scrollRef,
    events,
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
      <NewsSectionItem item={item} onPress={handlePressNews} index={index} />
    );
  };
  const renderCategories = ({item, index}) => {
    return <FlatListItem item={item} onPress={handlePressNews} />;
  };
  const renderHeaderComponent = title => {
    return (
      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity style={styles.seeAllView} onPress={handlePressSeeAll}>
          <Text style={styles.seeAllText}>See All </Text>
          <Image source={ICONS.arrowRight} style={styles.arrowRight} />
        </TouchableOpacity>
      </View>
    );
  };
  const renderEmptyComponent = () => {
    return (
      <View style={styles.listEmptyComponent}>
        <Text style={styles.listEmptyComponentText}>No data found</Text>
      </View>
    );
  };
  return (
    <>
      <SafeAreaView style={styles.statusBarSafeArea} />
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar backgroundColor={COLORS.primary} />
        <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
          <View style={styles.headerView}>
            <Text style={styles.headerTitle}>News</Text>
            <TouchableOpacity onPress={handlePressSearch}>
              <Image source={ICONS.search} style={styles.searchIcon} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={[{icon_image: '', title: 'All'}, ...(events || [])]}
            renderItem={renderCategoryItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
          />
          <Section
            title="Recent News"
            data={new Array(4).fill(IMAGES.todaysEvent)}
            renderItem={renderNews}
            onPressSeeAll={handlePressSeeAll}
          />
          <FlatList
            data={EventCategories || new Array(2).fill()}
            renderItem={renderCategories}
            scrollEnabled={false}
            style={styles.flatList}
            ListHeaderComponent={() => renderHeaderComponent('SPORTS')}
            ListEmptyComponent={renderEmptyComponent}
          />
          <FlatList
            data={EventCategories || new Array(2).fill()}
            renderItem={renderCategories}
            scrollEnabled={false}
            style={styles.flatList}
            ListHeaderComponent={() => renderHeaderComponent('MUSIC')}
            ListEmptyComponent={renderEmptyComponent}
          />
          <FlatList
            data={EventCategories || new Array(2).fill()}
            renderItem={renderCategories}
            scrollEnabled={false}
            style={styles.flatList}
            ListHeaderComponent={() => renderHeaderComponent('FOOD')}
            ListEmptyComponent={renderEmptyComponent}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default News;
