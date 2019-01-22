"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
const _1 = require("./");
exports.uploadXHRImage = (url, data) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve('Image successfully uploaded to S3');
                }
                else {
                    reject(_1.localize('failedUploadImage'));
                }
            }
        };
        xhr.ontimeout = () => reject(_1.localize('timeoutUploadImage'));
        xhr.timeout = constants_1.UPLOAD_IMAGE_TIMEOUT;
        xhr.open('PUT', url);
        xhr.setRequestHeader('Content-Type', data.type);
        xhr.send(data);
    });
};
//# sourceMappingURL=aws.js.map