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
        url: `/event?status=published&isUpcomingEvent=${true}`,
        method: METHODS.GET,
      }),
    getTodaysEvents: () =>
      client({
        url: `/event?status=published&todayDate=${true}`,
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
        url: '/news?status=published',
        method: METHODS.GET,
      }),
    getSingleNews: id =>
      client({
        url: `/news/${id}`,
        method: METHODS.GET,
      }),
  },
};
