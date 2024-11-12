import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {styles} from './style';
import {ICONS} from '../../../assets';

const Accordion = ({title, description, onLayout}) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <View style={styles.accordionView} onLayout={onLayout}>
      <TouchableOpacity
        style={styles.accordionHeaderView}
        onPress={() => setCollapsed(prevState => !prevState)}>
        <Text style={styles.accordionTitle}>{title}</Text>
        <Image
          source={ICONS.arrowRight}
          style={[
            styles.collapseIcon,
            {transform: [{rotate: collapsed ? '0deg' : '90deg'}]},
          ]}
        />
      </TouchableOpacity>
      {collapsed && (
        <SkeletonPlaceholder enabled={false}>
          <Text style={styles.accordionDesc}>{description}</Text>
        </SkeletonPlaceholder>
      )}
    </View>
  );
};

export default Accordion;
