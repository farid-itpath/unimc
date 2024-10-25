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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
