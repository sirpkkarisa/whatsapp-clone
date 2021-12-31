import React, { useState } from 'react'
import { FlatList, Text, View,Image, StyleSheet } from 'react-native'

const Chats = () => {
    const [items, setItems] = useState([
        {profile: 'https://images.pexels.com/photos/9051849/pexels-photo-9051849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', identifier: 'Joan Kimani', lastText:'Last Text', lastSeen:'12:00', lastTexted: '11:20'},
        {profile: 'https://images.pexels.com/photos/9051849/pexels-photo-9051849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', identifier: 'Joan Kimani', lastText:'Last Text', lastSeen:'12:00', lastTexted: '11:20'},
        {profile: 'https://images.pexels.com/photos/9051849/pexels-photo-9051849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', identifier: 'Joan Kimani', lastText:'Last Text', lastSeen:'12:00', lastTexted: '11:20'},
        {profile: 'https://images.pexels.com/photos/9051849/pexels-photo-9051849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', identifier: 'Joan Kimani', lastText:'Last Text', lastSeen:'12:00', lastTexted: '11:20'},
        {profile: 'https://images.pexels.com/photos/9051849/pexels-photo-9051849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', identifier: 'Joan Kimani', lastText:'Last Text', lastSeen:'12:00', lastTexted: '11:20'},
        {profile: 'https://images.pexels.com/photos/9051849/pexels-photo-9051849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', identifier: 'Joan Kimani', lastText:'Last Text', lastSeen:'12:00', lastTexted: '11:20'},
        {profile: 'https://images.pexels.com/photos/9051849/pexels-photo-9051849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', identifier: 'Joan Kimani', lastText:'Last Text', lastSeen:'12:00', lastTexted: '11:20'},
        {profile: 'https://images.pexels.com/photos/9051849/pexels-photo-9051849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', identifier: 'Joan Kimani', lastText:'Last Text', lastSeen:'12:00', lastTexted: '11:20'},
        {profile: 'https://images.pexels.com/photos/9051849/pexels-photo-9051849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', identifier: 'Joan Kimani', lastText:'Last Text', lastSeen:'12:00', lastTexted: '11:20'},
        {profile: 'https://images.pexels.com/photos/9051849/pexels-photo-9051849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', identifier: 'Joan Kimani', lastText:'Last Text', lastSeen:'12:00', lastTexted: '11:20'},
        {profile: 'https://images.pexels.com/photos/9051849/pexels-photo-9051849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', identifier: 'Joan Kimani', lastText:'Last Text', lastSeen:'12:00', lastTexted: '11:20'},
        {profile: 'https://images.pexels.com/photos/9051849/pexels-photo-9051849.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', identifier: 'Joan Kimani', lastText:'Last Text', lastSeen:'12:00', lastTexted: '11:20'},
    ])
    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={({item})=>(
                    <View style={styles.item}>
                        <Image style={styles.profile} source={{uri: item.profile}}/>
                        <View style={styles.details}>
                            <View style={styles.childDetails}>
                                <Text style={styles.identifier}>{item.identifier}</Text>
                                <Text style={styles.timestamps}>{item.lastSeen}</Text>
                            </View>
                            <View style={styles.childDetails}>
                                <Text style={styles.fade}>{item.lastText}</Text>
                                <Text style={styles.timestamps}>{item.lastTexted}</Text>
                            </View>
                        </View>
                    </View>
                )}
                keyExtractor={(item, id) => id}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 10,
    },
    profile: {
        width: 66,
        height: 58,
        borderRadius: 50,
    },
    details: {
        marginLeft: 20,
    },
    childDetails: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300
    },
    identifier: {
        fontSize: 15,
        color: '#555555'
    },
    fade: {
        color: '#888',
        opacity: 0.8
    },
    timestamps: {
        color: '#888',
        opacity: 0.8,
        fontSize: 12,
    }
})

export default Chats
