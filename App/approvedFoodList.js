import React, { Component } from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Icon, SearchBar } from 'react-native-elements'
import CategoryRow from './Components/CategoryRow';
import mockFoodItems from './mockFoodItems';

var msgIcon = require('../App/Assets/Images/message-icon.png');

export default class approvedFoodList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            food: mockFoodItems.foodItem,
            filterData: []

        }
    };
    // If you need data from the API :
    // async componentDidMount() {
    //     const response = await fetch('https://api.jsonbin.io/b/60e7f4ebf72d2b70bbac2970')
    //     const data = await response.json()
    //     this.setState({ food: data.data })
    // }
    updateSearch = (search) => {
        let filterData = this.state.food.filter(function (item) {
            return (
                (item.title.toLowerCase().includes(search.toLowerCase()))
            )
        })
        this.setState({ search, filterData });
        console.log(this.state.filterData, 'Hello')

    };

    render() {
        const { food, filterData, search } = this.state
        return (
            <View style={styles.container}>
                <View style={styles.rowHeader}>
                    <TouchableOpacity>
                        <Icon name='close' color='#000' size={40} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.msgIconContainer} >
                    <Image source={msgIcon} style={styles.msgIcon} />
                </TouchableOpacity>
                <Text style={styles.headingTxt}>Approved Food Lists</Text>

                <SearchBar
                    placeholder="Try searching fat, sauces names..."
                    placeholderTextColor={'#C5CBD2'}
                    onChangeText={this.updateSearch}
                    value={search}
                    containerStyle={styles.searchBox}
                    inputContainerStyle={styles.searchTxt}
                />
                <FlatList
                    data={filterData.length > 0 ? filterData : food}
                    renderItem={({ item: food }) => <CategoryRow food={food} />}
                    keyExtractor={(food) => food.id}
                />

            </View >
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAE9F0'
    },
    rowHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: '4%',
        marginLeft: '2%',
        marginTop: '8%',
        position: 'relative',
    },
    msgIconContainer: {
        alignSelf: 'flex-end',
        position: 'absolute',
        marginTop: '7%',
        paddingRight: '4%',
    },
    msgIcon: {
        height: 48,
        width: 48
    },
    headingTxt: {
        margin: '4%',
        marginBottom: '6%',
        fontSize: 28,
        fontWeight: '500',
    },
    searchBox: {
        backgroundColor: 'transparent',
        borderBottomColor: 'transparent',
        borderTopColor: 'transparent',
        marginHorizontal: '2%'
    },
    searchTxt: {
        backgroundColor: '#E8F0F6'
    }
});