/**
 * PropertyFinder App
 * @wheelo
 */

import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    NavigatorIOS,
    View
} from 'react-native';


import SearchPage from './SearchPage';


const styles = StyleSheet.create({
    text: {
        color: 'black',
        backgroundColor: 'white',
        fontSize: 30,
        margin: 80
    },
    container: {
        flex: 1
    }
});


class HelloWorld extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>
                    Hello World!
                </Text>  
            </View>
        );
    }
}


export default class PropertyFinderApp extends Component {
    render() {
        return (
          <NavigatorIOS
            style={styles.container}
            initialRoute={{
                title: 'Property Finder',
                component: SearchPage,
            }}/>
        );
    }
}



AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp);
