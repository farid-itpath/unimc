import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {styles} from './style';
import {ICONS} from '../../../assets';

const Section = ({data, renderItem, title}) => {
  return (
    <View style={styles.section}>
      <View style={styles.sectionHead}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <View style={styles.seeAllView}>
          <Text style={styles.seeAllText}>See All </Text>
          <Image source={ICONS.arrowRight} />
        </View>
      </View>
      <View style={styles.sectionBody}>
        <FlatList
          data={data}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Section;
