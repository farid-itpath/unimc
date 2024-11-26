import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';
import {layout, styles} from './style';
import {ICONS} from '../../assets';
import {useNewsDetails} from './useNewsDetails';
import {BASE_URL} from '../../utils/constants';
import Skeleton from 'react-native-reanimated-skeleton';
import RenderHTML from 'react-native-render-html';

const NewsDetails = () => {
  const {news, t, handlePressBack, getPublishTime} = useNewsDetails();
  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <StatusBar
          backgroundColor={'transparent'}
          barStyle="light-content"
          translucent
        />
      </SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerView}>
          <View style={styles.headerImageView}>
            <Image
              source={{uri: `${BASE_URL}${news?.news_image}`}}
              style={styles.headerImage}
            />
          </View>
          <View style={styles.innerHeaderView}>
            <View style={styles.screenHeaderView}>
              <TouchableHighlight
                onPress={handlePressBack}
                style={styles.backIconView}
                underlayColor="rgba(255,255,255,0.3)">
                <Image source={ICONS.arrowLeft} style={styles.back} />
              </TouchableHighlight>
              <Text style={styles.screenHeaderText} numberOfLines={1}>
                {news?.title}
              </Text>
            </View>
            {/* <View style={styles.eventDataView}>
                <Text style={styles.eventDate}>10</Text>
                <Text style={styles.eventMonth}>JUNE</Text>
              </View> */}
          </View>
        </View>
        <View style={styles.eventCategoriesView}>
          <Image
            source={{
              uri: `${BASE_URL}${news?.news_category?.icon_image}`,
            }}
            style={styles.eventCategoriesImage}
          />
          <Text style={styles.eventCategoryTitle}>
            {news?.news_category?.title}
          </Text>
        </View>
        <View style={styles.newsDetailsView}>
          {news ? (
            <Text style={styles.newsTitle}>{news?.title}</Text>
          ) : (
            <Skeleton layout={[layout.title]} />
          )}
          {news ? (
            // <Text style={styles.aboutText}>{news?.news_description}</Text>
            <View style={{}}>
              <RenderHTML
                contentWidth={1}
                source={{html: news?.news_description}}
                tagsStyles={{
                  p: {
                    marginTop: 0,
                    marginBottom: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                  },
                  span: {
                    marginTop: 0,
                    marginBottom: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                  },
                }}
              />
            </View>
          ) : (
            <Skeleton layout={[layout.description]} />
          )}
        </View>
        <View style={styles.newsDetailsView}>
          <Text style={styles.publishInfoTitle}>{t('published')}</Text>
          <Text style={styles.publishDate}>
            {getPublishTime(news?.submittedAt)}
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default NewsDetails;
