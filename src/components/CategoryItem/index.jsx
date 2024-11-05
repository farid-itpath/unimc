import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Skeleton from 'react-native-reanimated-skeleton';
import Icon from '../Icon';
import {layout, styles} from './style';
import {COLORS} from '../../utils/constants';

const CategoryItem = ({item, selectedCategory, index, onPress}) => {
  return item ? (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.eventCategoriesView,
        {
          backgroundColor:
            index === selectedCategory ? COLORS.primary : COLORS.white,
        },
      ]}
      key={index}>
      <Icon
        uri={item?.icon_image}
        tintColor={index === selectedCategory ? COLORS.white : COLORS.primary}
      />
      <Text
        style={[
          styles.eventCategoryTitle,
          {
            color: index === selectedCategory ? COLORS.white : COLORS.primary,
          },
        ]}>
        {item?.title}
      </Text>
    </TouchableOpacity>
  ) : (
    <Skeleton layout={[layout]} />
  );
};

export default CategoryItem;
