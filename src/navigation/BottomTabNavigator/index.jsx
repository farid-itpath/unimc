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
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  const {t} = useTranslation();
  const getIconByRouteName = name => {
    switch (name) {
      case t(SCREENS.HOME.name.toLowerCase()):
        return ICONS.home;
      case t(SCREENS.EVENTS.name.toLowerCase()):
        return ICONS.events;
      case t(SCREENS.NEWS.name.toLowerCase()):
        return ICONS.news;
      case t(SCREENS.ABOUT.name.toLowerCase()):
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
      <Tab.Screen name={t(SCREENS.HOME.name.toLowerCase())} component={Home} />
      <Tab.Screen
        name={t(SCREENS.EVENTS.name.toLowerCase())}
        component={Events}
      />
      <Tab.Screen name={t(SCREENS.NEWS.name.toLowerCase())} component={News} />
      <Tab.Screen
        name={t(SCREENS.ABOUT.name.toLowerCase())}
        component={About}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
