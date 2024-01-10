# Joko Beck Zen Teachings 🌸 - React Native App

## INTRO:

This is a beautiful app that lets you read excerpts of her teachings, and save them as 'read', all organized by categories. You also have her video teachings all in the same place.

The purpose is to offer an application that quickly inspires you to keep Beck's 'Nothing Special' powerful Zen way.

Layout inspired on Kindle's mobile app and its `horizontal carousels`:

![joko-beck-app-demo-ezgif com-video-to-gif-converter](https://github.com/vanesascode/zen-joko-beck-react-native-firebase/assets/131259155/fcc4d646-52a3-4b67-947c-48f5d6cfc808)

## SEE FULL DEMO HERE:

https://github.com/vanesascode/fils/assets/131259155/78e8219c-40e8-43ad-b366-70733e8ac680

## FULL DESCRIPTION:

It's an app about Joko Beck, an American Zen teacher that I find really inspiring. 🌸 The app lets you explore her ideas in a very neat and organized way:

- Basically, you can browse through different categories and discover these bite-sized 'pills of information' with Joko Beck's teachings. It's a simple way to dive into her wisdom and explore the topics that resonate with you.

- You can also save your favorite pills to your 'read pills' list. It's like having your own little collection of inspiration right at your fingertips. Whenever you need a little pick-me-up, you can always go back and revisit them.

- And all of Joko Beck's video teachings are also available in the app. So, you can switch between reading and watching her teachings, all in one place. It's like having a virtual Zen master in your pocket!

## TECHNICAL INFO:

### FIREBASE DATABASE:

- `npm install firebase`
- It's a collection called 'pills', fetched and modified directly in the React Native app.

### REACT NATIVE:

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

[React Navigation](https://reactnavigation.org/). Basics for navigating between screens:

- `npm install @react-navigation/native`
- `npx expo install react-native-screens react-native-safe-area-context`

Stack navigation (transition between screens where each new screen is placed on top of a stack):

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
