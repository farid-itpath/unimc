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
import {useSearch} from './useSearch';
import FilterModal from './FilterModal';
import FlatListItem from '../../components/FlatListItem';

const Search = () => {
  const {
    modalVisible,
    selectedEventCategories,
    selectedNewsCategories,
    searchInputRef,
    events,
    news,
    searchIn,
    t,
    handleOpenFilterModal,
    handleCloseFilterModal,
    toggleFitlerItem,
    handlePressBack,
    handlePressResultItem,
    handleChangeText,
    handlePressApply,
  } = useSearch();
  const renderEventsResult = ({item, index}) => {
    return (
      <FlatListItem
        item
        itemImage={item?.thumbnail_image}
        itemTitle={item?.title}
        itemDesc={item?.news_description}
        itemDate={item?.publishedAt}
        onPress={() => handlePressResultItem({type: 'event', id: item?.id})}
        key={index}
      />
    );
  };
  const renderNewsResult = ({item, index}) => {
    return (
      <FlatListItem
        item
        itemImage={item?.news_image}
        itemTitle={item?.title}
        itemDesc={item?.description}
        itemDate={item?.event_date}
        onPress={() => handlePressResultItem({type: 'news', id: item?.id})}
        key={index}
      />
    );
  };
  const renderEmptyComponent = () => {
    return (
      <View style={styles.listEmptyComponent}>
        <Text style={styles.listEmptyComponentText}>{t('no_data_found')}</Text>
      </View>
    );
  };
  const renderHeaderComponent = title => {
    return (
      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>{title}</Text>
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
              ref={searchInputRef}
              style={styles.searchInput}
              placeholder="Search"
              placeholderTextColor={COLORS.lightGrey}
              onChangeText={handleChangeText}
            />
            <Image source={ICONS.search} style={styles.searchIcon} />
          </View>
        </View>
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[
              styles.filterView,
              {
                backgroundColor:
                  !!selectedEventCategories?.length ||
                  !!selectedNewsCategories?.length
                    ? COLORS.primary
                    : COLORS.white,
              },
            ]}
            onPress={handleOpenFilterModal}>
            <View
              style={[
                styles.iconView,
                {
                  backgroundColor:
                    !!selectedEventCategories?.length ||
                    !!selectedNewsCategories?.length
                      ? COLORS.white
                      : COLORS.primary,
                },
              ]}>
              <Image
                source={ICONS.filter}
                style={[
                  styles.filterIcon,
                  {
                    tintColor:
                      !!selectedEventCategories?.length ||
                      !!selectedNewsCategories?.length
                        ? COLORS.primary
                        : COLORS.white,
                  },
                ]}
              />
            </View>
            <Text
              style={[
                styles.filterText,
                {
                  color:
                    !!selectedEventCategories?.length ||
                    !!selectedNewsCategories?.length
                      ? COLORS.white
                      : COLORS.primary,
                },
              ]}>
              {t('filters')}
            </Text>
          </TouchableOpacity>
        </View>
        {(searchIn === 'Home' || searchIn === 'Events') && events?.length ? (
          <FlatList
            data={events || new Array(4).fill()}
            renderItem={renderEventsResult}
            scrollEnabled={false}
            style={styles.flatList}
            ListEmptyComponent={renderEmptyComponent}
            ListHeaderComponent={() => renderHeaderComponent('Events')}
          />
        ) : null}
        {(searchIn === 'Home' || searchIn === 'News') && news?.length ? (
          <FlatList
            data={news || new Array(4).fill()}
            renderItem={renderNewsResult}
            scrollEnabled={false}
            style={styles.flatList}
            ListEmptyComponent={renderEmptyComponent}
            ListHeaderComponent={() => renderHeaderComponent('News')}
          />
        ) : null}
      </ScrollView>
      <FilterModal
        visible={modalVisible}
        closeModal={handleCloseFilterModal}
        selectedCategories={[
          ...selectedEventCategories,
          ...selectedNewsCategories,
        ]}
        toggleFitlerItem={toggleFitlerItem}
        searchIn={searchIn}
        onPressApply={handlePressApply}
      />
    </SafeAreaView>
  );
};

export default Search;
