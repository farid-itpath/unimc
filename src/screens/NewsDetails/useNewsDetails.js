import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearNews, getSingleNews} from '../../redux/reducres/newsSlice';
import {useTranslation} from 'react-i18next';

export const useNewsDetails = () => {
  const navigation = useNavigation();
  const {newsId} = useRoute().params;
  const {singleNews: news} = useSelector(state => state.news);
  const dispatch = useDispatch();
  const {t} = useTranslation();
  const handlePressBack = () => navigation.goBack();
  const getPublishTime = dateString => {
    const date = new Date(dateString);

    const day = date.getDate();
    const month = date.toLocaleString('en-US', {month: 'long'}).toUpperCase();
    const year = date.getFullYear();

    const hours = date.getHours() % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

    return `${day} ${month}, ${year} | ${hours}:${minutes}${ampm}`;
  };
  useEffect(() => {
    dispatch(getSingleNews(newsId));
    return () => dispatch(clearNews());
  }, []);
  return {
    news,
    t,
    handlePressBack,
    getPublishTime,
  };
};
