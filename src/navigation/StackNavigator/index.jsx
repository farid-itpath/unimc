import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {SCREENS} from '../../utils/constants';
import Splash from '../../screens/Splash';
import BottomTabNavigator from '../BottomTabNavigator';
import EventDetails from '../../screens/EventDetails';
import NewsDetails from '../../screens/NewsDetails';
import Search from '../../screens/Search';
import EventsList from '../../screens/EventsList';
import NewsList from '../../screens/NewsList';
import ImageList from '../../screens/ImageList';
import Settings from '../../screens/Settings';
import ContactUs from '../../screens/ContactUs';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREENS.SPLASH.name} component={Splash} />
        <Stack.Screen
          name={SCREENS.BOTTOMTAB.name}
          component={BottomTabNavigator}
        />
        <Stack.Screen
          name={SCREENS.EVENTDETAILS.name}
          component={EventDetails}
        />
        <Stack.Screen name={SCREENS.NEWSDETAILS.name} component={NewsDetails} />
        <Stack.Screen name={SCREENS.SEARCH.name} component={Search} />
        <Stack.Screen name={SCREENS.EVENTSLIST.name} component={EventsList} />
        <Stack.Screen name={SCREENS.NEWSLIST.name} component={NewsList} />
        <Stack.Screen name={SCREENS.IMAGELIST.name} component={ImageList} />
        <Stack.Screen name={SCREENS.SETTINGS.name} component={Settings} />
        <Stack.Screen name={SCREENS.CONTACT_US.name} component={ContactUs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
