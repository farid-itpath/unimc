import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {styles} from './style';
import {ICONS} from '../../../assets';
import RenderHTML from 'react-native-render-html';
import {COLORS} from '../../../utils/constants';

const Accordion = ({
  title,
  description,
  onLayout,
  collapsed,
  toggleCollapse,
}) => {
  console.log('description: ', description);
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
              tagsStyles={{
                p: {
                  marginTop: 0,
                  marginBottom: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  color: COLORS.black,
                },
                span: {
                  marginTop: 0,
                  marginBottom: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  color: COLORS.black,
                },
                li: {
                  color: COLORS.black,
                },
                body: {
                  color: COLORS.black,
                },
              }}
            />
          </View>
        </SkeletonPlaceholder>
      )}
    </View>
  );
};

export default Accordion;
