"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const types_1 = require("../screens/Notifications/types");
const localization_1 = require("./localization");
exports.localNotifications = {
    [types_1.LocalNotificationType.ACCOUNT_VERIFICATION]: {
        type: types_1.LocalNotificationType.ACCOUNT_VERIFICATION,
        description: localization_1.localize('verificationNotificationDescription'),
        title: localization_1.localize('verificationNotificationTitle'),
        isExpanded: true,
    },
    [types_1.LocalNotificationType.REPORT_DAMAGES]: {
        type: types_1.LocalNotificationType.REPORT_DAMAGES,
        description: localization_1.localize('reportDamagesTelNumber', { phone: '03713840235' }),
        title: '',
        isExpanded: true,
    },
    [types_1.LocalNotificationType.RETURN_VEHICLE]: {
        type: types_1.LocalNotificationType.RETURN_VEHICLE,
        description: localization_1.localize('returnVehicleTitle'),
        title: localization_1.localize('returnVehicleTitle'),
        isExpanded: true,
    },
    [types_1.LocalNotificationType.EMAIL_RECEIPT_SENT]: {
        type: types_1.LocalNotificationType.EMAIL_RECEIPT_SENT,
        description: '',
        title: localization_1.localize('receiptSentToEmail'),
        timeout: 3000,
        isExpanded: false,
    },
    [types_1.LocalNotificationType.ENABLE_EMAIL_RECEIPT_SETTING]: {
        type: types_1.LocalNotificationType.ENABLE_EMAIL_RECEIPT_SETTING,
        description: localization_1.localize('enableReceiptsViaEmail'),
        title: localization_1.localize('receiptSentToEmail'),
        isExpanded: true,
    },
};
//# sourceMappingURL=notifications.js.map