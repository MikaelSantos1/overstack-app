import { createStackNavigator } from '@react-navigation/stack';
import { Details } from '@screens/Details';
import { Home } from '@screens/Home';
import VideoScreen from '@screens/Video';

const {Navigator, Screen} = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator  screenOptions={{
        headerShown: false
    }} initialRouteName={'Home'}>
      <Screen name="Home" component={Home} />

      <Screen name="Details" component={Details} />
      
      <Screen name="VideoScreen" component={VideoScreen} />
     
    </Navigator>
  );
}