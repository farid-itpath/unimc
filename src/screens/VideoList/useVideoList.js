import {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {BASE_URL, SCREENS} from '../../utils/constants';

export const useVideoList = () => {
  const {data: videos} = useRoute().params;
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigation = useNavigation();
  const {t} = useTranslation();

  const handlePressVideo = video => {
    navigation.navigate(SCREENS.VIDEOPLAY.name, {
      videoUrl: `${BASE_URL}${video}`,
    });
  };

  const closeModal = () => {
    setSelectedVideo(null);
    setModalVisible(false);
  };

  const handlePressBack = () => navigation.goBack();

  return {
    videos,
    isModalVisible,
    selectedVideo,
    t,
    handlePressVideo,
    closeModal,
    handlePressBack,
  };
};
