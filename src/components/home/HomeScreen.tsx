import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';
import TrackPlayer from 'react-native-track-player';

import { theme } from '../../constants/theme';
import { itunesApiServices } from '../../services/itunesApiServices';
import { IPodcast } from 'src/types/Podcast';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { routes } from '../../navigations/routes';
import Header from '../commons/Header';
import useStatusBar from '../../hooks/useStatusBar';
import TrackPlayerServices from '../../services/TrackPlayerServices';



const Divider = () => <Box h={1} w="100%" bg="redLightest" />;

const PodcastTitle: React.FC<{ podcast: IPodcast }> = ({ podcast }) => {
    const { navigate } = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigate(routes.PODCAST, { podcast })}>
            <Box dir="row" align="center">
                <Box w={100} h={100} radius="xs" mr="sm">
                    <Image
                        style={{
                            flex: 1,
                        }}
                        source={{ uri: podcast.artworkUrl100 }}
                    />
                </Box>
                <Box>
                    <Text size="sm" weight="bold" numberOfLines={1}>
                        {podcast.trackName}</Text>
                </Box>
            </Box>
            <Divider />
        </TouchableOpacity>

    );
}

const PodcastCard: React.FC<{ podcast: IPodcast }> = ({ podcast }) => {
    const { navigate } = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigate(routes.PODCAST, { podcast })}>
            <Box mr="sm" w={142}>
                <Box
                    w={140}
                    h={140}
                    radius="xs"
                    style={{
                        shadowOffset: { width: 1, height: 1 },
                        borderRadius: theme.radius.xs,
                        shadowColor: "black",
                        shadowRadius: 2,
                    }}
                >
                    <Image
                        style={{
                            flex: 1,
                            borderRadius: theme.radius.xs,
                        }}
                        source={{ uri: podcast.artworkUrl100 }}
                    />
                </Box>
                <Box>
                    <Text weight="bold" size="sm" numberOfLines={2}>{podcast.artistName}</Text>
                </Box>
            </Box>
        </TouchableOpacity>
    );
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
    useStatusBar('light-content')
    const [podcasts, setPodcasts] = React.useState<IPodcast[]>([]);
    React.useEffect(() => {
        itunesApiServices.searchPodcast('syntax').then((results) => {
            setPodcasts(results);
        })
    }, [])

    React.useEffect(() => {
        TrackPlayer.setupPlayer().then(async () => {
            
        }).catch(e => console.log('error', e))
        TrackPlayer.registerPlaybackService(() => TrackPlayerServices);
    }, []);

    return (
        <Box f={1} bg="white">
            <Header title="Discovery" />
            <Box>
                <Box px="sm" mt="md">
                    <Text weight="bold">Hot Trend</Text>
                </Box>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginLeft: theme.space.sm }} >
                    {podcasts.map(podcast => <PodcastCard podcast={podcast} key={podcast.trackId} />)}
                </ScrollView>
            </Box>
        </Box>
    );
};

export default HomeScreen;