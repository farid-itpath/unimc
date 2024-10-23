import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {styles} from './style';
import {COLORS} from '../../utils/constants';
import Carousel from './Carousel';
import Accordion from './Accordion';
import {useAbout} from './useAbout';
import {AboutSections} from '../../utils/data';

const About = () => {
  const {selectedCategory, scrollRef, handleSelectCategory} = useAbout();
  const renderCategoryItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => handleSelectCategory(index)}
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
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={COLORS.primary} />
      <ScrollView ref={scrollRef}>
        <View style={styles.headerView}>
          <Text style={styles.headerTitle}>About Macerata</Text>
        </View>
        <FlatList
          data={[{title: 'All'}, ...AboutSections]}
          renderItem={renderCategoryItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />
        <Carousel />
        <Accordion title="About Macerata" />
        <Accordion title="History of Macerata" />
        <Accordion title="Tourist of Macerata" />
        <Accordion title="Cultural routes of Macerata" />
        <Accordion title="Tours of Macerata" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
