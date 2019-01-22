import * as React                                          from 'react';
import { Text as RNText, TextStyle, TextProps, StyleProp } from 'react-native';

import { fontWeight, FontWeightKeys, responsiveFontSize, COLORS } from '../../styles';

interface IProps extends TextProps {
    children: any;
    style?: StyleProp<TextStyle>;
    weight?: FontWeightKeys;
    color?: string;
    size?: number;
}

export const Text = ({ children, style, weight = 'regular', color = COLORS.BLACK, size = 2, ...textProps }: IProps) => {
    const ownStyles = {
        color,
        fontFamily: 'SF UI Text',
        fontSize  : responsiveFontSize(size),
        fontWeight: fontWeight[ weight ],
    };

    return (
        <RNText style={ [ ownStyles, style ] } allowFontScaling={ false } { ...textProps }>
            { children }
        </RNText>
    );
};
