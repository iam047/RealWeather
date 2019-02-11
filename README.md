# RealWeather

# Prerequisites

* Xcode (Mac only)
* Node (recently new version, v10 ->)
* Android Studio or android SDK installed separately

```sh
git clone git@github.com:iam047/RealWeather.git
```

Create a local dev branch

```sh
git checkout -b dev
```


Finally install other dependencies

```sh
cd ..
npm install
```

## Development

This project is using [Typescript](https://www.typescriptlang.org/) to enhance JavaScript with types.
To start compiling TypeScript to JavaScript run the following command.
It will automatically recompile everything when you make changes to the code.

Then start the React Native packager

```sh
npm start
```

And in a new tab run the app

```sh
npm run ios/android
```

### Running on device

#### Android

You can run the app on your device just by connecting it to the computer and running

```sh
npm run android
```
