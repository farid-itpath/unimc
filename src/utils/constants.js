import {IMAGES} from '../assets';

// export const BASE_URL = 'http://192.168.0.11:5020';
export const BASE_URL = 'https://apimaceratauniversity.project-demo.info';

export const SCREENS = {
  HOME: {
    id: 1,
    name: 'Home',
  },
  EVENTS: {
    id: 2,
    name: 'Events',
  },
  EVENTDETAILS: {
    id: 3,
    name: 'EventDetails',
  },
  NEWS: {
    id: 4,
    name: 'News',
  },
  NEWSDETAILS: {
    id: 5,
    name: 'NewsDetails',
  },
  ABOUT: {
    id: 6,
    name: 'About',
  },
  BOTTOMTAB: {
    id: 7,
    name: 'BottomTab',
  },
  SEARCH: {
    id: 8,
    name: 'Search',
  },
  SPLASH: {
    id: 9,
    name: 'Splash',
  },
  EVENTSLIST: {
    id: 10,
    name: 'EventsList',
  },
  NEWSLIST: {
    id: 11,
    name: 'NewsList',
  },
  IMAGELIST: {
    id: 12,
    name: 'ImageList',
  },
  VIDEOLIST: {
    id: 13,
    name: 'VideoList',
  },
  SETTINGS: {
    id: 14,
    name: 'Settings',
  },
  CONTACT_US: {
    id: 15,
    name: 'Contact_Us',
  },
  VIDEOPLAY: {
    id: 16,
    name: 'VideoPlay',
  },
};

export const COLORS = {
  primary: '#7F0042',
  black: '#000000',
  white: '#ffffff',
  primaryLight: '#c75b93',
  primaryExtraLight: '#e0b1ca',
  grey: '#747688',
  lightGrey: '#8193AE',
  extraLightGrey: '#F0F0F0',
  error: '#ff0000',
};

export const LANGUAGES = [
  {title: 'Italic', code: 'it', flag: IMAGES.italy},
  {title: 'English', code: 'en', flag: IMAGES.english},
];

const commonHTMLTags = [
  'p',
  'span',
  'div',
  'strong',
  'em',
  'b',
  'i',
  'ul',
  'li',
  'ol',
  'a',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'table',
  'tr',
  'td',
  'th',
  'thead',
  'tbody',
  'blockquote',
];

const defaultTagStyles = {
  marginTop: 0,
  marginBottom: 0,
  paddingTop: 0,
  paddingBottom: 0,
  color: COLORS.black,
  textAlign: 'justify',
};
export const tagsStyles = Object.fromEntries(
  commonHTMLTags.map(tag => [tag, defaultTagStyles]),
);
