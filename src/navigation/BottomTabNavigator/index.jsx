import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Text} from 'react-native';
import Home from '../../screens/Home';
import Events from '../../screens/Events';
import News from '../../screens/News';
import About from '../../screens/About';
import {COLORS, SCREENS} from '../../utils/constants';
import {styles} from './style';
import {ICONS} from '../../assets';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  const getIconByRouteName = name => {
    switch (name) {
      case SCREENS.HOME.name:
        return ICONS.home;
      case SCREENS.EVENTS.name:
        return ICONS.events;
      case SCREENS.NEWS.name:
        return ICONS.news;
      case SCREENS.ABOUT.name:
        return ICONS.about;
    }
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: styles.tabBarStyle,
        tabBarShowLabel: false,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        headerShown: false,
        tabBarIcon: ({focused}) => {
          return (
            <>
              <Image
                source={getIconByRouteName(route.name)}
                style={[styles.tabIcon, {tintColor: focused && COLORS.primary}]}
              />
              <Text
                style={
                  ([styles.tabBarLabelStyle],
                  {color: focused && COLORS.primary})
                }>
                {route.name}
              </Text>
            </>
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
