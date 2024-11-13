import {useCallback, useEffect, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {SCREENS} from '../../utils/constants';
import {getEvents, getEventsCategories} from '../../redux/reducres/eventsSlice';
import {useTranslation} from 'react-i18next';

export const useEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const {
    categories,
    categoriesError,
    categoriesLoading,
    events,
    eventsLoading,
    eventsError,
  } = useSelector(state => state.events);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {t} = useTranslation();
  const handleSelectCategory = index => {
    setSelectedCategory(index);
  };
  const handlePressSeeAll = title =>
    navigation.navigate(SCREENS.EVENTSLIST.name, {screenTitle: title});
  const handlePressSearch = () =>
    navigation.navigate(SCREENS.SEARCH.name, {searchIn: 'Events'});
  const handlePressEvent = eventId =>
    navigation.navigate(SCREENS.EVENTDETAILS.name, {eventId});
  useFocusEffect(
    useCallback(() => {
      dispatch(getEventsCategories());
      dispatch(getEvents());
    }, []),
  );
  return {
    selectedCategory,
    categories,
    categoriesError,
    categoriesLoading,
    events,
    eventsLoading,
    eventsError,
    t,
    handleSelectCategory,
    handlePressSeeAll,
    handlePressSearch,
    handlePressEvent,
  };
};
