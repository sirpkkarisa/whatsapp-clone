
import 'react-native-gesture-handler';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Camera from './screens/Camera'
import Chats from './screens/Chats'
import Groups from './screens/Groups'
import Status from './screens/Status'
import Calls from './screens/Calls'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const Tab = createMaterialTopTabNavigator()

const App= () => {
 
  return (
   <SafeAreaView style={styles.container}>
     <View style={styles.header}>
       <View><Text style={styles.title}>PKWhatsApp</Text></View>
       <View style={styles.operations}>
        <Text style={styles.headerIcon}><FontAwesome5 name='wifi'/></Text>
        <Text style={styles.headerIcon}><FontAwesome5 name='moon' color='#fff'/></Text>
        <Text style={styles.headerIcon}><FontAwesome5 name='search'/></Text>
        <Text style={styles.headerIcon}><FontAwesome5 name='ellipsis-v'/></Text>
       </View>
     </View>
     <NavigationContainer>
     <Tab.Navigator initialRouteName='Chats' style={styles.tabs} 
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: styles.header.backgroundColor },
        tabBarLabelStyle: { color: '#ffffff'},//ffa5d6a7,ffc8e6c9
        tabBarActiveTintColor: '#ffffff',
        // tabBarIcon: ({ color, size }) => {
        //   console.log(route.name)
        //   return (
        //     <FontAwesome5
        //       name='camera'

        //     />
        //   );
        // },
      })}
     >
      <Tab.Screen name="Camera" component={Camera}/>
      <Tab.Screen name="Chats" component={Chats} />
      <Tab.Screen name="Groups" component={Groups} />
      <Tab.Screen name="Status" component={Status} />
      <Tab.Screen name="Calls" component={Calls} />
    </Tab.Navigator>
   </NavigationContainer>
   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    padding: 10, 
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor: '#128c7e', //075e54,34b7f1,
  }, 
  title: {
    fontSize: 20,
    fontWeight: '400',
    color: '#ffffff',
  },
  operations: {
    flex: 1,
    width: 10,
    flexDirection:'row',
    marginLeft: 120,
    justifyContent: 'space-between'
  },
  headerIcon: {
    color: '#ffffff',
    fontSize: 25,
  },
  tabs: {

  },
});

export default App;
