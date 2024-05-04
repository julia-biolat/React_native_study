import React from "react";
import { View, Dimensions, TouchableOpacity } from 'react-native';
import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import { Spacer } from "./Spacer";
import { Icon } from "./Icons";
import { Typography } from "./Typography";

const { width } = Dimensions.get('window');

export class HeaderWithoutCompound extends React.Component {
    render() {
        return (
            <SafeAreaInsetsContext.Consumer>
                {inserts => (
                    <View style={{ paddingTop: inserts.top }}>
                        <View style={{
                            width: width,
                            height: 56,
                            flexDirection: 'row',
                            borderBottomColor: 'gray',
                            borderBottomWidth: 1,
                        }}>
                            <Spacer horizontal={true} space={12} />
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    {this.props.leftIcon && (
                                        <TouchableOpacity onPress={this.props.leftIcon.onPress}>
                                            <Icon iconName={this.props.leftIcon.iconName} size={28} />
                                        </TouchableOpacity>
                                    )}
                                    <Typography fontSize={20}>{this.props.title}</Typography>
                                </View>
                                {this.props.rightIcon && (
                                    <TouchableOpacity onPress={this.props.rightIcon.onPress}>
                                        <Icon iconName={this.props.rightIcon.iconName} size={28} />
                                    </TouchableOpacity>
                                )}
                            </View>
                        </View>
                    </View>
                )}
            </SafeAreaInsetsContext.Consumer>
        );
    }
}