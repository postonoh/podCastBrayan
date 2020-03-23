import React from 'react';
import { Box, Text } from 'react-native-design-utility';

interface Props {
    title: string;
}

const Header: React.FC<Props> = (props) => {
    return (
        <Box bg="blueDarkest" h={150} justify="end">
            <Box px="sm">
                <Text size="3xl" color="white">{props.title}</Text>
            </Box>
        </Box>
    )
}

export default Header