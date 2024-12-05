import React from 'react';
import {
  Modal,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import {ICONS} from '../../../assets';
import {styles} from './style';
import {COLORS} from '../../../utils/constants';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

const FilterModal = ({
  visible,
  closeModal,
  selectedCategories,
  toggleFitlerItem,
  searchIn,
  onPressApply,
}) => {
  const {categories: eventCategories} = useSelector(state => state.events);
  const {categories: newsCategories} = useSelector(state => state.news);
  const {t} = useTranslation();
  const options =
    searchIn === 'Home'
      ? [
          {title: t('events'), data: eventCategories},
          {title: t('news'), data: newsCategories},
        ]
      : searchIn === 'Events'
      ? [{title: t('events'), data: eventCategories}]
      : searchIn === 'News'
      ? [{title: t('news'), data: newsCategories}]
      : null;
  return (
    <Modal
      animationType="fade"
      transparent={false}
      visible={visible}
      onRequestClose={closeModal}
      statusBarTranslucent>
      <View style={styles.modalView}>
        <View style={styles.header}>
          <View style={styles.headerEmptyView} />
          <Text style={styles.headerTitle}>{t('filters')}</Text>
          <TouchableHighlight
            onPress={closeModal}
            style={styles.closeIconView}
            underlayColor={COLORS.primaryExtraLight}>
            <Image source={ICONS.close} style={styles.closeIcon} />
          </TouchableHighlight>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {options?.map((item, index) => {
            return (
              <View style={styles.optionsContainer} key={index}>
                <Text style={styles.titleText}>{item?.title}</Text>
                <View style={styles.optionsRow}>
                  {item?.data?.map((category, index) => {
                    return (
                      <TouchableOpacity
                        key={index}
                        style={[
                          styles.optionView,
                          {
                            backgroundColor: selectedCategories.includes(
                              category?.id,
                            )
                              ? COLORS.primary
                              : COLORS.white,
                          },
                        ]}
                        onPress={() =>
                          toggleFitlerItem(item?.title, category?.id)
                        }>
                        {/* <View style={styles.selectedIconView} /> */}
                        <Text
                          numberOfLines={1}
                          style={[
                            styles.optionText,
                            {
                              color: selectedCategories.includes(category?.id)
                                ? COLORS.white
                                : COLORS.primary,
                            },
                          ]}>
                          {category?.title}
                        </Text>
                        {/* <View style={styles.selectedIconView}>
                          {selectedCategories.includes(category?.id) && (
                            <Image
                              source={ICONS.tick}
                              style={styles.selectedIcon}
                            />
                          )}
                        </View> */}
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.buttonApplyView}
            onPress={onPressApply}>
            <Text style={styles.buttonApplyTitle}>{t('apply')}</Text>
          </TouchableOpacity>
          <TouchableHighlight
            onPress={closeModal}
            style={styles.buttonCancelView}
            underlayColor={COLORS.primaryExtraLight}>
            <Text style={styles.buttonCancelTitle}>{t('cancel')}</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;
