import {useNavigation, useRoute} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {useTranslation} from 'react-i18next';
import {SCREENS} from '../../utils/constants';

export const useEventsList = () => {
  const navigation = useNavigation();
  const {screenTitle} = useRoute().params;
  const {todaysEvents, upcomingEvents, events} = useSelector(
    state => state.events,
  );
  const {t} = useTranslation();
  const handlePressSearch = () =>
    navigation.navigate(SCREENS.SEARCH.name, {searchIn: 'Events'});
  const handlePressBack = () => navigation.goBack();
  const handlePressEvent = id =>
    navigation.navigate(SCREENS.EVENTDETAILS.name, {eventId: id});
  return {
    todaysEvents,
    upcomingEvents,
    events,
    screenTitle,

    t,

    handlePressSearch,
    handlePressBack,
    handlePressEvent,
  };
};
