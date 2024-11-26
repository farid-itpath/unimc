import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {styles} from './style';
import {BASE_URL, COLORS} from '../../utils/constants';
import {ICONS} from '../../assets';
import {useVideoList} from './useVideoList';
import VideoPreviewModal from '../../components/VideoPreviewModal';

const VideoList = () => {
  const {
    videos,
    isModalVisible,
    selectedVideo,
    t,
    handlePressVideo,
    closeModal,
    handlePressBack,
  } = useVideoList();

  const renderVideoItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => handlePressVideo(item?.path)}>
        <View style={styles.imageCard}>
          <Image
            source={{uri: `${BASE_URL}${item?.video_thumbnail_path}`}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <Image source={ICONS.play} style={styles.playButton} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar
        backgroundColor={COLORS.extraLightGrey}
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <View style={styles.headerView}>
          <TouchableHighlight
            onPress={handlePressBack}
            underlayColor={COLORS.primaryExtraLight}
            style={styles.backIconView}>
            <Image source={ICONS.back} style={styles.backIcon} />
          </TouchableHighlight>
          <Text style={styles.headerTitle}>{t('videos')}</Text>
          <TouchableOpacity />
        </View>
        <FlatList
          data={videos}
          renderItem={renderVideoItem}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.grid}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <VideoPreviewModal
        visible={isModalVisible}
        closeModal={closeModal}
        videoUrl={selectedVideo}
      />
    </SafeAreaView>
  );
};

export default VideoList;
