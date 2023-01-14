import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { Box, Flex } from 'native-base';
import { Button } from '@components/commons/Button';
export  function VideoPlayer() {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    return (
        <Flex >
           

        <Box w='100%' h='400px'>
                <Video
                    ref={video}
                    style={{flex:1}}
                    source={{
                        uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                    }}
                    useNativeControls
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
         
         </Box>
    
        </Flex>
    );
}

