import {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {SCREENS} from '../../utils/constants';

export const useEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const scrollRef = useRef();
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
    scrollRef.current.scrollTo({y: 500, animated: true});
  };
  const handlePressSeeAll = () => navigation.navigate(SCREENS.EVENTSLIST.name);
  const handlePressSearch = () => navigation.navigate(SCREENS.SEARCH.name);
  const handlePressEvent = () => navigation.navigate(SCREENS.EVENTDETAILS.name);
  return {
    selectedCategory,
    scrollRef,
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
