require('dotenv/config');

module.exports =
{
  "expo": {
    "name": "CroxxLearn",
    "slug": "CroxxLearn",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "permissions": [
        "android.permission.READ_EXTERNAL_STORAGE",
        "android.permission.WRITE_EXTERNAL_STORAGE",
        "android.permission.DOWNLOAD_WITHOUT_NOTIFICATION",
        "android.permission.ACCESS_NETWORK_STATE"
      ],
      "package": "com.itachi7.pdf"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "EXPO_PUBLIC_HOST": process.env.EXPO_PUBLIC_HOST || null,
      "eas": {
          "projectId": "f6b556e5-b180-4a3b-8be2-fcbbd5a93948"
        },
    },
  }
}