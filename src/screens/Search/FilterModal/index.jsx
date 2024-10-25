import React from 'react';
import {
  Modal,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {ICONS} from '../../../assets';
import {styles} from './style';
import {COLORS} from '../../../utils/constants';

const FilterModal = ({
  visible,
  closeModal,
  selectedOptions,
  toggleFitlerItem,
}) => {
  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={visible}
      onRequestClose={closeModal}
      statusBarTranslucent>
      <View style={styles.modalView}>
        <View>
          <View style={styles.header}>
            <View style={styles.headerEmptyView} />
            <Text style={styles.headerTitle}>Filters</Text>
            <TouchableHighlight
              onPress={closeModal}
              style={styles.closeIconView}
              underlayColor={COLORS.primaryExtraLight}>
              <Image source={ICONS.close} style={styles.closeIcon} />
            </TouchableHighlight>
          </View>
          <View style={styles.optionsContainer}>
            <View style={styles.optionsRow}>
              <TouchableOpacity
                style={[
                  styles.optionView,
                  {
                    backgroundColor: selectedOptions.includes('Sports')
                      ? COLORS.primary
                      : COLORS.white,
                  },
                ]}
                onPress={() => toggleFitlerItem('Sports')}>
                <View style={styles.selectedIconView} />
                <Text
                  style={[
                    styles.optionText,
                    {
                      color: selectedOptions.includes('Sports')
                        ? COLORS.white
                        : COLORS.primary,
                    },
                  ]}>
                  Sports
                </Text>
                <View style={styles.selectedIconView}>
                  <Image source={ICONS.tick} style={styles.selectedIcon} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.optionView,
                  {
                    backgroundColor: selectedOptions.includes('Music')
                      ? COLORS.primary
                      : COLORS.white,
                  },
                ]}
                onPress={() => toggleFitlerItem('Music')}>
                <View style={styles.selectedIconView} />
                <Text
                  style={[
                    styles.optionText,
                    {
                      color: selectedOptions.includes('Music')
                        ? COLORS.white
                        : COLORS.primary,
                    },
                  ]}>
                  Music
                </Text>
                <View style={styles.selectedIconView}>
                  <Image source={ICONS.tick} style={styles.selectedIcon} />
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.optionsRow}>
              <TouchableOpacity
                style={[
                  styles.optionView,
                  {
                    backgroundColor: selectedOptions.includes('Food')
                      ? COLORS.primary
                      : COLORS.white,
                  },
                ]}
                onPress={() => toggleFitlerItem('Food')}>
                <View style={styles.selectedIconView} />
                <Text
                  style={[
                    styles.optionText,
                    {
                      color: selectedOptions.includes('Food')
                        ? COLORS.white
                        : COLORS.primary,
                    },
                  ]}>
                  Food
                </Text>
                <View style={styles.selectedIconView}>
                  <Image source={ICONS.tick} style={styles.selectedIcon} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.optionView,
                  {
                    backgroundColor: selectedOptions.includes('Art')
                      ? COLORS.primary
                      : COLORS.white,
                  },
                ]}
                onPress={() => toggleFitlerItem('Art')}>
                <View style={styles.selectedIconView} />
                <Text
                  style={[
                    styles.optionText,
                    {
                      color: selectedOptions.includes('Art')
                        ? COLORS.white
                        : COLORS.primary,
                    },
                  ]}>
                  Art
                </Text>
                <View style={styles.selectedIconView}>
                  <Image source={ICONS.tick} style={styles.selectedIcon} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonApplyView} onPress={closeModal}>
            <Text style={styles.buttonApplyTitle}>Apply</Text>
          </TouchableOpacity>
          <TouchableHighlight
            onPress={closeModal}
            style={styles.buttonCancelView}
            underlayColor={COLORS.primaryExtraLight}>
            <Text style={styles.buttonCancelTitle}>Cancel</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
