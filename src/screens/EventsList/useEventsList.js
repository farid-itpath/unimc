import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/constants';

export const useEventsList = () => {
  const navigation = useNavigation();
  const handlePressSearch = () => navigation.navigate(SCREENS.SEARCH.name);
  const handlePressBack = () => navigation.goBack();
  const handlePressEvent = () => navigation.navigate(SCREENS.EVENTDETAILS.name);
  return {
    handlePressSearch,
    handlePressBack,
    handlePressEvent,
  };
};
