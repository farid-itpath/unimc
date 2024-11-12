import React from 'react';
import {Modal, Text, View, Image, TouchableHighlight} from 'react-native';
import Pinchable from 'react-native-pinchable';
import {styles} from './style';
import {BASE_URL, COLORS} from '../../utils/constants';
import {ICONS} from '../../assets';

const ImagePreviewModal = ({visible, closeModal, imageUrl, title}) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={closeModal}
      statusBarTranslucent>
      <View style={styles.modalView}>
        <View>
          <View style={styles.header}>
            <View style={styles.headerEmptyView} />
            <Text style={styles.headerTitle}>{title || 'Preview'}</Text>
            <TouchableHighlight
              onPress={closeModal}
              style={styles.closeIconView}
              underlayColor={COLORS.primaryExtraLight}>
              <Image source={ICONS.close} style={styles.closeIcon} />
            </TouchableHighlight>
          </View>
          <View style={styles.imageView}>
            {imageUrl && (
              <Pinchable>
                <Image
                  source={{uri: `${BASE_URL}${imageUrl}`}}
                  style={styles.image}
                />
              </Pinchable>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ImagePreviewModal;
