# FirstDriven

1. 준비
 - npm install -g create-react-app
 - https://github.com/facebookincubator/create-react-app

2. 프로젝트 만들기
 - yarn create react-app my-app
 - cd my-app
 - yarn start

3. 프로젝트 빌드
 - yarn build

4. 배포하기
 1. package.json add "homepage": "https:\\paktan.github.io/FirstDriven" 추가
 2. yarn build
 3. yarn add --dev gh-pages
 4. package.json add 
    "scripts": {
      // ...
      "predeploy": "yarn build",
      "deploy": "gh-pages -d build"
    }
 5. yarn deploy
