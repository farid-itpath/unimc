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
import {COLORS, SCREENS} from '../../utils/constants';
import {ICONS, IMAGES} from '../../assets';
import {EventCategories} from '../../utils/data';
import Section from '../../components/Section';
import {useHome} from './useHome';

const Home = ({navigation}) => {
  const {handlePressSearch, handlePressSeeAll, handlePressEvent} = useHome();
  const renderEvents = ({item, index}) => {
    return (
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
          <Text style={styles.eventAddressText}>Lauro Rossi Theatre, Mac</Text>
        </View>
      </TouchableOpacity>
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
      <TouchableOpacity style={styles.eventListView} onPress={handlePressEvent}>
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
      </TouchableOpacity>
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
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{backgroundColor: COLORS.extraLightGrey}}>
          <View style={styles.headerView}>
            <View style={styles.emptyView} />
            <Image source={IMAGES.logoHome} style={styles.logo} />
            <TouchableOpacity onPress={handlePressSearch}>
              <Image source={ICONS.search} style={styles.searchIcon} />
            </TouchableOpacity>
          </View>
          <Section
            title="Today's Events"
            data={new Array(4).fill(IMAGES.todaysEvent)}
            renderItem={renderEvents}
            onPressSeeAll={handlePressSeeAll}
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
            onPressSeeAll={handlePressSeeAll}
          />
          <FlatList
            data={EventCategories}
            renderItem={renderCategories}
            scrollEnabled={false}
            style={styles.flatList}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Home;
