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
  const handlePressSeeAllNews = () =>
    navigation.navigate(SCREENS.NEWSLIST.name);
  const handlePressEvent = eventId =>
    navigation.navigate(SCREENS.EVENTDETAILS.name, {eventId});
  const handleSelectEventsCategory = index => setSelectedEventsCategory(index);
  const handleSelectNewsCategory = index => setSelectedNewsCategory(index);
  const getTodayDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
  };
  useEffect(() => {
    dispatch(getNewsCategories());
    dispatch(getEventsCategories());
    dispatch(getEvents());
    dispatch(getUpcomingEvents());
    dispatch(getTodaysEvents(getTodayDate()));
    dispatch(getNews());
  }, []);
  return {
    newsCategories,
    news,
    selectedNewsCategory,
    handleSelectNewsCategory,
    handlePressSeeAllNews,

    eventCategories,
    eventCategoriesLoading,
    eventCategoriesError,

    selectedEventsCategory,
    handlePressSeeAllEvents,
    handlePressEvent,
    handleSelectEventsCategory,

    upcomingEvents,
    todaysEvents,

    handlePressSearch,
  };
};
