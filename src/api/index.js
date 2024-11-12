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
    searchEvents: ({params}) =>
      client({
        url: '/event',
        params,
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
    searchNews: ({params}) =>
      client({
        url: `/news`,
        method: METHODS.GET,
        params,
      }),
  },
  generic: {
    getEventsAndNews: () =>
      client({
        url: '/generic/home',
        method: METHODS.GET,
      }),
    searchEventsAndNews: ({params}) =>
      client({
        url: `/generic/home`,
        method: METHODS.GET,
        params,
      }),
  },
  about: {
    getAbout: () =>
      client({
        url: '/about-us',
        method: METHODS.GET,
      }),
    getBannerImages: id =>
      client({
        url: `/about-us/${id}`,
        method: METHODS.GET,
      }),
  },
};
