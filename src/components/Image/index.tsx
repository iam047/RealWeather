import * as React from 'react';
import { Image as RNImage, ImageProps, ImageStyle, StyleProp } from 'react-native';

import { FontWeightKeys } from '../../styles';

interface IProps extends ImageProps {
    children: any;
    style?: StyleProp<ImageStyle>;
    weight?: FontWeightKeys;
    color?: string;
    size?: number;
}

export const Image = ({ children, style, ...imageProps }: IProps) => (
    <RNImage style={style} {...imageProps}>
        {children}
    </RNImage>
);
