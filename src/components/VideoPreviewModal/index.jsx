import React from 'react';
import {Modal, Text, View, Image, TouchableHighlight} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import {styles} from './style';
import {BASE_URL, COLORS} from '../../utils/constants';
import {ICONS} from '../../assets';

const VideoPreviewModal = ({visible, closeModal, videoUrl}) => {
  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={visible}
      onRequestClose={closeModal}
      statusBarTranslucent>
      <View style={styles.modalView}>
        <View style={{flex: 1}}>
          <View style={styles.header}>
            <View style={styles.headerEmptyView} />
            <Text style={styles.headerTitle}>{t('preview')}</Text>
            <TouchableHighlight
              onPress={closeModal}
              style={styles.closeIconView}
              underlayColor={COLORS.primaryExtraLight}>
              <Image source={ICONS.close} style={styles.closeIcon} />
            </TouchableHighlight>
          </View>
          <View style={styles.videoView}>
            {videoUrl && (
              <VideoPlayer
                source={{uri: `${BASE_URL}${videoUrl}`}}
                disableFullscreen
                disableBack
                disableVolume
              />
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default VideoPreviewModal;
