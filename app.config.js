require('dotenv/config');

module.exports =
{
  "expo": {
    "name": "CroxxLearn",
    "slug": "CroxxLearn",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/app-icon-all.png",
    "userInterfaceStyle": "light",

    "updates": {
      "url": "https://u.expo.dev/f6b556e5-b180-4a3b-8be2-fcbbd5a93948"
    },
    "runtimeVersion": {
      "policy": "appVersion"
    },

    "splash": {
      "image": "./assets/images/CroxxImage/backr.png",
      "resizeMode": "contain",
      "backgroundColor": "radial-gradient(35.87% 43.29% at 63.93% 54.91%, rgba(255, 255, 255, 0.00) 0%, rgba(0, 0, 0, 0.20) 84.72%), url(<path-to-image>), lightgray 50% / cover no-repeat"
    },
    "ios": {
      "icon": "./assets/images/app-icon-ios.png",
      "supportsTablet": true,
      "bundleIdentifier": "com.CroxxLearn",
      "splash": {
        "image": "./assets/images/splash-logo-ios-mobile.png",
        "tabletImage": "./assets/images/splash-logo-ios-tablet.png",
        "resizeMode": "contain",
        "backgroundColor": "#191015"
      }
    },
    "android": {
      "icon": "./assets/images/app-icon-android-legacy.png",
      "package": "com.CroxxLearn",
      "splash": {
        "image": "./assets/images/CroxxImage/backr.png",
        "resizeMode": "contain",
        "backgroundColor": "black"
      },
      "permissions": [
        "android.permission.READ_EXTERNAL_STORAGE",
        "android.permission.WRITE_EXTERNAL_STORAGE",
        "android.permission.DOWNLOAD_WITHOUT_NOTIFICATION",
        "android.permission.ACCESS_NETWORK_STATE"
      ]
    },
    "web": {
      "favicon": "./assets/images/app-icon-web-favicon.png",
      "build": {
        "babel": {
          "include": ["react-native", "react-native-web"]
        }
      },
      "web": {
        "bundler": "metro"
      }
    },
    "plugins": [
      [
        "expo-build-properties",
        {
          "android": {
            "compileSdkVersion": 33,
            "targetSdkVersion": 33,
            "buildToolsVersion": '33.0.0',
            "kotlinVersion": "1.7.10"
          }
        }
      ],
    ],
    "extra": {
      "EXPO_PUBLIC_HOST": process.env.EXPO_PUBLIC_HOST || null,
      "eas": {
        "projectId": "f6b556e5-b180-4a3b-8be2-fcbbd5a93948"
      },
    },
  }
}