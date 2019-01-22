"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_calendars_1 = require("react-native-calendars");
const react_native_i18n_1 = require("react-native-i18n");
const Helpshift = require("react-native-helpshift");
const _ = require("lodash");
const moment = require("moment");
const types_1 = require("./types");
const _1 = require("./");
const en = require("../locales/en.json");
const fi = require("../locales/fi.json");
require("moment/locale/fi"); // tslint:disable-line
react_native_calendars_1.LocaleConfig.locales['fi'] = {
    dayNames: ['Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai', 'Sunnuntai'],
    dayNamesShort: ['Ma', 'Ti', 'Ke', 'To', 'Pe', 'La', 'Su'],
    monthNames: [
        'Tammikuu',
        'Helmikuu',
        'Maaliskuu',
        'Huhtikuu',
        'Toukokuu',
        'Kesäkuu',
        'Heinäkuu',
        'Elokuu',
        'Syyskuu',
        'Lokakuu',
        'Marraskuu',
        'Joulukuu',
    ],
    monthNamesShort: ['Tam', 'Hel', 'Maa', 'Huh', 'Tou', 'Kes', 'Hei', 'Elo', 'Syy', 'Lok', 'Mar', 'Jou'],
};
react_native_calendars_1.LocaleConfig.locales.en = react_native_calendars_1.LocaleConfig.locales[''];
react_native_i18n_1.default.fallbacks = true;
react_native_i18n_1.default.translations = { en, fi };
const actions = Object.keys(types_1.TextActions);
exports.localize = (name, params = {}) => {
    const localizedText = react_native_i18n_1.default.t(name, params);
    const param = _.find(_.keys(params), (name) => _.includes(actions, name));
    if (param) {
        return _1.textCasesConfig[param](localizedText);
    }
    return localizedText;
};
exports.changeLanguage = (language, isInitial = false) => {
    const nextLanguage = _1.selectLanguage(language);
    react_native_calendars_1.LocaleConfig.defaultLocale = nextLanguage;
    moment.locale(nextLanguage);
    react_native_i18n_1.default.locale = nextLanguage;
    !isInitial && Helpshift.setLanguage(nextLanguage);
    return nextLanguage;
};
exports.formatLanguageForPicker = (language) => {
    const languages = {
        en: 'eng',
        fi: 'fin',
    };
    return languages[language] || 'en';
};
exports.geDatePickerLabelUnit = () => ({
    year: exports.localize('year', { upper: true })[0],
    month: exports.localize('month', { upper: true })[0],
    day: exports.localize('day', { upper: true })[0],
});
//# sourceMappingURL=localization.js.map