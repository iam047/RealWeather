"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDriverLicenseStatus = (driversLicense) => {
    if (!driversLicense) {
        return 'NOT VERIFIED';
    }
    return driversLicense.licenseVerified === 'UNVERIFIED' ? 'NOT VERIFIED' : driversLicense.licenseVerified;
};
//# sourceMappingURL=driverLicense.js.map