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
  TouchableHighlight,
} from 'react-native';
import {COLORS} from '../../utils/constants';
import {ICONS} from '../../assets';
import {useEventsList} from './useEventsList';
import {styles} from './style';
import {EventCategories} from '../../utils/data';
import FlatListItem from '../../components/FlatListItem';

const EventsList = () => {
  const {handlePressSearch, handlePressBack, handlePressEvent} =
    useEventsList();
  const renderCategories = ({item, index}) => {
    return <FlatListItem item={item} onPress={handlePressEvent} />;
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
        <View style={styles.headerView}>
          <TouchableHighlight
            onPress={handlePressBack}
            underlayColor={COLORS.primaryExtraLight}
            style={styles.backIconView}>
            <Image source={ICONS.back} style={styles.backIcon} />
          </TouchableHighlight>
          <Text style={styles.headerTitle}>Events</Text>
          <TouchableOpacity onPress={handlePressSearch}>
            <Image source={ICONS.search} style={styles.searchIcon} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={[...EventCategories, ...EventCategories] || new Array(4).fill()}
          renderItem={renderCategories}
          scrollEnabled={false}
          style={styles.flatList}
          ListEmptyComponent={renderEmptyComponent}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventsList;
