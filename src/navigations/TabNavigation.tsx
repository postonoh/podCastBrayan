import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';


import routes from './routes';
import HomeScreen from '../components/home/HomeScreen';
import ProfileScreen from '../components/profile/Profile';
import LibraryScreen from '../components/library/LibraryScreen';
import DownloadsScreen from '../components/downloads/DownloadsScreen';
import { metrics } from '../constants/metrics';
import { theme } from '../constants/theme';



const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: theme.color.green,
            inactiveTintColor: theme.color.blueDarker,
            showLabel: false
        }}>
            <Tab.Screen options={{
                tabBarIcon: ({ color: color }) => <FeatherIcon name="home" size={metrics.tabIconSize} color={color} />
            }} name={routes.HOME} component={HomeScreen} />
            <Tab.Screen options={{
                tabBarIcon: ({ color: color }) => <FeatherIcon name="user" size={metrics.tabIconSize} color={color} />
            }}
                name={routes.PROFILE} component={ProfileScreen} />
            <Tab.Screen options={{
                tabBarIcon: ({ color: color }) => <FeatherIcon name="inbox" size={metrics.tabIconSize} color={color} />
            }}
                name={routes.LIBRARY} component={LibraryScreen} />
            <Tab.Screen options={{
                tabBarIcon: ({ color: color }) => <FeatherIcon name="headphones" size={metrics.tabIconSize} color={color} />
            }}
                name={routes.DOWNLOADS} component={DownloadsScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigation;