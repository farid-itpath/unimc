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
    scrollRef,
    categories,
    categoriesError,
    categoriesLoading,
    events,
    eventsLoading,
    eventsError,
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
    return <EventsSectionItem item={item} onPress={handlePressEvent} />;
  };
  return (
    <>
      <SafeAreaView style={styles.statusBarSafeArea} />
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar backgroundColor={COLORS.primary} />
        <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
          <View style={styles.headerView}>
            <Text style={styles.headerTitle}>Events</Text>
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
            title="Recent Events"
            data={events}
            renderItem={renderEvents}
            onPressSeeAll={handlePressSeeAll}
          />
          <Section
            title={() => <Text style={styles.sectionTitle}>SPORTS</Text>}
            data={events}
            renderItem={renderEvents}
            onPressSeeAll={handlePressSeeAll}
          />
          <Section
            title={() => <Text style={styles.sectionTitle}>MUSIC</Text>}
            data={events}
            renderItem={renderEvents}
            onPressSeeAll={handlePressSeeAll}
          />
          <Section
            title={() => <Text style={styles.sectionTitle}>FOOD</Text>}
            data={events}
            renderItem={renderEvents}
            onPressSeeAll={handlePressSeeAll}
          />
          <Section
            title={() => <Text style={styles.sectionTitle}>ART</Text>}
            data={events}
            renderItem={renderEvents}
            onPressSeeAll={handlePressSeeAll}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Events;
