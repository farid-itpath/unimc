import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Platform, Text, View} from 'react-native';
import Home from '../../screens/Home';
import Events from '../../screens/Events';
import News from '../../screens/News';
import About from '../../screens/About';
import {COLORS, SCREENS} from '../../utils/constants';
import {styles} from './style';
import {ICONS} from '../../assets';
import {heightScale} from '../../utils/helper';

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
        tabBarStyle: {
          height: Platform.OS === 'ios' ? heightScale(10) : heightScale(16),
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIcon: ({focused}) => {
          return (
            <View style={styles.tabBarView}>
              <Image
                source={getIconByRouteName(route.name)}
                style={[
                  styles.tabIcon,
                  {tintColor: focused ? COLORS.primary : COLORS.grey},
                ]}
              />
              <Text
                style={
                  ([styles.tabBarLabelStyle],
                  {color: focused ? COLORS.primary : COLORS.grey})
                }>
                {route.name}
              </Text>
            </View>
          );
        },
      })}>
      <Tab.Screen name={SCREENS.HOME.name} component={Home} />
      <Tab.Screen name={SCREENS.EVENTS.name} component={Events} />
      <Tab.Screen name={SCREENS.NEWS.name} component={News} />
      <Tab.Screen name={SCREENS.ABOUT.name} component={About} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
