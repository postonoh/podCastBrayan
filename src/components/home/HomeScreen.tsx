import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { ScrollView } from 'react-native-gesture-handler';
import FeatherIcon from 'react-native-vector-icons/Feather';


import { theme } from '../../constants/theme';
import { itunesApiServices } from '../../services/itunesApiServices';
import { IPodcast } from 'src/types/Podcast';
import { Image } from 'react-native';

const Divider = () => <Box h={1} w="100%" bg="greyLight" />;

const PodcastTitle: React.FC<{ podcast: IPodcast }> = ({ podcast }) => {
    return (
        <Box mb="sm">
            <Box dir="row"align="center">
                <Box w={100} h={100} radius="xs" mr="sm">
                    <Image
                        style={{
                            flex: 1, borderRadius: theme.radius.xs,
                            
                        }}
                        source={{ uri: podcast.artworkUrl100 }}
                    />
                </Box>
                <Box>
                    <Text size="sm" weight="bold" numberOfLines={1}>
                        {podcast.artistName}</Text>
                </Box>
            </Box>
            <Divider />
        </Box>

    );
}

const PodcastCard: React.FC<{ podcast: IPodcast }> = ({ podcast }) => {
    return (
        <Box mr="sm" w={100}>
            <Box w={100} h={100}>
                <Image
                    style={{
                        flex: 1,
                    }}
                    source={{ uri: podcast.artworkUrl100 }}
                />
            </Box>
            <Box>
                <Text size="sm" numberOfLines={2}>{podcast.trackName}</Text>
            </Box>
        </Box>

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
    const [podcasts, setPodcasts] = React.useState<IPodcast[]>([]);
    React.useEffect(() => {
        itunesApiServices.searchPodcast('syntax').then((results) => {
            setPodcasts(results);
        })
    }, [])

    return (
        <Box f={1} bg="white">
            <Box mt={100} mb="sm">
                {/* <Box ml="sm" mb="sm">
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
                </ScrollView>  */}
            </Box>
            <Box>
                <ScrollView >
                    {podcasts.map(podcast => <PodcastTitle podcast={podcast} key={podcast.trackId} />)}
                </ScrollView>
            </Box>
        </Box>
    );
};

export default HomeScreen;