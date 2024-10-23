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
import {useEvents} from './useEvents';
import Section from '../../components/Section';

const Events = () => {
  const {selectedCategory, scrollRef, handleSelectCategory} = useEvents();
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
  const renderEvents = ({item, index}) => {
    return (
      <View style={styles.eventView} key={index}>
        <Image source={item} style={styles.eventImage} />
        <View style={styles.eventDataView}>
          <Text style={styles.eventDate}>10</Text>
          <Text style={styles.eventMonth}>JUNE</Text>
        </View>
        <Text style={styles.eventTitle}>Appassionata concerts</Text>
        <View style={styles.eventAddressView}>
          <Image source={ICONS.location} style={styles.eventLocationIcon} />
          <Text style={styles.eventAddressText}>Lauro Rossi Theatre, Mac</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={COLORS.primary} />
      <ScrollView ref={scrollRef}>
        <View style={styles.headerView}>
          <Text style={styles.headerTitle}>Events</Text>
          <TouchableOpacity>
            <Image source={ICONS.search} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={[{categoryName: 'ALL'}, ...EventCategories]}
          renderItem={renderCategoryItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />
        <Section
          title="Recent Events"
          data={new Array(4).fill(IMAGES.todaysEvent)}
          renderItem={renderEvents}
        />
        <Section
          title="SPORTS"
          data={new Array(4).fill(IMAGES.upcomingEvent)}
          renderItem={renderEvents}
        />
        <Section
          title="MUSIC"
          data={new Array(4).fill(IMAGES.categoryImage)}
          renderItem={renderEvents}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Events;
