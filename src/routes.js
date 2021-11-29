import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Ionicons } from '@expo/vector-icons';

import Home from './pages/Home';
import Rankings from './pages/Rankings';
import dailySchedule from './pages/dailySchedule';
import seasonSchedule from './pages/seasonSchedule';

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
            <Tab.Screen name="dailySchedule" component={dailySchedule}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="today-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="seasonSchedule" component={seasonSchedule}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="calendar-outline" size={size} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="Rankings" component={Rankings}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="podium" size={size} color={color} />
                    ),
                }}

            />
        </Tab.Navigator>
    )
}