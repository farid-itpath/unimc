import {useNavigation, useRoute} from '@react-navigation/native';
import {SCREENS} from '../../utils/constants';
import {useSelector} from 'react-redux';

export const useNewsList = () => {
  const navigation = useNavigation();
  const {screenTitle} = useRoute().params;
  const {news} = useSelector(state => state.news);
  const handlePressSearch = () => navigation.navigate(SCREENS.SEARCH.name);
  const handlePressBack = () => navigation.goBack();
  const handlePressNews = () => navigation.navigate(SCREENS.NEWSDETAILS.name);
  return {
    news,
    screenTitle,

    handlePressSearch,
    handlePressBack,
    handlePressNews,
  };
};
