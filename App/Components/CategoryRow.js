import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import Collapsible from 'react-native-collapsible'
import Icon from 'react-native-vector-icons/AntDesign'

export default function CategoryRow({ food }) {

    const [isToggled, setIsToggled] = React.useState(true);
    const toggle = React.useCallback(
        () => setIsToggled(!isToggled),
        [isToggled, setIsToggled],
    );

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.headerSection}
                onPress={toggle}
            >
                <View style={styles.headingView}>
                    <Image source={{ uri: food.image }} style={styles.poster} />
                    <Text style={styles.title}>{food.title}</Text>

                </View>

                <View style={styles.iconContainer}>
                    {isToggled == true ? <Icon name='caretdown' color='#B3BEC3' size={15} /> :
                        <Icon name='caretup' color='#B3BEC3' size={15} />}
                </View>
            </TouchableOpacity>
            <Collapsible collapsed={isToggled}  >
                <View style={styles.dropDown}>
                    <Text>
                        {food.data[0].title}
                    </Text>
                </View>
            </Collapsible>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 12
    },
    headerSection: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 15,
        alignItems: 'center',
        backgroundColor: 'white',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    headingView: {
        flex: 8,
        alignItems: 'center',
        flexDirection: 'row'
    },
    poster: {
        marginHorizontal: 10,
        marginVertical: 8,
        width: 55,
        height: 50,
        resizeMode: 'contain',
        backgroundColor: 'pink'
    },
    title: {
        fontSize: 15,
        fontWeight: '700',
    },
    iconContainer: {
        flex: 1.5,
        alignItems: 'center',
    },
    dropDown: {
        backgroundColor: 'white',
        marginHorizontal: 15,
        padding: '2%',
        paddingLeft: '4%',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        borderTopWidth: 1,
        borderTopColor: '#EAE9F0'
    }

});