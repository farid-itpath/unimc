import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Image,
  TouchableHighlight,
} from 'react-native';
import {styles} from './style';
import {COLORS} from '../../utils/constants';
import Carousel from './Carousel';
import Accordion from './Accordion';
import {useAbout} from './useAbout';
import {ICONS} from '../../assets';

const About = () => {
  const {
    selectedCategory,
    scrollRef,
    aboutData,
    aboutCategories,
    aboutBannerImages,
    t,
    handleSelectCategory,
    handleLayout,
    scrollToView,
    handlePressSettings,
  } = useAbout();
  const renderCategoryItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          handleSelectCategory(index);
          scrollToView(index);
        }}
        style={[
          styles.eventCategoriesView,
          {
            backgroundColor:
              index === selectedCategory ? COLORS.primary : COLORS.white,
          },
        ]}
        key={index}>
        <Text
          style={[
            styles.eventCategoryTitle,
            {
              color: index === selectedCategory ? COLORS.white : COLORS.primary,
            },
          ]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <SafeAreaView style={styles.statusBarSafeArea} />
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar backgroundColor={COLORS.primary} />
        <ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
          <View style={styles.headerView}>
            <Text style={styles.headerTitle}>{t('about_macerata')}</Text>
            <TouchableHighlight
              underlayColor={COLORS.primaryExtraLight}
              style={styles.settingsView}
              onPress={handlePressSettings}>
              <Image source={ICONS.settings} style={styles.settingsIcon} />
            </TouchableHighlight>
          </View>
          <FlatList
            data={['All', ...(aboutCategories || [])]}
            renderItem={renderCategoryItem}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.flatListContainer}
          />
          <Carousel data={aboutBannerImages} />
          {aboutData?.map((item, index) => {
            return (
              <Accordion
                title={item?.title}
                description={item?.description}
                key={index}
                onLayout={event => handleLayout(event, index)}
              />
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default About;
