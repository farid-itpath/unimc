import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import Video, {videoRef} from 'react-native-video';
import {styles} from './style';
import {COLORS} from '../../utils/constants';
import {ICONS} from '../../assets';
import {useNavigation} from '@react-navigation/native';

const VideoPlay = ({route}) => {
  const navigation = useNavigation();
  const handlePressBack = () => navigation.goBack();
  const {t} = useTranslation();
  const params = route.params;
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={COLORS.black} barStyle="light-content" />
      <View style={styles.container}>
        <View style={styles.headerView}>
          <TouchableHighlight
            onPress={handlePressBack}
            underlayColor={COLORS.primaryExtraLight}
            style={styles.backIconView}>
            <Image source={ICONS.back} style={styles.backIcon} />
          </TouchableHighlight>
          <Text style={styles.headerTitle}>{t('video')}</Text>
          <TouchableOpacity />
        </View>
        <Video
          source={{uri: params?.videoUrl}}
          ref={videoRef}
          style={styles.video}
          alwaysShowControl
          resizeMode="contain"
          controls={true}
        />
      </View>
    </SafeAreaView>
  );
};

export default VideoPlay;