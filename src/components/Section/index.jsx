import React, {useCallback} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {styles} from './style';
import {ICONS, IMAGES} from '../../assets';
import {useTranslation} from 'react-i18next';
import {heightScale} from '../../utils/helper';

const Section = ({
  data,
  renderItem,
  title,
  onPressSeeAll,
  showFooterComponent,
}) => {
  const {t} = useTranslation();
  const renderFooterComponent = useCallback(() => {
    return (
      <TouchableOpacity
        style={styles.footerComponent}
        activeOpacity={0.8}
        onPress={onPressSeeAll}>
        <Text style={styles.footerComponentText}>{t('see_all')}</Text>
        <Image source={ICONS.arrowRight} style={styles.arrowRightFooter} />
        <Image source={ICONS.arrowRight} style={styles.arrowRightFooter} />
      </TouchableOpacity>
    );
  }, []);
  const renderEmptyComponent = () => {
    return (
      <View style={styles.listEmptyComponent}>
        <Image
          source={IMAGES.noData}
          style={{
            width: heightScale(6.5),
            height: heightScale(6.5),
          }}
        />
        <Text style={styles.listEmptyComponentText}>{t('no_data_found')}</Text>
      </View>
    );
  };
  return (
    <View style={styles.section}>
      <View style={styles.sectionHead}>
        {typeof title === 'string' ? (
          <Text style={styles.sectionTitle}>{title}</Text>
        ) : (
          title()
        )}
        {!!onPressSeeAll && (
          <TouchableOpacity style={styles.seeAllView} onPress={onPressSeeAll}>
            <Text style={styles.seeAllText}>{t('see_all')} </Text>
            <Image source={ICONS.arrowRight} style={styles.arrowRight} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.sectionBody}>
        <FlatList
          data={data || new Array(4).fill()}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContainer}
          ListFooterComponent={
            data?.length > 2 && showFooterComponent && renderFooterComponent
          }
          ListEmptyComponent={renderEmptyComponent}
        />
      </View>
    </View>
  );
};

export default Section;
