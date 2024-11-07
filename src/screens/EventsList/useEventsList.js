import {useNavigation, useRoute} from '@react-navigation/native';
import {SCREENS} from '../../utils/constants';
import {useSelector} from 'react-redux';

export const useEventsList = () => {
  const navigation = useNavigation();
  const {screenTitle} = useRoute().params;
  const {todaysEvents, upcomingEvents, events} = useSelector(
    state => state.events,
  );
  const handlePressSearch = () => navigation.navigate(SCREENS.SEARCH.name);
  const handlePressBack = () => navigation.goBack();
  const handlePressEvent = () => navigation.navigate(SCREENS.EVENTDETAILS.name);
  return {
    todaysEvents,
    upcomingEvents,
    events,
    screenTitle,

    handlePressSearch,
    handlePressBack,
    handlePressEvent,
  };
};
