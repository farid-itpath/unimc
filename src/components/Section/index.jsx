import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {ICONS} from '../../assets';

const Section = ({data, renderItem, title, onPressSeeAll}) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHead}>
        {typeof title === 'string' ? (
          <Text style={styles.sectionTitle}>{title}</Text>
        ) : (
          title()
        )}
        <TouchableOpacity style={styles.seeAllView} onPress={onPressSeeAll}>
          <Text style={styles.seeAllText}>See All </Text>
          <Image source={ICONS.arrowRight} style={styles.arrowRight} />
        </TouchableOpacity>
      </View>
      <View style={styles.sectionBody}>
        <FlatList
          data={data}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
        />
      </View>
    </View>
  );
};

export default Section;
