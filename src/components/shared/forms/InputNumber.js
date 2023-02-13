import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

export default props => {
    return (
        <View style={[styles.container, props.style]}>
            <TextInput {...props} style={styles.input} />
            <Icon name={props.icon} size={20} style={styles.icon} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        color: '#333',
        marginLeft: 65
    },
    input: {
        width: '70%'
    }
})