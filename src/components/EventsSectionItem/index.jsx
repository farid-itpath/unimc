import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Skeleton from 'react-native-reanimated-skeleton';
import {BASE_URL} from '../../utils/constants';
import {getEventDate} from '../../utils/helper';
import {layout, styles} from './style';
import {ICONS} from '../../assets';

const EventsSectionItem = ({item, onPress}) => {
  return item ? (
    <TouchableOpacity onPress={onPress} style={styles.eventView}>
      <Image
        source={{uri: `${BASE_URL}${item?.thumbnail_image}`}}
        style={styles.eventImage}
      />
      <View style={styles.eventDataView}>
        <Text style={styles.eventDate}>
          {getEventDate(item?.event_date).date}
        </Text>
        <Text style={styles.eventMonth}>
          {getEventDate(item?.event_date).month}
        </Text>
      </View>
      <Text style={styles.eventTitle} numberOfLines={1}>
        {item?.title}
      </Text>
      <View style={styles.eventAddressView}>
        <Image source={ICONS.location} style={styles.eventLocationIcon} />
        <Text style={styles.eventAddressText} numberOfLines={1}>
          {item?.location}
        </Text>
      </View>
    </TouchableOpacity>
  ) : (
    <Skeleton isLoading layout={[layout]} />
  );
};

export default EventsSectionItem;
