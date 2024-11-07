import {useNavigation, useRoute} from '@react-navigation/native';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {clearEvent, getEvent} from '../../redux/reducres/eventsSlice';

export const useEventDetails = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const dispatch = useDispatch();
  const {event} = useSelector(state => state.events);
  const handlePressBack = () => navigation.goBack();
  const getEventDate = date => {
    const d = new Date(date);
    if (date)
      return `${d.getDate()} ${new Intl.DateTimeFormat('en', {
        month: 'short',
      })
        .format(d)
        .toUpperCase()}, ${d.getFullYear()}`;
    else return '';
  };
  const getEventTime = date => {
    const d = new Date(date);
    if (date)
      return `${d.toLocaleDateString('en-US', {
        weekday: 'long',
      })}, ${d.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
      })}`;
    else return '';
  };
  const handleVideoError = () => {
    console.log('Videi error');
  };
  useEffect(() => {
    dispatch(getEvent(params?.eventId));
    return () => dispatch(clearEvent());
  }, []);
  return {
    event,
    handlePressBack,
    getEventDate,
    getEventTime,
    handleVideoError,
  };
};
