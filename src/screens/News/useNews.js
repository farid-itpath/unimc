import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {SCREENS} from '../../utils/constants';

export const useNews = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const navigation = useNavigation();
  const {categories, news} = useSelector(state => state.news);
  const handleSelectCategory = index => {
    setSelectedCategory(index);
  };
  const handlePressSeeAll = title =>
    navigation.navigate(SCREENS.NEWSLIST.name, {screenTitle: title});
  const handlePressSearch = () => navigation.navigate(SCREENS.SEARCH.name);
  const handlePressNews = newsId =>
    navigation.navigate(SCREENS.NEWSDETAILS.name, {newsId});
  return {
    categories,
    selectedCategory,

    news,

    handleSelectCategory,
    handlePressSeeAll,
    handlePressSearch,
    handlePressNews,
  };
};
