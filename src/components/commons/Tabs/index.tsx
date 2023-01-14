import { HStack, ScrollView, Text } from 'native-base';
import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

interface Props{
  FirstTab:React.ComponentType
  SecondTab:React.ComponentType
  ThirdTab:React.ComponentType
}

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);
const ThirdRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);
const renderTabBar = props => (
  
  <TabBar
  scrollEnabled
  style={{backgroundColor:'black'}}
  indicatorStyle={{ backgroundColor: 'white' }}
  renderLabel={({ route, focused, color }) => (
    <Text color='white.900' fontWeight='bold'>
      {route.title}
    </Text>
  )}
  {...props}
/>

);



export  function TabViewExample({FirstTab,SecondTab,ThirdTab}:Props) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Aulas' },
    { key: 'second', title: 'Descrição da aula' },
    { key: 'third', title: 'Material Complementar' },
  ]);

  const renderScene = SceneMap({
    first: FirstTab,
    second: SecondTab,
    third: ThirdTab,
  });
 
  return (
    <TabView
    renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
}
