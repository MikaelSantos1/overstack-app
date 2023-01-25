import { createStackNavigator } from '@react-navigation/stack';
import { Details } from '@screens/Details';

import { Login } from '@screens/Login';
import { Onboarding } from '@screens/Onboarding';
import { Register } from '@screens/Register';
import { Search } from '@screens/Search';
import VideoScreen from '@screens/Video';
import { AppRoutes } from './tab.routes';

const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator  screenOptions={{
        headerShown: false
    }} initialRouteName={'Onboarding'}>
      <Screen name="Onboarding" component={Onboarding} />

     
      
      <Screen name="Login" component={Login} />
      <Screen name="Register" component={Register} />
    
     
     
    </Navigator>
  );
}