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

export const timeAgo = date => {
  if (date) {
    const now = new Date();
    const time = new Date(date);
    const differenceInSeconds = Math.floor((now - time) / 1000);

    if (differenceInSeconds < 60) {
      return `${differenceInSeconds} seconds ago`;
    } else if (differenceInSeconds < 3600) {
      const minutes = Math.floor(differenceInSeconds / 60);
      return `${minutes} ${minutes > 1 ? 'mins' : 'min'} ago`;
    } else if (differenceInSeconds < 86400) {
      const hours = Math.floor(differenceInSeconds / 3600);
      return `${hours} ${hours > 1 ? 'hours' : 'hour'} ago`;
    } else {
      const days = Math.floor(differenceInSeconds / 86400);
      return `${days} ${days > 1 ? 'days' : 'day'} ago`;
    }
  } else return '';
};
