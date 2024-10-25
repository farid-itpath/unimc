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
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {styles} from './style';
import {COLORS} from '../../utils/constants';
import {ICONS, IMAGES} from '../../assets';
import {EventCategories} from '../../utils/data';
import {useEvents} from './useEvents';
import Section from '../../components/Section';

const Events = () => {
  const {
    selectedCategory,
    scrollRef,
    handleSelectCategory,
    handlePressSeeAll,
    handlePressSearch,
    handlePressEvent,
  } = useEvents();
  const renderCategoryItem = ({item, index}) => {
    return (
      <SkeletonPlaceholder enabled={false}>
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
                color:
                  index === selectedCategory ? COLORS.white : COLORS.primary,
              },
            ]}>
            {item.categoryName}
          </Text>
        </TouchableOpacity>
      </SkeletonPlaceholder>
    );
  };
  const renderEvents = ({item, index}) => {
    return (
      <SkeletonPlaceholder enabled={false}>
        <TouchableOpacity
          style={styles.eventView}
          key={index}
          onPress={handlePressEvent}>
          <Image source={item} style={styles.eventImage} />
          <View style={styles.eventDataView}>
            <Text style={styles.eventDate}>10</Text>
            <Text style={styles.eventMonth}>JUNE</Text>
          </View>
          <Text style={styles.eventTitle}>Appassionata concerts</Text>
          <View style={styles.eventAddressView}>
            <Image source={ICONS.location} style={styles.eventLocationIcon} />
            <Text style={styles.eventAddressText}>
              Lauro Rossi Theatre, Mac
            </Text>
          </View>
        </TouchableOpacity>
      </SkeletonPlaceholder>
    );
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
            data={[{categoryName: 'All'}, ...EventCategories]}
            renderItem={renderCategoryItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
          />
          <Section
            title="Recent Events"
            data={new Array(4).fill(IMAGES.todaysEvent)}
            renderItem={renderEvents}
            onPressSeeAll={handlePressSeeAll}
          />
          <Section
            title={() => <Text style={styles.sectionTitle}>SPORTS</Text>}
            data={new Array(4).fill(IMAGES.upcomingEvent)}
            renderItem={renderEvents}
            onPressSeeAll={handlePressSeeAll}
          />
          <Section
            title={() => <Text style={styles.sectionTitle}>MUSIC</Text>}
            data={new Array(4).fill(IMAGES.categoryImage)}
            renderItem={renderEvents}
            onPressSeeAll={handlePressSeeAll}
          />
          <Section
            title={() => <Text style={styles.sectionTitle}>FOOD</Text>}
            data={new Array(4).fill(IMAGES.categoryImage)}
            renderItem={renderEvents}
            onPressSeeAll={handlePressSeeAll}
          />
          <Section
            title={() => <Text style={styles.sectionTitle}>ART</Text>}
            data={new Array(4).fill(IMAGES.categoryImage)}
            renderItem={renderEvents}
            onPressSeeAll={handlePressSeeAll}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Events;
