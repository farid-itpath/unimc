import React from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Text,
} from 'react-native';
import {styles} from './style';
import {COLORS} from '../../utils/constants';
import {ICONS, IMAGES} from '../../assets';
import Section from '../../components/Section';
import {useHome} from './useHome';
import CategoryItem from '../../components/CategoryItem';
import EventsSectionItem from '../../components/EventsSectionItem';
import FlatListItem from '../../components/FlatListItem';
import {heightScale, timeAgo} from '../../utils/helper';

const Home = () => {
  const {
    newsCategories,
    news,
    selectedNewsCategory,
    handlePressSeeAllNews,
    handleSelectNewsCategory,
    handlePressNews,

    eventCategories,
    eventCategoriesLoading,
    eventCategoriesError,

    selectedEventsCategory,
    handlePressSeeAllTodaysEvents,
    handlePressSeeAllUpcomingEvents,

    handlePressEvent,
    handleSelectEventsCategory,

    upcomingEvents,
    todaysEvents,

    t,

    handlePressSearch,
  } = useHome();
  const renderEvents = ({item, index}) => {
    return (
      <EventsSectionItem
        item={item}
        onPress={() => handlePressEvent(item?.id)}
        key={index}
      />
    );
  };
  const renderEventCategories = ({item, index}) => {
    return (
      <CategoryItem
        item={item}
        index={index}
        onPress={() => handleSelectEventsCategory(item?.title)}
        selectedCategory={false}
      />
    );
  };
  const renderNewsCategories = ({item, index}) => {
    return (
      <CategoryItem
        item={item}
        index={index}
        onPress={() => handleSelectNewsCategory(item?.title)}
        selectedCategory={false}
      />
    );
  };
  const renderNews = ({item, index}) => {
    return (
      <FlatListItem
        item={item}
        onPress={() => handlePressNews(item?.id)}
        key={index}
        itemImage={item?.news_image}
        itemTitle={item?.news_category?.title}
        itemDesc={item?.title}
        itemDate={timeAgo(item?.publishedAt, t)}
      />
    );
  };
  const renderHeaderComponent = title => {
    return (
      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <TouchableOpacity
          style={styles.seeAllView}
          onPress={handlePressSeeAllNews}>
          <Text style={styles.seeAllText}>{t('see_all')} </Text>
          <Image source={ICONS.arrowRight} style={styles.arrowRight} />
        </TouchableOpacity>
      </View>
    );
  };
  const renderEmptyComponent = () => {
    return (
      <View style={styles.listEmptyComponent}>
        <Image
          source={IMAGES.noData}
          style={{
            width: heightScale(6.5),
            height: heightScale(6.5),
          }}
        />
        <Text style={styles.listEmptyComponentText}>{t('no_data_found')}</Text>
      </View>
    );
  };
  return (
    <>
      <SafeAreaView style={styles.statusBarSafeArea} />
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar
          backgroundColor={COLORS.primary}
          translucent={false}
          barStyle={'light-content'}
        />
        <View style={styles.headerView}>
          <View style={styles.emptyView} />
          <Image source={IMAGES.logoHome} style={styles.logo} />
          <TouchableOpacity onPress={handlePressSearch}>
            <Image source={ICONS.search} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}>
          {!!todaysEvents?.length && (
            <Section
              title={t('todays_events')}
              data={todaysEvents}
              renderItem={renderEvents}
              onPressSeeAll={handlePressSeeAllTodaysEvents}
              showFooterComponent={true}
            />
          )}
          <Section
            title={t('event_categories')}
            data={eventCategories}
            renderItem={renderEventCategories}
            showFooterComponent={false}
          />
          <Section
            title={t('upcoming_events')}
            data={upcomingEvents}
            renderItem={renderEvents}
            onPressSeeAll={handlePressSeeAllUpcomingEvents}
            showFooterComponent={true}
          />
          <Section
            title={t('news_categories')}
            data={newsCategories}
            renderItem={renderNewsCategories}
            showFooterComponent={false}
          />
          <FlatList
            data={news || new Array(4).fill()}
            renderItem={renderNews}
            scrollEnabled={false}
            style={styles.flatList}
            ListHeaderComponent={() => renderHeaderComponent(t('news'))}
            ListEmptyComponent={renderEmptyComponent}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
