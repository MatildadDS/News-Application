import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AllScreen from './screens/All';
import BusinessScreen from './screens/Business';
import HealthScreen from './screens/Health';
import SportsScreen from './screens/Sports';
import TechScreen from './screens/Tech';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'All') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Business') {
              iconName = focused ? 'cash' : 'cash-outline';
            } else if (route.name === 'Health') {
              iconName = focused ? 'medkit' : 'medkit-outline';
            } else if (route.name === 'Sports') {
              iconName = focused ? 'basketball' : 'basketball-outline';
            } else if (route.name === 'Tech') {
              iconName = focused ? 'desktop' : 'desktop-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >        
        <Tab.Screen name="All" component={AllScreen} />
        <Tab.Screen name="Business" component={BusinessScreen} />
        <Tab.Screen name="Health" component={HealthScreen} />
        <Tab.Screen name="Sports" component={SportsScreen} />
        <Tab.Screen name="Tech" component={TechScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    );
}

