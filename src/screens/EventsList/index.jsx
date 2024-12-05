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
import {ICONS, IMAGES} from '../../assets';
import {useEventsList} from './useEventsList';
import {styles} from './style';
import FlatListItem from '../../components/FlatListItem';
import {getEventDate} from '../../utils/helper';

const EventsList = () => {
  const {
    todaysEvents,
    upcomingEvents,
    events,
    screenTitle,
    t,
    handlePressSearch,
    handlePressBack,
    handlePressEvent,
  } = useEventsList();
  const renderEvents = ({item, index}) => {
    return (
      <FlatListItem
        item={item}
        itemImage={item?.thumbnail_image}
        itemTitle={item?.event_category?.title}
        itemDate={`${getEventDate(item?.event_date).date} - ${
          getEventDate(item?.event_date).month
        }`}
        itemDesc={item?.title}
        onPress={() => handlePressEvent(item?.id)}
        key={index}
      />
    );
  };
  const renderEmptyComponent = () => {
    return (
      <View style={styles.listEmptyComponent}>
        <Image source={IMAGES.noData} style={styles.noDataImage} />
        <Text style={styles.listEmptyComponentText}>{t('no_data_found')}</Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar
        backgroundColor={COLORS.extraLightGrey}
        barStyle="dark-content"
      />
      <View style={styles.headerView}>
        <TouchableHighlight
          onPress={handlePressBack}
          underlayColor={COLORS.primaryExtraLight}
          style={styles.backIconView}>
          <Image source={ICONS.back} style={styles.backIcon} />
        </TouchableHighlight>
        <Text style={styles.headerTitle}>{screenTitle}</Text>
        <TouchableOpacity onPress={handlePressSearch}>
          <Image source={ICONS.search} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}>
        <FlatList
          data={
            screenTitle === t('upcoming_events') ||
            screenTitle === t('recent_events')
              ? upcomingEvents
              : screenTitle === t('todays_events')
              ? todaysEvents
              : events?.filter(
                  event => event?.event_category?.title === screenTitle,
                )
          }
          renderItem={renderEvents}
          scrollEnabled={false}
          style={styles.flatList}
          ListEmptyComponent={renderEmptyComponent}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default EventsList;
