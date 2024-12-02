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
import {BASE_URL, COLORS} from '../../utils/constants';
import Skeleton from 'react-native-reanimated-skeleton';
import RenderHTML from 'react-native-render-html';

const NewsDetails = () => {
  const {news, t, handlePressBack, getPublishTime} = useNewsDetails();
  console.log('news: ', news);
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
            {getPublishTime(news?.publishedAt)}
          </Text>
        </View>
      </ScrollView>
    </>
  );
};

export default NewsDetails;
const a = {
  creator: {
    country_code: '+91',
    email: 'organizer.user@mailinator.com',
    first_name: 'Noble',
    last_name: 'Richards',
    mobile_number: '7878858554',
    profile_image: '/uploads/users/profile_images/dUQCfAOCYBxBMytE.png',
  },
  creator_id: '5f848c76-afba-4674-a1d6-604778fd353b',
  id: 'e5665f40-925a-4508-b7de-71580dfbbeab',
  news_category: {
    icon_image: '/uploads/news_category_icons/xRmJwMqO0KLTE0j0.png',
    title: 'Art',
  },
  news_category_id: '4c2df58f-47ed-4df4-9ed6-16385a289b43',
  news_description:
    '<p>The University of Macerata recently unveiled a captivating art exhibition titled <strong>"Restoring the Past: A Journey Through Renaissance Art Conservation."</strong> This event highlights the delicate process of preserving Italy\'s artistic heritage, showcasing restored masterpieces alongside interactive demonstrations of conservation techniques.</p><p>The exhibition features works by renowned Renaissance artists who have undergone meticulous restoration, breathing new life into historic paintings, sculptures, and artifacts. Visitors are invited to explore:</p><ul><li><strong>Restored Masterpieces:</strong> Iconic works from the Marche region, including pieces from local churches and private collections.</li><li><strong>Behind-the-Scenes Insights:</strong> Interactive displays detailing the science and artistry of restoration.</li><li><strong>Workshops:</strong> Hands-on activities where attendees can try their hand at basic restoration techniques under expert guidance.</li></ul><p><strong>&nbsp; &nbsp; &nbsp; &nbsp;Highlights of the Event:</strong></p><ul><li>A keynote speech by celebrated art historian <strong>Professor Alessandro Ricci</strong>, discussing the evolution of art conservation.</li><li>A live demonstration of traditional fresco restoration by skilled artisans.</li><li>Guided tours emphasize the cultural and historical significance of each piece.</li></ul>',
  news_image: '/uploads/news_images/tpBpKDjsjYf0V028.jpg',
  publishedAt: '2024-11-27T07:27:28.000Z',
  reason_description: null,
  status: 'published',
  submittedAt: null,
  title: 'University of Macerata Hosts Historic Art Restoration Exhibition',
};
