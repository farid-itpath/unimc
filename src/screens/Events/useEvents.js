import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {SCREENS} from '../../utils/constants';

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
  const navigation = useNavigation();
  const handleSelectCategory = index => {
    setSelectedCategory(index);
  };
  const handlePressSeeAll = title =>
    navigation.navigate(SCREENS.EVENTSLIST.name, {screenTitle: title});
  const handlePressSearch = () => navigation.navigate(SCREENS.SEARCH.name);
  const handlePressEvent = eventId =>
    navigation.navigate(SCREENS.EVENTDETAILS.name, {eventId});
  return {
    selectedCategory,
    categories,
    categoriesError,
    categoriesLoading,
    events,
    eventsLoading,
    eventsError,
    handleSelectCategory,
    handlePressSeeAll,
    handlePressSearch,
    handlePressEvent,
  };
};
