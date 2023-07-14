# test-electron-as-browser

[electron-as-browser](https://github.com/hulufei/electron-as-browser) + electron-forge 6.2，electron 18, support win7 and 银河麒麟v4 (debian)


## build for deb on mac
1. install fakeroot and dpkg through brew
```
brew install fakeroot dpkg
```

2. try to build
```
npm run make -- --platform=linux
```

if encounter error about rpmbuild as following, just comment out `maker-rpm` config from `forge.config.js`

<img width="1297" alt="image" src="https://github.com/njleonzhang/test-electron-as-browser/assets/13174059/cf3a7729-6832-4241-9c62-eb77a5364bc4">



workaroud：

<img width="537" alt="image" src="https://github.com/njleonzhang/test-electron-as-browser/assets/13174059/f727625e-c305-4ee4-8389-758dd1e9cc23">
