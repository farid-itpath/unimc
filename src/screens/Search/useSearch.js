import {useEffect, useRef, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {SCREENS} from '../../utils/constants';
import {
  clearSearchResult,
  searchEventsAndNews,
} from '../../redux/reducres/genericSlice';
import {searchEvents} from '../../redux/reducres/eventsSlice';
import {searchNews} from '../../redux/reducres/newsSlice';
import {debounce, filterParams} from '../../utils/helper';
import {useTranslation} from 'react-i18next';

export const useSearch = () => {
  //states
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEventCategories, setSelectedOptions] = useState([]);
  const [selectedNewsCategories, setSelectedNewsCategories] = useState([]);
  const searchInputRef = useRef();
  const navigation = useNavigation();
  const {searchIn} = useRoute().params;
  const dispatch = useDispatch();
  const {
    todaysEvents,
    upcomingEvents,
    news: genericNews,
  } = useSelector(state => state.generic);
  const {events} = useSelector(state => state.events);
  const {news} = useSelector(state => state.news);
  const {t} = useTranslation();
  //handlers
  const handleOpenFilterModal = () => setModalVisible(true);
  const handleCloseFilterModal = () => setModalVisible(false);
  const toggleFitlerItem = (itemType, filterItem) => {
    if (itemType === 'Event') {
      setSelectedOptions(
        selectedEventCategories.includes(filterItem)
          ? selectedEventCategories.filter(item => item !== filterItem)
          : [...selectedEventCategories, filterItem],
      );
    }
    if (itemType === 'News') {
      setSelectedNewsCategories(
        selectedNewsCategories.includes(filterItem)
          ? selectedNewsCategories.filter(item => item !== filterItem)
          : [...selectedNewsCategories, filterItem],
      );
    }
  };
  const handlePressBack = () => navigation.goBack();
  const handlePressResultItem = ({type, id}) =>
    type === 'event'
      ? navigation.navigate(SCREENS.EVENTDETAILS.name, {eventId: id})
      : navigation.navigate(SCREENS.NEWSDETAILS.name, {newsId: id});
  const handleChangeText = debounce(term => {
    if (term === '') {
      console.log('clear');
      dispatch(clearSearchResult());
    }
    if (searchIn === 'Home') {
      dispatch(
        searchEventsAndNews({
          params: filterParams({
            search: term,
            event_category_ids: selectedEventCategories.join(','),
            news_category_ids: selectedNewsCategories.join(','),
          }),
        }),
      );
    }
    if (searchIn === 'Events') {
      dispatch(
        searchEvents({
          params: filterParams({
            search: term,
            event_category_ids: selectedEventCategories.join(','),
          }),
        }),
      );
    }
    if (searchIn === 'News') {
      dispatch(
        searchNews({
          params: {
            search: term,
            news_category_ids: selectedNewsCategories.join(','),
          },
        }),
      );
    }
  });
  const handlePressApply = () => {
    searchInputRef.current.clear();
    // if (searchIn === 'Home') {
    //   dispatch(searchEventsAndNews({params: {search: term}}));
    // }
    if (searchIn === 'Events') {
      dispatch(
        searchEvents({
          params: {
            event_category_ids: selectedEventCategories.join(','),
          },
        }),
      );
    }
    if (searchIn === 'News') {
      dispatch(
        searchNews({
          params: {
            news_category_ids: selectedNewsCategories.join(','),
          },
        }),
      );
    }
    setModalVisible(false);
  };
  //effect handlers
  useEffect(() => {
    searchInputRef.current.focus();
  }, []);
  return {
    modalVisible,
    selectedEventCategories,
    selectedNewsCategories,
    searchInputRef,
    events:
      searchIn === 'Home'
        ? [...(todaysEvents || []), ...(upcomingEvents || [])]
        : events,
    news: searchIn === 'Home' ? genericNews : news,
    searchIn,
    t,
    handleOpenFilterModal,
    handleCloseFilterModal,
    toggleFitlerItem,
    handlePressBack,
    handlePressResultItem,
    handleChangeText,
    handlePressApply,
  };
};
