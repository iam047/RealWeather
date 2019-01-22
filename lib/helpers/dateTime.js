"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
const constants_1 = require("./constants");
const other_1 = require("./other");
const localization_1 = require("./localization");
const _partial = require("lodash/partial"); // tslint:disable-line
exports.roundMinutesInDate = (date) => {
    if (date.minutes()) {
        date.minutes(0);
        date.add(1, 'hours');
    }
    return date;
};
exports.getDuration = (startDate, endDate) => moment.duration(moment(endDate).diff(moment(startDate)));
exports.getStartedRentDate = (pickupDateTime) => pickupDateTime < Date.now()
    ? +moment().add(1, 'minutes').seconds(0).format('X')
    : +moment(pickupDateTime).seconds(0).format('X');
exports.formatUnixTimestamp = (value) => moment.unix(+value).format('D.M.YYYY HH:mm');
exports.getStartsTime = (startDate) => moment()
    .subtract(moment.duration(startDate * 1000 - +moment().format('x'))).toNow();
exports.getRentProgressTimes = (startDate, endDate) => {
    const totalTime = exports.getDuration(startDate * 1000, endDate * 1000);
    const startTimeDuration = exports.getDuration(startDate * 1000, +moment());
    const processTime = +startTimeDuration < 0 ? 0 : startTimeDuration;
    const isRentalExpires = 100 - ((+processTime) * 100 / +totalTime) <= constants_1.RENTAL_EXPIRES_PERCENTAGE;
    return { totalTime, processTime: totalTime < processTime ? totalTime : processTime, isRentalExpires };
};
exports.getRentTimeLeft = (endDate) => {
    const duration = exports.getDuration(+moment(), endDate * 1000);
    const days = ~~duration.asDays();
    const hours = duration.hours();
    const minutes = duration.minutes();
    if ([days, hours, minutes].some(other_1.isNegative)) {
        return localization_1.localize('rentalIsFinished');
    }
    const timeValues = [days && `${days}d`, hours && `${hours}h`].filter(Boolean);
    if (!days) {
        timeValues.push(`${minutes <= 0 ? 1 : minutes}m`);
    }
    return timeValues.join(' ');
};
exports.getRoundedTime = (duration, formatHours, formatDays) => {
    duration.minutes() && duration.add({ minutes: 60 - duration.minutes() });
    const days = ~~duration.asDays();
    const hours = ~~duration.asHours() - ~~moment.duration({ days }).asHours();
    return {
        days: formatDays ? formatDays(days) : days,
        hours: formatHours ? formatHours(hours) : hours,
    };
};
exports.getDurationHoursByDST = (startDate, returnDate, hours) => {
    if (startDate.isDST() && !returnDate.isDST()) {
        return hours - 1;
    }
    else if (!startDate.isDST() && returnDate.isDST()) {
        return hours + 1;
    }
    return hours;
};
exports.getRentDuration = (startDate, endDate) => {
    const duration = exports.getDuration(startDate * 1000, endDate * 1000);
    const { hours, days } = exports.getRoundedTime(duration, _partial(exports.getDurationHoursByDST, moment(startDate * 1000), moment(endDate * 1000)));
    const hoursText = hours ? other_1.pluralize({ word: 'hour', value: hours, withValue: true }) : '';
    const daysText = days ? other_1.pluralize({ word: 'day', value: days, withValue: true }) : '';
    return { hoursText, daysText };
};
//# sourceMappingURL=dateTime.js.map