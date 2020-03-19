import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { IPodcast } from '../../types/Podcast'
import { Image, ActivityIndicator } from 'react-native';
import { feedUrlServices } from '../../services/FeedUrlServices';
import { Feed } from 'react-native-rss-parser';
import { theme } from '../../constants/theme';
import { ScrollView } from 'react-native-gesture-handler';

type ProfileScreenRouteProp = RouteProp<
    { Podcast: { podcast: IPodcast } },
    'Podcast'
>;

const PodcastScreen: React.FC = () => {
    const { params } = useRoute<ProfileScreenRouteProp>();
    const [feed, setFeed] = React.useState<Feed | null>(null);

    React.useEffect(() => {
        feedUrlServices.getFeed(params.podcast.feedUrl).then(result => {
            setFeed(result);
        });
    }, []);

    if (!feed) {
        return (
            <Box f={1} bg="white" center>
                <ActivityIndicator color={theme.color.blueDarkest} size="large" />
            </Box>
        );
    }

    return (
        <Box f={1} bg="white">
            <Box>
                <ScrollView>
                    <Box dir="row" pr="sm" mb="sm">
                        <Box h={100} w={100} mr="xs">
                            <Image source={{ uri: params.podcast.artworkUrl100 }}
                                style={{ flex: 1 }}
                            />
                        </Box>
                        <Box f={1} >
                            <Text numberOfLines={1}>{params.podcast.trackName}</Text>
                        </Box>
                    </Box>
                    <Box px="sm" mb="sm">
                        <Text>
                            {feed?.description}
                        </Text>
                    </Box>
                    <Box px="sm">
                        {feed?.items.map(item => (
                            <Box key={item.id}>
                                <Box>
                                    <Box h={50} w={50}>
                                        <Image source={{ uri: item.itunes.image }} style={{ flex: 1 }} />
                                    </Box>
                                    <Box>
                                        <Text>{item.title} </Text>
                                    </Box>
                                </Box>
                                <Box h={1.5} w="100%" bg="red" />
                            </Box>
                        ))}
                    </Box>
                </ScrollView>
            </Box>
        </Box>
    )
}

export default PodcastScreen;