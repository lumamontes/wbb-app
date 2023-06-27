import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import Home from './pages/Home';
import Rankings from './pages/Rankings';
import DailySchedule from './pages/DailySchedule';
import SeasonSchedule from './pages/SeasonSchedule';

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#2B2B2B',
          borderTopColor: 'transparent',
        },
        tabBarActiveTintColor: '#B3384D',
        tabBarShowLabel: false,
        headerStyle: {
          backgroundColor: '#1E1E1E',
          height: 100,
        },
        headerTitleStyle: {
          color: '#FFFFFF'
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="dailySchedule"
        component={DailySchedule}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="today-outline" size={size} color={color} />
          ),
          title: 'Daily Schedule'
        }}
      />
      <Tab.Screen
        name="seasonSchedule"
        component={SeasonSchedule}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Rankings"
        component={Rankings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="podium" size={size} color={color} />
          ),
          title: 'Ranking'
        }}
      />
    </Tab.Navigator>
  );
}