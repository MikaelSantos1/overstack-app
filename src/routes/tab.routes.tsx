import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@screens/Home";
import { Profile } from "@screens/Profile";
import { useTheme } from "native-base";
import { StackRoutes } from "./stack.routes";
import HomeSvg from '@assets/home.svg';
import HistorySvg from '@assets/history.svg';
import ProfileSvg from '@assets/profile.svg';
import { Platform } from "expo-modules-core";
import { Search } from "@screens/Search";
const { Screen, Navigator } = createBottomTabNavigator()

export function AppRoutes() {
    const { sizes, colors } = useTheme();

  const iconSize = sizes[6];
    return (
        <Navigator screenOptions={{ 
            headerShown: false,
            tabBarShowLabel: false,
            tabBarActiveTintColor: colors.green[500],
            tabBarInactiveTintColor: colors.gray[200],
            tabBarStyle: {
              backgroundColor: colors.gray[600],
              borderTopWidth: 0,
              height: Platform.OS === "android" ? 'auto' : 96,
              paddingBottom: sizes[10],
              paddingTop: sizes[6]
            }
          }}>
            <Screen
                name="HomeTab"
                component={Home }
                options={{
                    tabBarIcon: ({ color,  }) => (
                      <HomeSvg fill={color} width={iconSize} height={iconSize} />
                    )
                  }}
            />
             <Screen
                name="Perfil"
                component={Profile }
                options={{
                    tabBarIcon: ({ color }) => (
                      <ProfileSvg fill={color} width={iconSize} height={iconSize} />
                    )
                  }}
            />

            
        </Navigator>
    )
}