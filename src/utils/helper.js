import {Dimensions} from 'react-native';

export const heightScale = factor => Dimensions.get('screen').height / factor;

export const widthScale = factor => Dimensions.get('screen').width / factor;

export const getEventDate = date => {
  const d = new Date(date);
  return {
    date: d.getDate(),
    month: new Intl.DateTimeFormat('en', {month: 'short'}).format(d),
  };
};

export const timeAgo = (date, t) => {
  if (date) {
    const now = new Date();
    const time = new Date(date);
    const differenceInSeconds = Math.floor((now - time) / 1000);

    if (differenceInSeconds < 60) {
      return `${differenceInSeconds} ${t('seconds')} ${t('ago')}`;
    } else if (differenceInSeconds < 3600) {
      const minutes = Math.floor(differenceInSeconds / 60);
      return `${minutes} ${minutes > 1 ? t('mins') : t('min')} ${t('ago')}`;
    } else if (differenceInSeconds < 86400) {
      const hours = Math.floor(differenceInSeconds / 3600);
      return `${hours} ${hours > 1 ? t('hours') : t('hour')} ${t('ago')}`;
    } else {
      const days = Math.floor(differenceInSeconds / 86400);
      return `${days} ${days > 1 ? t('days') : t('day')} ${t('ago')}`;
    }
  } else return '';
};

export const debounce = func => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), 300);
  };
};

export const filterParams = params =>
  Object.fromEntries(
    Object.entries(params).filter(
      ([key, value]) => value != null && value !== '' && value !== 'all',
    ),
  );
