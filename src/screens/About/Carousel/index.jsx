import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import SnapCarousel, {Pagination} from 'react-native-snap-carousel';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {widthScale} from '../../../utils/helper';
import {styles} from './style';
import {IMAGES} from '../../../assets';

const Carousel = ({data}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const renderCarouselItem = ({item}) => (
    <SkeletonPlaceholder enabled={false}>
      <TouchableOpacity style={styles.itemView}>
        <Image source={IMAGES.todaysEvent} style={styles.itemImage} />
      </TouchableOpacity>
      <Text style={styles.itemText}>Macerata - Corso Cavour</Text>
    </SkeletonPlaceholder>
  );

  return (
    <View style={styles.container}>
      <SnapCarousel
        data={data || new Array(4).fill()}
        loop={true}
        renderItem={renderCarouselItem}
        sliderWidth={widthScale(1)}
        itemWidth={widthScale(1)}
        onSnapToItem={index => setActiveIndex(index)}
        autoplay={true}
      />
      <Pagination
        dotsLength={data?.length || 4}
        activeDotIndex={activeIndex}
        dotStyle={styles.dotStyle}
        inactiveDotStyle={styles.inactiveDotStyle}
        containerStyle={styles.paginationContainer}
      />
    </View>
  );
};

export default Carousel;
