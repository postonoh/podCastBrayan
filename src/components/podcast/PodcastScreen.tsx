import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { useRoute, RouteProp } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { IPodcast } from '../../types/Podcast';
import { Image, ActivityIndicator, ScrollView } from 'react-native';
import { feedUrlServices } from '../../services/FeedUrlServices';
import { Feed } from 'react-native-rss-parser';
import { theme } from '../../constants/theme';
import { TouchableOpacity } from 'react-native-gesture-handler';
import useStatusBar from '../../hooks/useStatusBar';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { observer } from 'mobx-react';
import { useRootStore } from '../../contexts/RootStoreContext';


type ProfileScreenRouteProp = RouteProp<
    { Podcast: { podcast: IPodcast } },
    'Podcast'
>;

const PodcastScreen: React.FC = () => {
    useStatusBar('dark-content')
    const { params } = useRoute<ProfileScreenRouteProp>();
    const { playerStore } = useRootStore();
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
                    <Box dir="row" p="sm" mb="sm">
                        <Box h={100} w={100} mr="sm">
                            <Image source={{ uri: params.podcast.artworkUrl100 }}
                                style={{
                                    flex: 1,
                                    borderRadius: theme.radius.sm,
                                }}
                            />
                        </Box>
                        <Box f={1} center >
                            <Text size="sm">
                                {feed?.description}
                            </Text>
                        </Box>
                    </Box>
                    {feed?.items.map(item => (
                        <Box key={item.id}>
                            <Box px="sm" py="sm" dir="row" align="center" justify="between">
                                <Box f={1}>
                                    <TouchableOpacity onPress={async () => {
                                        await playerStore.start({
                                            id: item.id,
                                            url: item.links[0].url,
                                            title: item.title,
                                            artist: params.podcast.artistName,
                                            artwork: item.itunes.image,
                                            duration: item.itunes.duration
                                        });
                                    }}>
                                        <Text numberOfLines={1} weight="bold" size="sm">{item.title}</Text>
                                        <Box dir="row">
                                            <Text color="redLight" size="xs" weight="bold" mr="sm" >
                                                {formatDistanceToNow(new Date(item.published), { addSuffix: true })}
                                            </Text>
                                            <Text color="redLight" size="xs">{item.itunes.duration}</Text>
                                        </Box>
                                    </TouchableOpacity>
                                </Box>
                                <Box w={50} align="end">
                                    <FeatherIcon name="arrow-down-circle" size={20} color={theme.color.redLight} />
                                </Box>
                            </Box>
                            <Box h={1} w="100%" bg="redLightest" />
                        </Box>
                    ))}
                </ScrollView>
            </Box>
        </Box>
    )
}

export default observer(PodcastScreen);