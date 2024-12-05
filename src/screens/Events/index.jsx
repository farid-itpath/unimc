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
import {useEvents} from './useEvents';
import Section from '../../components/Section';
import CategoryItem from '../../components/CategoryItem';
import EventsSectionItem from '../../components/EventsSectionItem';

const Events = () => {
  const {
    selectedCategory,
    categories,
    categoriesError,
    categoriesLoading,
    events,
    upcomingEvents,
    eventsLoading,
    eventsError,
    t,
    handleSelectCategory,
    handlePressSeeAll,
    handlePressSearch,
    handlePressEvent,
  } = useEvents();
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
  const renderEvents = ({item, index}) => {
    return (
      <EventsSectionItem
        item={item}
        onPress={() => handlePressEvent(item?.id)}
        key={index}
      />
    );
  };
  return (
    <>
      <SafeAreaView style={styles.statusBarSafeArea} />
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar backgroundColor={COLORS.primary} />
        <View style={styles.headerView}>
          <Text style={styles.headerTitle}>{t('events')}</Text>
          <TouchableOpacity onPress={handlePressSearch}>
            <Image source={ICONS.search} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollView}>
          <FlatList
            data={[{icon_image: '', title: t('all')}, ...(categories || [])]}
            renderItem={renderCategoryItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
          />
          <Section
            title={t('recent_events')}
            data={upcomingEvents}
            renderItem={renderEvents}
            onPressSeeAll={() => handlePressSeeAll(t('recent_events'))}
            showFooterComponent={true}
          />
          {selectedCategory === 0 ? (
            categories?.map((category, index) => {
              const categoryData = events?.filter(
                event => event?.event_category?.title === category?.title,
              );
              return categoryData?.length ? (
                <Section
                  title={() => (
                    <Text style={styles.sectionTitle}>{category?.title}</Text>
                  )}
                  data={events?.filter(
                    event => event?.event_category?.title === category?.title,
                  )}
                  renderItem={renderEvents}
                  onPressSeeAll={() => handlePressSeeAll(category?.title)}
                  key={index}
                  showFooterComponent={true}
                />
              ) : null;
            })
          ) : (
            <Section
              title={() => (
                <Text style={styles.sectionTitle}>
                  {categories[selectedCategory - 1]?.title}
                </Text>
              )}
              data={events?.filter(
                event =>
                  event?.event_category?.title ===
                  categories[selectedCategory - 1]?.title,
              )}
              renderItem={renderEvents}
              onPressSeeAll={() =>
                handlePressSeeAll(categories[selectedCategory - 1]?.title)
              }
              showFooterComponent={true}
            />
          )}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Events;
