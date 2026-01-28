import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeTab } from './home-tab.ts';
import { createStaticNavigation } from '@react-navigation/native';

const RootStack = createNativeStackNavigator({
  screens: {
    HomeTab: HomeTab
  },
  screenOptions: {
    headerShown: false
  }
})


export const Navigator = createStaticNavigation(RootStack)
