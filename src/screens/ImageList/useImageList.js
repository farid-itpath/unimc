import {useNavigation, useRoute} from '@react-navigation/native';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';

export const useImageList = () => {
  const {data: images} = useRoute().params;
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigation = useNavigation();
  const {t} = useTranslation();

  const handlePressImage = image => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalVisible(false);
  };

  const handlePressBack = () => navigation.goBack();

  return {
    images,
    isModalVisible,
    selectedImage,
    t,
    handlePressImage,
    closeModal,
    handlePressBack,
  };
};
