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
import {getEventDate, heightScale} from '../../utils/helper';
import {useTranslation} from 'react-i18next';

const EventsList = () => {
  const {t} = useTranslation();
  const {
    todaysEvents,
    upcomingEvents,
    events,
    screenTitle,
    handlePressSearch,
    handlePressBack,
    handlePressEvent,
  } = useEventsList();
  const renderEvents = ({item, index}) => {
    return (
      <FlatListItem
        item={item}
        itemImage={item?.thumbnail_image}
        itemTitle={item?.title}
        itemDate={`${getEventDate(item?.event_date).date} - ${
          getEventDate(item?.event_date).month
        }`}
        itemDesc={item?.description}
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
      <ScrollView showsVerticalScrollIndicator={false}>
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
        <FlatList
          data={
            screenTitle === 'Upcoming Events' || screenTitle === 'Recent Events'
              ? upcomingEvents
              : screenTitle === "Today's Events"
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
