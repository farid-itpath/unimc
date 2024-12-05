import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import RenderHTML from 'react-native-render-html';
import {styles} from './style';
import {ICONS} from '../../../assets';
import {tagsStyles} from '../../../utils/constants';

const Accordion = ({
  title,
  description,
  onLayout,
  collapsed,
  toggleCollapse,
}) => {
  return (
    <View style={styles.accordionView} onLayout={onLayout}>
      <TouchableOpacity
        style={styles.accordionHeaderView}
        onPress={toggleCollapse}>
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
          <View style={{}}>
            <RenderHTML
              contentWidth={1}
              source={{html: description}}
              tagsStyles={tagsStyles}
            />
          </View>
        </SkeletonPlaceholder>
      )}
    </View>
  );
};

export default Accordion;
