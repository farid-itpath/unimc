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
import {useImageList} from './useImageList';
import ImagePreviewModal from '../../components/ImagePreviewModal';

const ImageList = () => {
  const {
    images,
    isModalVisible,
    selectedImage,
    handlePressImage,
    closeModal,
    handlePressBack,
  } = useImageList();

  const renderImageItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => handlePressImage(item?.path)}>
        <View style={styles.imageCard}>
          <Image
            source={{uri: `${BASE_URL}${item?.path}`}}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
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
          <Text style={styles.headerTitle}>Images</Text>
          <TouchableOpacity />
        </View>
        <FlatList
          data={images}
          renderItem={renderImageItem}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={styles.grid}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <ImagePreviewModal
        visible={isModalVisible}
        closeModal={closeModal}
        imageUrl={selectedImage}
      />
    </SafeAreaView>
  );
};

export default ImageList;
