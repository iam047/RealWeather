import { SCREEN_HEIGHT, SCREEN_WIDTH } from './constans';

export const responsiveHeight = (h: number) => SCREEN_HEIGHT * (h / 100);

export const responsiveWidth = (w: number) => SCREEN_WIDTH * (w / 100);

export const responsiveFontSize = (percent: number) => {
    const heightPercent = (percent * SCREEN_HEIGHT ) / 100;

    return Math.round(heightPercent);
};
