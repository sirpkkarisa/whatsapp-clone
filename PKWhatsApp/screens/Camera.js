import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { useCamera } from 'react-native-camera-hooks'

const Camera = () => {

    const [{cameraRef}, {takePicture}] = useCamera(null)
    return (
        <View style={styles.container}>
            <RNCamera
                ref={cameraRef}
                type={RNCamera.Constants.Type.back}
                style={styles.preview}
            >
            </RNCamera>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    preview: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#000000'
    }
})

export default Camera
