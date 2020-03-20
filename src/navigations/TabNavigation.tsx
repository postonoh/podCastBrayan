import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { createStackNavigator } from '@react-navigation/stack';

import routes from './routes';
import HomeScreen from '../components/home/HomeScreen';
import ProfileScreen from '../components/profile/Profile';
import LibraryScreen from '../components/library/LibraryScreen';
import DownloadsScreen from '../components/downloads/DownloadsScreen';
import { metrics } from '../constants/metrics';
import { theme } from '../constants/theme';
import PodcastScreen from '../components/podcast/PodcastScreen';
import { IPodcast } from '../types/Podcast';
import { truncate } from '../helpers/text';
import TabBar from '../components/commons/TabBar';



type HomeStackParams = {
    Home: undefined;
    Podcast: { podcast: IPodcast }
}

const HomeStack = createStackNavigator<HomeStackParams>();

const HomeNavigation: React.FC = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                options={{ headerShown: false }}
                component={HomeScreen}
            />
            <HomeStack.Screen
                name="Podcast"
                component={PodcastScreen}
                options={({ route }) => {
                    return {
                        title: truncate(route.params?.podcast.trackName, 20),
                    };
                }} />
        </HomeStack.Navigator>
    );
};


const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
    return (        
        <Tab.Navigator
            tabBar={(props) => <TabBar {...props}/>}
            tabBarOptions={{
            activeTintColor: theme.color.blueDarkest,
            inactiveTintColor: theme.color.red,
            showLabel: false
        }}>
            <Tab.Screen options={{
                tabBarIcon: ({ color: color }) => (
                    <FeatherIcon name="home" size={metrics.tabIconSize} color={color} />
                ),
            }}
                name={routes.HOME}
                component={HomeNavigation}
            />
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