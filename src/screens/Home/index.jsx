import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {styles} from './style';
import {COLORS} from '../../utils/constants';
import {ICONS, IMAGES} from '../../assets';
import {EventCategories} from '../../utils/data';
import Section from '../../components/Section';

const Home = () => {
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
  const renderEventCategories = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.eventCategoriesView} key={index}>
        <Image source={item.icon} style={styles.eventCategoriesImage} />
        <Text style={styles.eventCategoryTitle}>{item.categoryName}</Text>
      </TouchableOpacity>
    );
  };
  const renderCategories = ({item, index}) => {
    return (
      <View style={styles.eventListView}>
        <Image source={IMAGES.categoryImage} style={styles.eventListImage} />
        <View style={styles.eventListDetails}>
          <View>
            <Text style={styles.eventListTitle}>Sports</Text>
            <Text style={styles.eventListDesc}>
              Women's leadership conference
            </Text>
          </View>
          <Text style={styles.eventListTime}>5 hours ago</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={COLORS.primary} />
      <ScrollView>
        <View style={styles.headerView}>
          <View />
          <Image source={IMAGES.logoHome} style={styles.logo} />
          <TouchableOpacity>
            <Image source={ICONS.search} />
          </TouchableOpacity>
        </View>
        <Section
          title="Today's Events"
          data={new Array(4).fill(IMAGES.todaysEvent)}
          renderItem={renderEvents}
        />
        <Section
          title="Event Categories"
          data={EventCategories}
          renderItem={renderEventCategories}
        />
        <Section
          title="Upcoming Events"
          data={new Array(4).fill(IMAGES.upcomingEvent)}
          renderItem={renderEvents}
        />
        <FlatList
          data={EventCategories}
          renderItem={renderCategories}
          scrollEnabled={false}
          style={styles.flatList}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
