import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { theme } from '../../constants/theme';

interface Props {
    title: string;
}

const Header: React.FC<Props> = (props) => {
    return (
        <Box bg={theme.color.blueDark} h={150} justify="end">
            <Box px="sm">
                <Text size="3xl" color="white">{props.title}</Text>
            </Box>
        </Box>
    )
}

export default Header;