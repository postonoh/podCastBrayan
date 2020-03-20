import React from 'react';
import { Box } from 'react-native-design-utility';
import { useSafeArea } from 'react-native-safe-area-context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Player from './Player';
import routes from '../../navigations/routes';
import { metrics } from '../../constants/metrics';
import { theme } from '../../constants/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';


const ICONS = {
    [routes.HOME]: 'home',
    [routes.DOWNLOADS]: 'headphones',
    [routes.LIBRARY]: 'inbox',
    [routes.PROFILE]: 'user'
}


const TabBar: React.FC<BottomTabBarProps> = (props) => {
    const insets = useSafeArea();

    const activeTintColor = theme.color.blueDark;
    const inactiveTintColor = theme.color.redLight;

    const onTabPress = (routeName: string, routeIndex: number) => () => {
        props.navigation.navigate(routeName);
    };
    
    return (
        <>
            <Player />
            <Box h={50 + insets.bottom} w="100%" dir="row">
                {
                    props.state.routes.map((route, index) => {
                        const icon = ICONS[route.name];

                        const color = props.state.index === index ? activeTintColor : inactiveTintColor;

                        return (
                            <Box f={1} center key={route.key}>
                                <TouchableOpacity style={styles.tabBtn}
                                    onPress={onTabPress(route.name, index)}>
                                    <Box f={1} center>
                                        <FeatherIcon name={icon} size={metrics.tabIconSize} color={color} />
                                    </Box>
                                </TouchableOpacity>
                            </Box>
                        );
                    })}
            </Box>
        </>
    )
}
const styles = StyleSheet.create({
    tabBtn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default TabBar;