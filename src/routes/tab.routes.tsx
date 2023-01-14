import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@screens/Home";
import { StackRoutes } from "./stack.routes";

const { Screen, Navigator } = createBottomTabNavigator()

export function AppRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
        }}>
            <Screen
                name="Home"
                component={StackRoutes }
            />
             <Screen
                name="Perfil"
                component={Home }
            />
            
        </Navigator>
    )
}