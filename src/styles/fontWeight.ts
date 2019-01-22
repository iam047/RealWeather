export const fontWeight: FontWeightType = {
    black: '900',
    bold: '700',
    heavy: '800',
    light: '300',
    medium: '500',
    regular: '400',
    semiBold: '600',
    thin: '100',
    ultraLight: '200'
};

export type FontWeightKeys =
    | 'black'
    | 'bold'
    | 'heavy'
    | 'light'
    | 'medium'
    | 'regular'
    | 'semiBold'
    | 'thin'
    | 'ultraLight';

export type FontWeight = 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

export type FontWeightType = { [K in FontWeightKeys]: FontWeight };
