import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/constants';

export const useHome = () => {
  const navigation = useNavigation();
  const handlePressSearch = () => navigation.navigate(SCREENS.SEARCH.name);
  const handlePressSeeAll = () => navigation.navigate(SCREENS.EVENTSLIST.name);
  const handlePressEvent = () => navigation.navigate(SCREENS.EVENTDETAILS.name);
  return {
    handlePressSearch,
    handlePressSeeAll,
    handlePressEvent,
  };
};
