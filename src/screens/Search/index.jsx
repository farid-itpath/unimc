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
import {ICONS} from '../../assets';
import {EventCategories} from '../../utils/data';
import {useSearch} from './useSearch';
import FilterModal from './FilterModal';
import FlatListItem from '../../components/FlatListItem';

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
  const renderSearchResult = ({item, index}) => {
    return <FlatListItem item={item} onPress={handlePressResultItem} />;
  };
  const renderEmptyComponent = () => {
    return (
      <View style={styles.listEmptyComponent}>
        <Text style={styles.listEmptyComponentText}>No data found</Text>
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
          data={[EventCategories] || new Array(4).fill()}
          renderItem={renderSearchResult}
          scrollEnabled={false}
          style={styles.flatList}
          ListEmptyComponent={renderEmptyComponent}
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
