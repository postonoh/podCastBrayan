import React from 'react';
import { Box } from 'react-native-design-utility';
import { useSafeArea } from 'react-native-safe-area-context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Player from './Player';
import routes from '../../navigations/routes';
import { metrics } from '../../constants/metrics';
import { theme } from '../../constants/theme';


const ICONS = {
    [routes.HOME]: 'home',
    [routes.DOWNLOADS]: 'headphones',
    [routes.LIBRARY]: 'inbox',
    [routes.PROFILE]: 'user'
}

const activeTintColor = theme.color.blueDark;
const inactiveTintColor = theme.color.redLight;


const TabBar: React.FC<BottomTabBarProps> = (props) => {
    const insets = useSafeArea();
    return (
        <>
            <Player />
            <Box h={50 + insets.bottom} w="100%" dir="row">
                {
                    props.state.routes.map(route => {
                        const icon = ICONS[route.name];
                        const color = route.key === props.state.key ? activeTintColor : inactiveTintColor;
                        return (
                            <Box key={route.key} f={1} center>
                                <FeatherIcon name={icon} size={metrics.tabIconSize} color={color}/>
                            </Box>
                        )
                    })}
            </Box>
        </>
    )
}

export default TabBar;