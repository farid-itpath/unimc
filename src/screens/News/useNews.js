import {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {SCREENS} from '../../utils/constants';

export const useNews = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const scrollRef = useRef();
  const {events} = useSelector(state => state.events);
  const navigation = useNavigation();
  const handleSelectCategory = index => {
    setSelectedCategory(index);
    scrollRef.current.scrollTo({y: 500, animated: true});
  };
  const handlePressSeeAll = () => navigation.navigate(SCREENS.NEWSLIST.name);
  const handlePressSearch = () => navigation.navigate(SCREENS.SEARCH.name);
  const handlePressNews = () => navigation.navigate(SCREENS.NEWSDETAILS.name);
  return {
    selectedCategory,
    scrollRef,
    events,
    handleSelectCategory,
    handlePressSeeAll,
    handlePressSearch,
    handlePressNews,
  };
};
