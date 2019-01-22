"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_fbsdk_1 = require("react-native-fbsdk");
const react_native_google_signin_1 = require("react-native-google-signin");
const constants_1 = require("./constants");
react_native_fbsdk_1.LoginManager.setLoginBehavior(constants_1.IS_IOS ? 'web' : 'web_only');
react_native_google_signin_1.GoogleSignin.hasPlayServices({ autoResolve: true });
react_native_google_signin_1.GoogleSignin.configure({
    forceConsentPrompt: true,
    iosClientId: '252918544315-5rganpp24ddf1tuehr58joilk4i24p6f.apps.googleusercontent.com',
    offlineAccess: false,
    webClientId: '252918544315-9jmtu0a1l9ilqsg6o9sspe3qtahbeuae.apps.googleusercontent.com',
});
exports.fbAuth = () => react_native_fbsdk_1.LoginManager.logInWithReadPermissions(['public_profile', 'email'])
    .then((result) => !result.isCancelled ? react_native_fbsdk_1.AccessToken.getCurrentAccessToken() : null);
exports.googleAuth = () => react_native_google_signin_1.GoogleSignin.signIn();
//# sourceMappingURL=socialAuth.js.map