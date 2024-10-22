import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import Home from '../../screens/Home';
import Events from '../../screens/Events';
import News from '../../screens/News';
import About from '../../screens/About';
import {COLORS, SCREENS} from '../../utils/constants';
import {styles} from './style';
import { ICONS } from '../../assets';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const getIconByRouteName = name => {
    switch (name) {
      case SCREENS.HOME.name:
        return ICONS.home;
      case SCREENS.EVENTS.name:
        return ICONS.home;
      case SCREENS.EVENTDETAILS.name:
        return ICONS.home;
      case SCREENS.NEWS.name:
        return ICONS.home;
      case SCREENS.NEWSDETAILS.name:
        return ICONS.home;
      case SCREENS.ABOUT.name:
        return ICONS.home;
    }
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({focused}) => {
          return (
            <Image
              source={getIconByRouteName(route.name)}
              style={[
                styles.tabIcon,
                {tintColor: focused ? COLORS.black : COLORS.primary},
              ]}
            />
          );
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
