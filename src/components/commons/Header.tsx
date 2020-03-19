import React from 'react';
import { Box, Text } from 'react-native-design-utility';
import { theme } from '../../constants/theme';

interface Props {
    title: string;
}

const Header: React.FC<Props> = (props) => {
    return (
        <Box bg={theme.color.blueDark} h={100} justify="end" center >
            <Box px="sm">
                <Text size="2xl" color="white">{props.title}</Text>
            </Box>

        </Box>
    )
}

export default Header;