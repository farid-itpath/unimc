import {useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/constants';

export const useNews = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const scrollRef = useRef();
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
    handleSelectCategory,
    handlePressSeeAll,
    handlePressSearch,
    handlePressNews,
  };
};
