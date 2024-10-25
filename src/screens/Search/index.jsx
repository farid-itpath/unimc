import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native';
import {styles} from './style';
import {COLORS} from '../../utils/constants';
import {ICONS, IMAGES} from '../../assets';
import {EventCategories} from '../../utils/data';
import {useSearch} from './useSearch';
import FilterModal from './FilterModal';

const Search = () => {
  const {
    modalVisible,
    selectedOptions,
    handleOpenFilterModal,
    handleCloseFilterModal,
    toggleFitlerItem,
    handlePressBack,
    handlePressResultItem,
  } = useSearch();
  const renderCategories = ({item, index}) => {
    return (
      <TouchableOpacity
        style={styles.eventListView}
        onPress={handlePressResultItem}>
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
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar
        backgroundColor={COLORS.extraLightGrey}
        barStyle="dark-content"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.searchView}>
          <TouchableHighlight
            onPress={handlePressBack}
            underlayColor={COLORS.primaryExtraLight}
            style={styles.backIconView}>
            <Image source={ICONS.back} style={styles.backIcon} />
          </TouchableHighlight>
          <View style={styles.searchInputView}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor={COLORS.lightGrey}
            />
            <Image source={ICONS.search} style={styles.searchIcon} />
          </View>
        </View>
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={styles.filterView}
            onPress={handleOpenFilterModal}>
            <View style={styles.iconView}>
              <Image source={ICONS.filter} style={styles.filterIcon} />
            </View>
            <Text style={styles.filterText}>Filters</Text>
          </TouchableOpacity>
        </View>
        <FlatList
          data={EventCategories}
          renderItem={renderCategories}
          scrollEnabled={false}
          style={styles.flatList}
        />
        <FilterModal
          visible={modalVisible}
          closeModal={handleCloseFilterModal}
          selectedOptions={selectedOptions}
          toggleFitlerItem={toggleFitlerItem}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
