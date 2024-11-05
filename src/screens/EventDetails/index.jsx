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
import {styles} from './style';
import {ICONS, IMAGES} from '../../assets';
import Section from '../../components/Section';
import {useEventDetails} from './useEventDetails';
import {IMAGES_BASE_URL} from '../../utils/constants';
import Skeleton from 'react-native-reanimated-skeleton';

const EventDetails = () => {
  const {event, handlePressBack, getEventDate, getEventTime} =
    useEventDetails();
  const renderImages = ({item, index}) => {
    return (
      <Skeleton isLoading={!item} key={index}>
        <Image
          source={{uri: `${IMAGES_BASE_URL}${item?.path}`}}
          style={styles.listImage}
        />
      </Skeleton>
    );
  };
  const renderVideos = ({item, index}) => {
    return (
      <Skeleton isLoading={!item} key={index}>
        <Image
          source={{uri: `${IMAGES_BASE_URL}${item?.path}`}}
          style={styles.listImage}
        />
      </Skeleton>
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
            <Image
              source={{uri: `${IMAGES_BASE_URL}${event?.thumbnail_image}`}}
              style={styles.headerImage}
            />
            <View style={styles.innerHeaderView}>
              <View style={styles.screenHeaderView}>
                <TouchableHighlight
                  onPress={handlePressBack}
                  style={styles.backIconView}
                  underlayColor="rgba(255,255,255,0.3)">
                  <Image source={ICONS.arrowLeft} style={styles.back} />
                </TouchableHighlight>
                <Text style={styles.screenHeaderText}>{event?.title}</Text>
              </View>
              <TouchableOpacity>
                <Image source={ICONS.qr} style={styles.qrIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.eventCategoriesView}>
            <Image
              source={{
                uri: `${IMAGES_BASE_URL}${event?.event_category?.icon_image}`,
              }}
              style={styles.eventCategoriesImage}
            />
            <Text style={styles.eventCategoryTitle}>
              {event?.event_category?.title}
            </Text>
          </View>
          <View style={styles.eventDetailsView}>
            <Text style={styles.eventTitle}>{event?.title}</Text>
            <View style={styles.venueDetailView}>
              <View style={styles.venueIconView}>
                <Image source={ICONS.events} style={styles.venueIcon} />
              </View>
              <View style={styles.venueTexts}>
                <Text style={styles.venueFirstText}>
                  {getEventDate(event?.event_date)}
                </Text>
                <Text style={styles.venueSecondText}>
                  {getEventTime(event?.event_date)}
                </Text>
              </View>
            </View>
            <View style={styles.venueDetailView}>
              <View style={styles.venueIconView}>
                <Image source={ICONS.location} style={styles.venueIcon} />
              </View>
              <View style={styles.venueTexts}>
                <Text style={styles.venueFirstText}>Lauro Rossi Theatre</Text>
                <Text style={styles.venueSecondText}>{event?.location}</Text>
              </View>
            </View>
          </View>
          <View style={styles.eventInfoView}>
            <Text style={styles.eventInfoTitle}>ABOUT EVENT</Text>
            <Text style={styles.aboutText}>{event?.description}</Text>
          </View>
          <Section
            data={event?.event_assets?.filter(
              item => item?.media_type === 'image',
            )}
            renderItem={renderImages}
            title={() => <Text style={styles.eventInfoTitle}>IMAGES</Text>}
          />
          <Section
            data={event?.event_assets?.filter(
              item => item?.media_type === 'video',
            )}
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
                <Text style={styles.organizerFirstText}>
                  {event?.creator?.first_name} {event?.creator?.last_name}
                </Text>
                <Text style={styles.organizerSecondText}>Organizer</Text>
                <Text style={styles.organizerSecondText}>
                  Published on: {getEventDate(event?.createdAt)}
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
