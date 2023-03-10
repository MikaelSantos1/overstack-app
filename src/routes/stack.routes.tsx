import { createStackNavigator } from '@react-navigation/stack';
import { Details } from '@screens/Details';
import { Home } from '@screens/Home';
import { Login } from '@screens/Login';
import { Onboarding } from '@screens/Onboarding';
import { Search } from '@screens/Search';
import VideoScreen from '@screens/Video';
import { AppRoutes } from './tab.routes';

const {Navigator, Screen} = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator  screenOptions={{
        headerShown: false
    }} initialRouteName={'Home'}>
      <Screen name="Home" component={Home} />

      <Screen name="Details" component={Details} />
      
      <Screen name="VideoScreen" component={VideoScreen} />
      <Screen name="Search" component={Search} />
     
     
    </Navigator>
  );
}