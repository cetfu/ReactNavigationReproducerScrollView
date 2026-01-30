import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppContent } from '../screens/home.tsx';

export const HomeTab = createBottomTabNavigator({
  screens: {
    Home: AppContent
  },
  implementation: "native"
})
