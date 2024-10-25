import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';
import {styles} from './style';
import {ICONS, IMAGES} from '../../assets';
import {useNewsDetails} from './useNewsDetails';

const NewsDetails = () => {
  const {handlePressBack} = useNewsDetails();
  return (
    <>
      <SafeAreaView style={styles.statusBarSafeArea} />
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar
          backgroundColor={'rgba(0,0,0,0.5)'}
          barStyle="light-content"
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerView}>
            <Image source={IMAGES.todaysEvent} style={styles.headerImage} />
            <View style={styles.innerHeaderView}>
              <View style={styles.screenHeaderView}>
                <TouchableHighlight
                  onPress={handlePressBack}
                  style={styles.backIconView}
                  underlayColor="rgba(255,255,255,0.3)">
                  <Image source={ICONS.arrowLeft} style={styles.back} />
                </TouchableHighlight>
                <Text style={styles.screenHeaderText}>
                  Women's leadership con
                </Text>
              </View>
              <View style={styles.eventDataView}>
                <Text style={styles.eventDate}>10</Text>
                <Text style={styles.eventMonth}>JUNE</Text>
              </View>
            </View>
          </View>
          <View style={styles.eventCategoriesView}>
            <Image source={ICONS.music} style={styles.eventCategoriesImage} />
            <Text style={styles.eventCategoryTitle}>Music</Text>
          </View>
          <View style={styles.newsDetailsView}>
            <Text style={styles.newsTitle}>Women Leadership Conclave</Text>
            <Text style={styles.aboutText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the remaining
              essentially unchanged Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged
            </Text>
          </View>
          <View style={styles.newsDetailsView}>
            <Text style={styles.publishInfoTitle}>PUBLISHED</Text>
            <Text style={styles.publishDate}>14 JUNE, 2021 | 4:00PM</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default NewsDetails;
