import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { ScrollView } from 'react-native-gesture-handler';
import { theme } from '../../constants/theme';

const HomeScreen: React.FC = () => {
    return (
        <Box f={1} center bg="white">
            <Box mt="xl" >
                <Box ml="sm" mb="sm">
                    <Text size="xl" weight="bold">
                        Trending
                    </Text>
                </Box>
                <Box>
                    <ScrollView contentContainerStyle={{ marginLeft: theme.space.sm }} horizontal showsHorizontalScrollIndicator={false}>
                        <Box w={100} h={100} radius={4} bg="red" mr="sm"></Box>
                        <Box w={100} h={100} radius={4} bg="red" mr="sm"></Box>
                        <Box w={100} h={100} radius={4} bg="red" mr="sm"></Box>
                        <Box w={100} h={100} radius={4} bg="red" mr="sm"></Box>
                        <Box w={100} h={100} radius={4} bg="red" mr="sm"></Box>
                    </ScrollView>
                </Box>
            </Box>
        </Box>
    );
};

export default HomeScreen;