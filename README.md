# hnc-dev-center👨‍💻

![develop with hancom banner](https://user-images.githubusercontent.com/83275751/122681141-ea3a9080-d22d-11eb-96c2-bfc737fa88e4.jpg)

### <p align=center>이곳은 "개발이 즐거운 사람들"이 모이는</p>

### <p align=center>한글과컴퓨터 개발자 센터의 프론트엔드 코드 저장소입니다 :)</p>

<br/>



## if(busy == true) goto ...

[1. 어떻게 협업하나요?](#1\.-어떻게-협업하나요?)

[2. 프로젝트 구조는 어떻게 되어있나요?](#2\.-프로젝트-구조는-어떻게-되어있나요?)

[3. create-react-app이 무엇인가요?](#3\.-create\-react\-app이-무엇인가요?)

[4. 라이선스는 무엇인가요?](#4\.-라이선스는-무엇인가요?)

[5. 누가 만들었나요?](#5\.-누가-만들었나요?)

[6. 🤗Special Thanks to...](#6\.-\🤗special-thanks-to)

<br/>

## 1. 어떻게 협업하나요?

#### 사전 준비하기

> 1. 협업을 위한 Git
>
> 2. 자신의 손에 익숙한 IDE
>
> 3. ```v14.17.0``` 이상의 Node.js

#### 클론(clone)하기

> 1. 로컬의 원하는 위치에서 ```git clone https://github.com/hancom-io/hnc-dev-center.git``` 명령어를 통해 프로젝트를 복사합니다.
> 2. 이후 각 IDE를 통해 해당 프로젝트를 오픈합니다.

#### 실행해보기

> 1. 프로젝트가 위치한 디렉토리 터미널창에서 ```npm start``` 명령어를 통해 개발자 모드로 프로젝트를 실행합니다.(실행이 되지 않는다면 ```npm update``` 등의 명령어를 통해 Node.js 버전을 원격 저장소와 맞춰주세요.)
> 2. 원하는 브라우저에서 ```http://localhost:3000```에 접속이 잘 되는지 확인합니다.

#### 브랜치 만들기

> 1. 로컬에서 개발을 진행하기 전 main 브랜치가 아닌 곳에서 개발을 진행하기 위해(개발 도중 코드를 다시 돌려야 할 경우를 대비하여) 새로운 브랜치를 만들고 checkout합니다. ```git checkout -b [생성할 브랜치 이름]```
> 2. 또한 원격 저장소에 코드를 푸시할 때도 다른 브랜치를 거쳐 main 브랜치에 최종 반영하기 위해 새로운 브랜치를 만들어 푸시해줍니다. ```git push origin [생성할 브랜치 이름]```
> 3. 즐겁게 개발을 진행합니다.

#### 푸시(Push)하기

> 1. ```git status```를 사용해 커밋할 코드가 있는지 확인합니다.
> 2. 커밋할 코드가 있다면 ```git add [디렉토리 or 파일]``` 명령어를 사용하여 staging area에 변경된 코드를 올립니다.
> 3. ```git commit -m "#[연결할 이슈 번호]커밋 메세지"``` 명령어를 통해 로컬 저장소에 코드를 커밋합니다.(이슈는 저장소 이슈 탭에서 생성 및 확인이 가능합니다.)
> 4. ```git push origin [main을 제외한 다른 branch]```을 통해 원격 저장소에 코드를 푸시합니다.
> 5. 원격 저장소 main 브랜치에 반영하기 위해 ```Pull requests```를 작성합니다.
> 6. 코드 검사가 완료되어 main 브랜치에 반영 된다면 성공🎉

<br/>

## 2. 프로젝트 구조는 어떻게 되어있나요?

<br/>

## 3. create-react-app이 무엇인가요?

>  [create-react-app](https://github.com/facebook/create-react-app)은 React 웹 개발용 boilerplate입니다.

* React는 Javascript로 작성하는 것이 일반화 되어있기에 [webpack](https://webpack.js.org/)이라는 모듈번들러로 컴파일 및 빌드하는 것이 필수여서 해당 환경을 세팅해줘야합니다.
* 하지만 create-react-app을 사용하면 해당 세팅을 자동으로 해주고 또 페이스북에 의해 지속적으로 업데이트되는 boilerplate입니다. 따라서 웹 개발자는 실제 구현하고자하는 기능에 더 집중할 수 있으며 개발자 센터 프론트엔드 개발도 해당 boilerplate를 사용하였습니다. [좀 더 알아보기☞](https://eunvanz.github.io/react/2018/06/05/React-create-react-app%EC%9C%BC%EB%A1%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0/)



>  다음은 해당 boilerplate를 실행하는 몇가지 명령어에 대해 알아보겠습니다.

* **npm start** : 개발자 모드로 실행합니다. 실행된 페이지는 코드가 변경될 때마다 자동적으로 새로 고침됩니다.
*  **npm test** : 대화형 모드에서 테스트 감시기(test watcher)를 실행합니다.
* **npm run build** : 제품용 앱을 ```build``` 폴더에 빌드하여 배포할 수 있는 상태로 만듭니다.(React를 번들에 포함, 최상의 성능을 위한 빌드 최적화 및 경량화 파일 이름에 해시를 포함하는 작업을 수행합니다.)

> 추가 정보입니다.

* [create-react-app 공식문서](https://facebook.github.io/create-react-app/docs/getting-started)
* [번들 크기 분석](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
* [프로그레시브 웹 앱](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
* [고급 설정](https://facebook.github.io/create-react-app/docs/advanced-configuration)
* [배포](https://facebook.github.io/create-react-app/docs/deployment)

<br/>

## 4. 라이선스는 무엇인가요?

자세한 내용은 [LICENSE.md](https://github.com/hancom-io/hnc-dev-center/blob/main/LICENSE) 파일을 참고하세요.

<br/>

## 5. 누가 만들었나요?

- [김동민 연구원](https://github.com/hnc-dongminkim) - 수습 프로젝트로서 해당 저장소를 사용하는 **개발자 센터 프론트엔드 개발**에 전념하고 있다.*(React 라이브러리를 사용하여 개발자 센터 각 페이지 구현, 반응형 웹 페이지 구현, README 파일 생성, 해당 프로젝트 프론트엔드 개발 관리)*

<br/>

## 6. 🤗Special Thanks to...

- 질문에 성심성의껏 답해주는☁️**클라우드플랫폼팀**☁️
- 항상 힘나는 ☕가 공급되는 **한컴카페**