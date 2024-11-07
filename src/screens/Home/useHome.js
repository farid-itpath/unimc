import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {SCREENS} from '../../utils/constants';
import {
  getEvents,
  getEventsCategories,
  getTodaysEvents,
  getUpcomingEvents,
} from '../../redux/reducres/eventsSlice';
import {getNews, getNewsCategories} from '../../redux/reducres/newsSlice';

export const useHome = () => {
  const [selectedEventsCategory, setSelectedEventsCategory] = useState();
  const [selectedNewsCategory, setSelectedNewsCategory] = useState();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    categories: eventCategories,
    categoriesError: eventCategoriesError,
    categoriesLoading: eventCategoriesLoading,

    upcomingEvents,
    todaysEvents,
  } = useSelector(state => state.events);
  const {categories: newsCategories, news} = useSelector(state => state.news);
  const handlePressSearch = () => navigation.navigate(SCREENS.SEARCH.name);
  const handlePressSeeAllEvents = () =>
    navigation.navigate(SCREENS.EVENTSLIST.name);
  const handlePressSeeAllTodaysEvents = () =>
    navigation.navigate(SCREENS.EVENTSLIST.name, {
      screenTitle: "Today's Events",
    });
  const handlePressSeeAllUpcomingEvents = () =>
    navigation.navigate(SCREENS.EVENTSLIST.name, {
      screenTitle: 'Upcoming Events',
    });
  const handlePressSeeAllNews = () =>
    navigation.navigate(SCREENS.NEWSLIST.name, {screenTitle: 'News'});
  const handlePressEvent = eventId =>
    navigation.navigate(SCREENS.EVENTDETAILS.name, {eventId});
  const handlePressNews = newsId =>
    navigation.navigate(SCREENS.NEWSDETAILS.name, {newsId});
  const handleSelectEventsCategory = index => setSelectedEventsCategory(index);
  const handleSelectNewsCategory = index => setSelectedNewsCategory(index);
  useEffect(() => {
    dispatch(getNewsCategories());
    dispatch(getEventsCategories());
    dispatch(getEvents());
    dispatch(getUpcomingEvents());
    dispatch(getTodaysEvents());
    dispatch(getNews());
  }, []);
  return {
    newsCategories,
    news,
    selectedNewsCategory,
    handleSelectNewsCategory,
    handlePressSeeAllNews,
    handlePressNews,

    eventCategories,
    eventCategoriesLoading,
    eventCategoriesError,

    selectedEventsCategory,
    handlePressSeeAllEvents,
    handlePressSeeAllTodaysEvents,
    handlePressSeeAllUpcomingEvents,
    handlePressEvent,
    handleSelectEventsCategory,

    upcomingEvents,
    todaysEvents,

    handlePressSearch,
  };
};
