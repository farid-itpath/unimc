import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {styles} from './style';
import {ICONS, IMAGES} from '../../assets';
import Section from '../../components/Section';
import {useEventDetails} from './useEventDetails';

const EventDetails = () => {
  const {handlePressBack} = useEventDetails();
  const renderImages = ({item, index}) => {
    return (
      <SkeletonPlaceholder enabled={false} key={index}>
        <Image source={item} style={styles.listImage} />
      </SkeletonPlaceholder>
    );
  };
  const renderVideos = ({item, index}) => {
    return (
      <SkeletonPlaceholder enabled={false} key={index}>
        <Image source={item} style={styles.listImage} />
      </SkeletonPlaceholder>
    );
  };
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
                  Appassionata concerts
                </Text>
              </View>
              <TouchableOpacity>
                <Image source={ICONS.qr} style={styles.qrIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.eventCategoriesView}>
            <Image source={ICONS.music} style={styles.eventCategoriesImage} />
            <Text style={styles.eventCategoryTitle}>Music</Text>
          </View>
          <View style={styles.eventDetailsView}>
            <Text style={styles.eventTitle}>Appassionata concerts</Text>
            <View style={styles.venueDetailView}>
              <View style={styles.venueIconView}>
                <Image source={ICONS.events} style={styles.venueIcon} />
              </View>
              <View style={styles.venueTexts}>
                <Text style={styles.venueFirstText}>14 JUNE, 2021</Text>
                <Text style={styles.venueSecondText}>
                  Tuesday, 4:00PM - 9:00PM
                </Text>
              </View>
            </View>
            <View style={styles.venueDetailView}>
              <View style={styles.venueIconView}>
                <Image source={ICONS.location} style={styles.venueIcon} />
              </View>
              <View style={styles.venueTexts}>
                <Text style={styles.venueFirstText}>Lauro Rossi Theatre</Text>
                <Text style={styles.venueSecondText}>Macerata, Italy</Text>
              </View>
            </View>
          </View>
          <View style={styles.eventInfoView}>
            <Text style={styles.eventInfoTitle}>ABOUT EVENT</Text>
            <Text style={styles.aboutText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type
            </Text>
          </View>
          <Section
            data={new Array(5).fill(IMAGES.categoryImage)}
            renderItem={renderImages}
            title={() => <Text style={styles.eventInfoTitle}>IMAGES</Text>}
          />
          <Section
            data={new Array(5).fill(IMAGES.categoryImage)}
            renderItem={renderVideos}
            title={() => <Text style={styles.eventInfoTitle}>VIDEOS</Text>}
          />
          <View style={styles.eventInfoView}>
            <Text style={styles.eventInfoTitle}>ORGANIZER</Text>
            <View style={styles.organizerDetailView}>
              <Image
                source={IMAGES.categoryImage}
                style={styles.organizerImage}
              />
              <View style={styles.organizerTexts}>
                <Text style={styles.organizerFirstText}>Ashfak Sayem</Text>
                <Text style={styles.organizerSecondText}>Organizer</Text>
                <Text style={styles.organizerSecondText}>
                  Published on: 14 November, 2021
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default EventDetails;
