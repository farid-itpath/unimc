import {useCallback, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {SCREENS} from '../../utils/constants';
import {getNews, getNewsCategories} from '../../redux/reducres/newsSlice';

export const useNews = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {categories, news} = useSelector(state => state.news);
  const {t} = useTranslation();
  const handleSelectCategory = index => {
    setSelectedCategory(index);
  };
  const handlePressSeeAll = title =>
    navigation.navigate(SCREENS.NEWSLIST.name, {screenTitle: title});
  const handlePressSearch = () =>
    navigation.navigate(SCREENS.SEARCH.name, {searchIn: 'News'});
  const handlePressNews = newsId =>
    navigation.navigate(SCREENS.NEWSDETAILS.name, {newsId});
  useFocusEffect(
    useCallback(() => {
      dispatch(getNewsCategories());
      dispatch(getNews());
    }, []),
  );
  return {
    categories,
    selectedCategory,

    news,

    t,

    handleSelectCategory,
    handlePressSeeAll,
    handlePressSearch,
    handlePressNews,
  };
};
