import {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/constants';

export const useEvents = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const scrollRef = useRef();
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
    handleSelectCategory,
    handlePressSeeAll,
    handlePressSearch,
    handlePressEvent,
  };
};
