import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearEvent, getEvent} from '../../redux/reducres/eventsSlice';
import {BASE_URL, SCREENS} from '../../utils/constants';
import {useTranslation} from 'react-i18next';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import {Alert, Linking, Platform} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

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
    // setVideoModalVisible(true);
    navigation.navigate(SCREENS.VIDEOPLAY.name, {
      videoUrl: `${BASE_URL}${url}`,
    });
    setSelectedVideo(url);
  };
  const handleCloseVideoModal = () => {
    setVideoModalVisible(false);
  };
  const handleSeeAllImages = () =>
    navigation.navigate(SCREENS.IMAGELIST.name, {data: images});
  const handleSeeAllVideos = () =>
    navigation.navigate(SCREENS.VIDEOLIST.name, {data: videos});
  const showPermissionAlert = () => {
    Alert.alert(
      'Permission Denied',
      'You need to enable location permissions to use this feature.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'Go to Settings',
          onPress: () => {
            if (Platform.OS === 'ios') {
              Linking.openSettings();
            } else {
              Linking.openSettings();
            }
          },
        },
      ],
      {cancelable: false},
    );
  };
  const requestLocationPermission = async () => {
    let permission;

    if (Platform.OS === 'ios') {
      permission = PERMISSIONS.IOS.LOCATION_WHEN_IN_USE;
    } else {
      permission = PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
    }

    const result = await request(permission);

    if (result === RESULTS.GRANTED) {
      console.log('Location permission granted');
    } else {
      console.log('Location permission denied');
      showPermissionAlert();
      // Alert.alert(
      //   'Permission Denied',
      //   'You need to enable location permissions to use this feature.',
      // );
    }
  };
  const handlePressLocation = async () => {
    const granted = await check(
      Platform.select({
        ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
        android: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      }),
    );
    if (granted === 'granted') {
      Geolocation.getCurrentPosition(location => {
        const locationQuery = encodeURIComponent(event?.location);
        const url = `https://www.google.com/maps/dir/?api=1&origin=${location?.coords?.latitude},${location?.coords?.longitude}&destination=${locationQuery}`;
        Linking.openURL(url).catch(err =>
          console.error('Error opening map', err),
        );
      });
    } else {
      requestLocationPermission();
    }
  };
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
    handleSeeAllVideos,
    handlePressLocation,
  };
};
