import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import Collapsible from 'react-native-collapsible'
import Icon from 'react-native-vector-icons/AntDesign'

export default function CategoryRow({ food }) {

    const [isToggled, setIsToggled] = React.useState(true);
    const toggle = React.useCallback(
        () => setIsToggled(!isToggled)
    );
    console.log(food.data, 'Bye')

    const renderItem = ({ item }) => (
        <View style={styles.dropDown}>
            <Text>
                {item.title}
            </Text>
        </View>
    );

    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{food.data.title}</Text>
        </View>
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
                <FlatList
                    data={food.data}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
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
        padding: 8,
        paddingLeft: '4%',
        borderTopWidth: 1,
        borderTopColor: '#EAE9F0',
        borderBottomEndRadius: 8,
    }

});