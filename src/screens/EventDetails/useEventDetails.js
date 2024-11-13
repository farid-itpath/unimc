import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearEvent, getEvent} from '../../redux/reducres/eventsSlice';
import {SCREENS} from '../../utils/constants';
import {useTranslation} from 'react-i18next';

export const useEventDetails = () => {
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const navigation = useNavigation();
  const {params} = useRoute();
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const {event} = useSelector(state => state.events);
  const handlePressBack = () => navigation.goBack();
  const getEventDate = date => {
    const d = new Date(date);
    if (date)
      return `${d.getDate()} ${new Intl.DateTimeFormat('en', {
        month: 'short',
      })
        .format(d)
        .toUpperCase()}, ${d.getFullYear()}`;
    else return '';
  };
  const getEventTime = date => {
    const d = new Date(date);
    if (date)
      return `${d.toLocaleDateString('en-US', {
        weekday: 'long',
      })}, ${d.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      })}`;
    else return '';
  };
  const handleVideoError = () => {
    console.log('Videi error');
  };
  const handleImagePress = ({url, title}) => {
    setImageModalVisible(true);
    setSelectedImage(url);
    setModalTitle(title);
  };
  const handleCloseImageModal = () => {
    setImageModalVisible(false);
  };
  const handleVideoPress = url => {
    setVideoModalVisible(true);
    setSelectedVideo(url);
  };
  const handleCloseVideoModal = () => {
    setVideoModalVisible(false);
  };
  const handleSeeAllImages = () =>
    navigation.navigate(SCREENS.IMAGELIST.name, {data: images});
  useEffect(() => {
    dispatch(getEvent(params?.eventId));
    return () => dispatch(clearEvent());
  }, []);
  const images = event?.event_assets?.filter(
    item => item?.media_type === 'image',
  );
  const videos = event?.event_assets?.filter(
    item => item?.media_type === 'video',
  );
  return {
    event,
    imageModalVisible,
    selectedImage,
    videoModalVisible,
    selectedVideo,
    modalTitle,
    images,
    t,
    videos,
    handlePressBack,
    getEventDate,
    getEventTime,
    handleVideoError,
    handleImagePress,
    handleCloseImageModal,
    handleCloseVideoModal,
    handleVideoPress,
    handleSeeAllImages,
  };
};
