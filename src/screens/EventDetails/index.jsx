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
import {layout, styles} from './style';
import {ICONS, IMAGES} from '../../assets';
import Section from '../../components/Section';
import {useEventDetails} from './useEventDetails';
import {BASE_URL} from '../../utils/constants';
import Skeleton from 'react-native-reanimated-skeleton';
import Video from 'react-native-video';
import ImagePreviewModal from '../../components/ImagePreviewModal';
import VideoPreviewModal from '../../components/VideoPreviewModal';

const EventDetails = () => {
  const {
    event,
    imageModalVisible,
    selectedImage,
    videoModalVisible,
    selectedVideo,
    modalTitle,
    images,
    videos,
    t,
    handlePressBack,
    getEventDate,
    getEventTime,
    handleVideoError,
    handleImagePress,
    handleCloseImageModal,
    handleCloseVideoModal,
    handleVideoPress,
    handleSeeAllImages,
  } = useEventDetails();
  const renderImages = ({item, index}) => {
    return (
      <Skeleton isLoading={!item} key={index}>
        <TouchableOpacity
          onPress={() => handleImagePress({url: item?.path, title: 'Preview'})}>
          <Image
            source={{uri: `${BASE_URL}${item?.path}`}}
            style={styles.listImage}
          />
        </TouchableOpacity>
      </Skeleton>
    );
  };
  const renderVideos = ({item, index}) => {
    return (
      <Skeleton isLoading={!item} key={index}>
        <TouchableOpacity onPress={() => handleVideoPress(item?.path)}>
          <Video
            source={{uri: `${BASE_URL}${item?.path}`}}
            onError={handleVideoError}
            style={styles.listVideo}
            resizeMode="stretch"
            paused={true}
          />
        </TouchableOpacity>
      </Skeleton>
    );
  };
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
            <View style={styles.headerImageView}>
              <Image
                source={{uri: `${BASE_URL}${event?.thumbnail_image}`}}
                style={styles.headerImage}
              />
            </View>
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
              <TouchableOpacity
                onPress={() =>
                  handleImagePress({
                    url: event?.qr_code_image,
                    title: 'QR Code',
                  })
                }>
                <Image source={ICONS.qr} style={styles.qrIcon} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.eventCategoriesView}>
            <Image
              source={{
                uri: `${BASE_URL}${event?.event_category?.icon_image}`,
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
            <Text style={styles.eventInfoTitle}>{t('about_event')}</Text>
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
              title={() => (
                <Text style={styles.eventInfoTitle}>{t('images')}</Text>
              )}
              onPressSeeAll={handleSeeAllImages}
            />
          )}
          {videos?.length && (
            <Section
              data={videos}
              renderItem={renderVideos}
              title={() => (
                <Text style={styles.eventInfoTitle}>{t('videos')}</Text>
              )}
              onPressSeeAll={() => console.log('hello')}
            />
          )}
          <View style={styles.eventInfoView}>
            <Text style={styles.eventInfoTitle}>{t('organizer')}</Text>
            <View style={styles.organizerDetailView}>
              <Image
                source={IMAGES.categoryImage}
                style={styles.organizerImage}
              />
              <View style={styles.organizerTexts}>
                <Text style={styles.organizerFirstText}>
                  {event?.creator?.first_name} {event?.creator?.last_name}
                </Text>
                <Text style={styles.organizerSecondText}>{t('organizer')}</Text>
                <Text style={styles.organizerSecondText}>
                  {t('published_on')}: {getEventDate(event?.createdAt)}
                </Text>
              </View>
            </View>
          </View>
          <ImagePreviewModal
            visible={imageModalVisible}
            closeModal={handleCloseImageModal}
            imageUrl={selectedImage}
            title={modalTitle}
          />
          <VideoPreviewModal
            visible={videoModalVisible}
            closeModal={handleCloseVideoModal}
            videoUrl={selectedVideo}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default EventDetails;
