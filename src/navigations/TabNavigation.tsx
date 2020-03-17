import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from './routes';
import HomeScreen from 'src/components/home/HomeScreen';
import ProfileScreen from 'src/components/profile/Profile';
import LibraryScreen from 'src/components/library/LibraryScreen';
import DownloadsScreen from 'src/components/downloads/DownloadsScreen';


const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={routes.HOME} component={HomeScreen} />
            <Tab.Screen name={routes.PROFILE} component={ProfileScreen} />
            <Tab.Screen name={routes.LIBRARY} component={LibraryScreen} />
            <Tab.Screen name={routes.DOWNLOADS} component={DownloadsScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigation;