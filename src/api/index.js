import client, {METHODS} from './client';
export const api = {
  events: {
    getEventsCategories: () =>
      client({
        url: '/event-category',
        method: METHODS.GET,
      }),
    getEvents: () =>
      client({
        url: '/event',
        method: METHODS.GET,
      }),
    getEvent: id =>
      client({
        url: `/event/${id}`,
        method: METHODS.GET,
      }),
    getUpcomingEvents: () =>
      client({
        url: `/event?isUpcomingEvent=${true}`,
        method: METHODS.GET,
      }),
    getTodaysEvents: date =>
      client({
        url: `/event?todayDate=${date}`,
        method: METHODS.GET,
      }),
  },
  news: {
    getNewsCategories: () =>
      client({
        url: '/news-category',
        method: METHODS.GET,
      }),
    getNews: () =>
      client({
        url: '/news',
        method: METHODS.GET,
      }),
  },
};
