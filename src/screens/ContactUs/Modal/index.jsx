import React from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import {widthScale} from '../../../utils/helper';
import {styles} from './style';

const CustomModal = ({visible, onClose, AllowButtonText, message}) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <TouchableOpacity style={styles.modal} onPress={onClose}>
        <View style={styles.modalContent}>
          <Text style={styles.text}>{message}</Text>
          <View style={styles.viewStyle}>
            <TouchableOpacity
              style={[styles.buttonAllowStyle, {width: widthScale(1.5)}]}
              onPress={onClose}>
              <Text style={styles.buttonAllowText}>{AllowButtonText}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default CustomModal;
