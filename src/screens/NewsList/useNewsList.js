import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/constants';

export const useNewsList = () => {
  const navigation = useNavigation();
  const handlePressSearch = () => navigation.navigate(SCREENS.SEARCH.name);
  const handlePressBack = () => navigation.goBack();
  return {
    handlePressSearch,
    handlePressBack
  };
};
