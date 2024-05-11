import React from 'react';
import { Text as RNText } from 'react-native';
import PropTypes from 'prop-types'; // prop-types 패키지 import

/*
export class Typography extends React.Component {
    render() {
        const { color, fontSize, children } = this.props; // 속성 추출

        return (
            <RNText
                style={{
                    color: color,
                    fontSize: fontSize
                }}>
                {children}
            </RNText>
        );
    }
}
*/
export const Typography = (props)=>{
    return(
        <RNText
            style={{
                color: props.color,
                fontSize: props.fontSize
            }}>
            {props.children}
        </RNText>
    )
}

// propTypes 정의
Typography.propTypes = {
    color: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired
};
