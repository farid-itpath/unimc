import {useNavigation, useRoute} from '@react-navigation/native';
import {SCREENS} from '../../utils/constants';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';

export const useNewsList = () => {
  const navigation = useNavigation();
  const {screenTitle} = useRoute().params;
  const {news} = useSelector(state => state.news);
  const {t} = useTranslation();
  const handlePressSearch = () =>
    navigation.navigate(SCREENS.SEARCH.name, {searchIn: 'News'});
  const handlePressBack = () => navigation.goBack();
  const handlePressNews = () => navigation.navigate(SCREENS.NEWSDETAILS.name);
  return {
    news,
    screenTitle,

    t,

    handlePressSearch,
    handlePressBack,
    handlePressNews,
  };
};
