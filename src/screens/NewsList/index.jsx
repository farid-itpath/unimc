import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {COLORS} from '../../utils/constants';
import {ICONS, IMAGES} from '../../assets';
import {useNewsList} from './useNewsList';
import {styles} from './style';
import {EventCategories} from '../../utils/data';

const NewsList = () => {
  const {handlePressSearch, handlePressBack} = useNewsList();
  const renderCategories = ({item, index}) => {
    return (
      <View style={styles.eventListView}>
        <Image source={IMAGES.categoryImage} style={styles.eventListImage} />
        <View style={styles.eventListDetails}>
          <View>
            <Text style={styles.eventListTitle}>Sports</Text>
            <Text style={styles.eventListDesc}>
              Women's leadership conference
            </Text>
          </View>
          <Text style={styles.eventListTime}>5 hours ago</Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar
        backgroundColor={COLORS.extraLightGrey}
        barStyle="dark-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={handlePressBack}>
            <Image source={ICONS.back} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>News</Text>
          <TouchableOpacity onPress={handlePressSearch}>
            <Image source={ICONS.search} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={[...EventCategories, ...EventCategories]}
          renderItem={renderCategories}
          scrollEnabled={false}
          style={styles.flatList}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewsList;
