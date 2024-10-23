import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {styles} from './style';
import {ICONS} from '../../../assets';

const Accordion = ({title}) => {
  const [collapsed, setCollapsed] = useState(true);
  return (
    <View style={styles.accordionView}>
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
        <Text style={styles.accordionDesc}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
        </Text>
      )}
    </View>
  );
};

export default Accordion;
