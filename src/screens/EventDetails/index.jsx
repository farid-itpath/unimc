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
import Skeleton from 'react-native-reanimated-skeleton';
import RenderHTML from 'react-native-render-html';
import {layout, styles} from './style';
import {ICONS} from '../../assets';
import Section from '../../components/Section';
import {useEventDetails} from './useEventDetails';
import {BASE_URL, tagsStyles} from '../../utils/constants';
import ImagePreviewModal from '../../components/ImagePreviewModal';
import VideoPreviewModal from '../../components/VideoPreviewModal';
import RenderedImage from './RenderedImage';
import RenderVideo from './RenderVideo';

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
    handleSeeAllVideos,
    handlePressLocation,
  } = useEventDetails();
  const renderImages = ({item, index}) => {
    return (
      <RenderedImage
        item={item}
        key={index}
        handleImagePress={handleImagePress}
      />
    );
  };
  const renderVideos = ({item, index}) => {
    return (
      <RenderVideo
        item={item}
        key={index}
        handleVideoPress={handleVideoPress}
      />
    );
  };
  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle="light-content"
          translucent
        />
      </SafeAreaView>
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
              <Text style={styles.screenHeaderText} numberOfLines={2}>
                {event?.title}
              </Text>
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
              <TouchableOpacity
                onPress={handlePressLocation}
                style={styles.venueTexts}>
                <Text style={styles.venueFirstText} numberOfLines={1}>
                  {event?.location?.split(',')[0]}
                </Text>
                <Text style={styles.venueSecondText} numberOfLines={1}>
                  {event?.location?.split(',').slice(1).join(',')}
                </Text>
              </TouchableOpacity>
            ) : (
              <Skeleton layout={[layout.eventDetails]} />
            )}
          </View>
        </View>
        <View style={styles.eventInfoView}>
          <Text style={styles.eventInfoTitle}>{t('about_event')}</Text>
          {event ? (
            <View>
              <RenderHTML
                contentWidth={1}
                source={{html: event?.description}}
                tagsStyles={tagsStyles}
              />
            </View>
          ) : (
            <Skeleton layout={[layout.descriptionLayout]} />
          )}
        </View>
        {images?.length ? (
          <Section
            data={images}
            renderItem={renderImages}
            title={() => (
              <Text style={styles.eventInfoTitle}>{t('images')}</Text>
            )}
            onPressSeeAll={handleSeeAllImages}
          />
        ) : (
          <Section
            data={new Array(4).fill(null)}
            renderItem={renderImages}
            title={() => (
              <Text style={styles.eventInfoTitle}>{t('images')}</Text>
            )}
          />
        )}
        {videos?.length ? (
          <Section
            data={videos}
            renderItem={renderVideos}
            title={() => (
              <Text style={styles.eventInfoTitle}>{t('videos')}</Text>
            )}
            onPressSeeAll={handleSeeAllVideos}
          />
        ) : (
          <Section
            data={new Array(4).fill(null)}
            renderItem={renderImages}
            title={() => (
              <Text style={styles.eventInfoTitle}>{t('videos')}</Text>
            )}
          />
        )}
        <View style={styles.eventInfoView}>
          <Text style={styles.eventInfoTitle}>{t('organizer')}</Text>
          <View style={styles.organizerDetailView}>
            {event ? (
              <Image
                source={
                  event?.creator?.profile_image
                    ? {uri: `${BASE_URL}${event?.creator?.profile_image}`}
                    : ICONS.publisher
                }
                style={styles.organizerImage}
              />
            ) : (
              <View>
                <Skeleton layout={[layout.publisherImageLayout]} />
              </View>
            )}
            <View style={styles.organizerTexts}>
              {event ? (
                <View>
                  <Text style={styles.organizerFirstText}>
                    {event?.creator?.first_name} {event?.creator?.last_name}
                  </Text>
                  <Text style={styles.organizerSecondText}>
                    {t('organizer')}
                  </Text>
                  <Text style={styles.organizerSecondText}>
                    {t('published_on')}: {getEventDate(event?.publishedAt)}
                  </Text>
                </View>
              ) : (
                <View
                  style={{
                    alignItems: 'flex-start',
                  }}>
                  <Skeleton layout={[layout.publisherTextLayout]} />
                  <Skeleton layout={[layout.publisherTextLayout]} />
                  <Skeleton layout={[layout.publisherTextLayout]} />
                </View>
              )}
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
    </>
  );
};

export default EventDetails;
