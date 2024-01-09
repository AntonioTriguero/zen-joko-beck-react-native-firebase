# Joko Beck Zen Teachings 🌸 - React Native App

A beautiful app that lets you read excerpts of her teachings, all organized by categories. You also have her video teachings all in the same place. The purpose is to offer an application that quickly inspires you to keep Beck's 'Nothing Speacial' powerful Zen way.

Layout inspired on Kindle's mobile app and its `horizontal carousels`:

![Captura](https://github.com/vanesascode/zen-joko-beck-react-native-frontend/assets/131259155/650144fe-4a46-4944-befc-4735798ed772)

In Progress ⚠

## Installation:

Expo CLI is a command-line tool that allows you to create, develop, and manage Expo projects:

- `npm install -g expo-cli`

---

Create a project:

- `npx create-expo-app --template` --> then choose 'Blank (TypeScript)' // or `expo init <name of app>` (it also lets you choose between js ts)

- `npm install -D @tsconfig/react-native @types/jest @types/react @types/react-test-renderer typescript` (the typescript types libraries)

---

To run project on web (it is uncompatible with react-native-youtube-iframe package)

- `npx expo install react-native-web@~0.19.6 `
- `npx expo install react-dom@18.2.0 `
- `npx expo install @expo/webpack-config`

### Libraries:

Icons. You choose an icon from the [site](https://icons.expo.fyi/Index) and it tells you what to import and how to use it:

- `npm install @expo/vector-icons`

[React Navigation](https://reactnavigation.org/)

Basics for navigating between screens:

- `npm install @react-navigation/native`
- `npx expo install react-native-screens react-native-safe-area-context`

Stack navitation(transition between screens where each new screen is placed on top of a stack):

- `npm install @react-navigation/stack`
- `npx expo install react-native-gesture-handler` (Gesture recognizers and touch handling components)
- `npx expo install react-native-reanimated` (Smooth and high-performance animations in your app)

Youtube videos rendering [library](https://lonelycpp.github.io/react-native-youtube-iframe/install):

- `npm install react-native-webview`
- `npm install react-native-youtube-iframe`

---

Libraries tested:

To be able to [render FlatLists inside a ScrollView](https://github.com/computerjazz/react-native-draggable-flatlist/blob/main/README.md)

- `npm install --save react-native-draggable-flatlist`

```
  module.exports = {
    presets: [
      ...
    ],
    plugins: [
      ...
      'react-native-reanimated/plugin',
    ],
  };
```

- `npx expo start -c`

[Fonts](https://docs.expo.dev/versions/latest/sdk/font/) - ttf / otf

- `npx expo install expo-font`

Run command:

- `npx expo start`
