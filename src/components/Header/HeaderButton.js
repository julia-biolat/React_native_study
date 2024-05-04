import React from 'react';
import { View, Dimensions, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { SafeAreaInsetsContext, SafeAreaProvider } from 'react-native-safe-area-context';
import { Spacer } from '../Spacer';
import { Icon } from '../Icons';
import { Typography } from '../Typography';
import { Button } from 'react-native';

const { width } = Dimensions.get('window');

export class HeaderIcon extends React.Component {
    render() {
        return (
            <Button onPress={this.props.onPress} style={styles.button}>
                <Icon name={this.props.iconName} size={28} color='black' />
            </Button>
        );
    }
}
