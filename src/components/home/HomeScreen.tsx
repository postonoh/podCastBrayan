import React, { RefForwardingComponent } from 'react';
import { Box, Text } from 'react-native-design-utility';
import { ScrollView } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';


import { theme } from '../../constants/theme';

const PodcastCard = () => {
    return <Box w={100} h={100} radius={4} bg="red" mr="sm"></Box>;
}

const Category: React.FC<{ color: string, icon: string }> = ({ color: color, icon: icon }) => {
    const bg = `${color}50`; //"#f4433650"; 
    return (
        <Box center w={75} mr="sm">
            <Box circle={75} bg={bg} center>
                <FeatherIcon name={icon} size={25} color={color} />
            </Box>
            <Box>
                <Text size="sm">Education</Text>
            </Box>
        </Box>

    )
}

const HomeScreen: React.FC = () => {

    return (
        <Box f={1} bg="white">
            <Box mt={100} mb="sm">
                <Box ml="sm" mb="sm">
                    <Text size="xl" weight="bold">
                        Trending
                    </Text>
                </Box>
                <ScrollView contentContainerStyle={{ marginLeft: theme.space.sm }} horizontal showsHorizontalScrollIndicator={false}>
                    <PodcastCard />
                    <PodcastCard />
                    <PodcastCard />
                    <PodcastCard />
                    <PodcastCard />
                </ScrollView>
            </Box>
            <Box>
                <Box ml="sm" mb="sm">
                    <Text size="xl" weight="bold">
                        Categories
                    </Text>
                </Box>
                <ScrollView contentContainerStyle={{ marginLeft: theme.space.sm }} horizontal showsHorizontalScrollIndicator={false}>
                    <Category icon="heart" color={theme.color.red} />
                    <Category icon="heart" color={theme.color.blue} />
                    <Category icon="heart" color={theme.color.greenLight} />
                    <Category icon="heart" color={theme.color.purple} />
                    <Category icon="heart" color={theme.color.black} />
                </ScrollView>
            </Box>
        </Box>
    );
};

export default HomeScreen;