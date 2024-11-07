import React, {useState} from 'react';
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
import {layout, styles} from './style';
import {ICONS, IMAGES} from '../../assets';
import Section from '../../components/Section';
import {useEventDetails} from './useEventDetails';
import {IMAGES_BASE_URL} from '../../utils/constants';
import Skeleton from 'react-native-reanimated-skeleton';
import Video from 'react-native-video';

const EventDetails = () => {
  const {event, handlePressBack, getEventDate, getEventTime, handleVideoError} =
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
        <Video
          source={{uri: `${IMAGES_BASE_URL}${item?.path}`}}
          onError={handleVideoError}
          style={styles.listVideo}
          resizeMode="stretch"
          paused={true}
        />
      </Skeleton>
    );
  };
  const images = event?.event_assets?.filter(
    item => item?.media_type === 'image',
  );
  const videos = event?.event_assets?.filter(
    item => item?.media_type === 'video',
  );
  return (
    <>
      <SafeAreaView style={styles.statusBarSafeArea} />
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle="light-content"
          translucent
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
            {event ? (
              <Text style={styles.eventTitle}>{event?.title}</Text>
            ) : (
              <Skeleton layout={[layout.eventDetails]} />
            )}
            <View style={styles.venueDetailView}>
              <View style={styles.venueIconView}>
                <Image source={ICONS.events} style={styles.venueIcon} />
              </View>
              {event ? (
                <View style={styles.venueTexts}>
                  <Text style={styles.venueFirstText}>
                    {getEventDate(event?.event_date)}
                  </Text>
                  <Text style={styles.venueSecondText}>
                    {getEventTime(event?.event_date)}
                  </Text>
                </View>
              ) : (
                <Skeleton layout={[layout.eventDetails]} />
              )}
            </View>
            <View style={styles.venueDetailView}>
              <View style={styles.venueIconView}>
                <Image source={ICONS.location} style={styles.venueIcon} />
              </View>
              {event ? (
                <View style={styles.venueTexts}>
                  <Text style={styles.venueFirstText} numberOfLines={1}>
                    {event?.location?.split(',')[0]}
                  </Text>
                  <Text style={styles.venueSecondText} numberOfLines={1}>
                    {event?.location?.split(',').slice(1).join(',')}
                  </Text>
                </View>
              ) : (
                <Skeleton layout={[layout.eventDetails]} />
              )}
            </View>
          </View>
          <View style={styles.eventInfoView}>
            <Text style={styles.eventInfoTitle}>ABOUT EVENT</Text>
            {event ? (
              <Text style={styles.aboutText}>{event?.description}</Text>
            ) : (
              <Skeleton layout={[layout.descriptionLayout]} />
            )}
          </View>
          {images?.length && (
            <Section
              data={images}
              renderItem={renderImages}
              title={() => <Text style={styles.eventInfoTitle}>IMAGES</Text>}
            />
          )}
          {videos?.length && (
            <Section
              data={videos}
              renderItem={renderVideos}
              title={() => <Text style={styles.eventInfoTitle}>VIDEOS</Text>}
            />
          )}
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
