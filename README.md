# :sunrise_over_mountains: For-Rest 

#### For-rest는 아쉬운 여가시간을 보람차게 보낼 수 있는 
#### 장소를 추천해주는 장소 추천 플랫폼입니다. 
#### 내 주변, 또는 원하는 지역의 장소들을 찾아 볼 수 있습니다.



## 🗝️ 주요 기능

google oAuth를 사용하여 로그인을 할 수 있습니다.

장소와 지역을 선택하여 해당지역의 장소를 검색할 수 있습니다.

카카오맵을 사용하여 위치를 쉽게 파악할 수 있습니다.

로그인 시 리뷰 작성과 좋아요 등록이 가능합니다.

마이페이지에서 좋아요 등록된 장소를 장소와 지역별로 빠르게 검색 할 수 있습니다.



## ✅ 주요 개발

파이썬을 사용한 네이버 지도 크롤링 데이터 사용

React를 이용한 무한 슬라이딩

IntersectionObserver를 이용한 무한 스크롤

Redux-Saga를 사용한 상태관리

React-Potal 및 React-lazy, memo 등을 사용한 최적화



## 👬 팀원 소개

FRONT-END : [권준](https://github.com/jun-05)

BACK-END : [김종완](https://github.com/3210439) 
/ [박성광](https://github.com/Sunggwang-Park)


## 🛠️ 기술 스택

FRONT-END : React / Redux-saga /styled-components / antd

BACK-END : Spring Boot / Data JPA / Query DSL / JUnit5



## 🔹 기능 소개 

[![For-Rest 시연영상](http://img.youtube.com/vi/n006XpYXaAM/0.jpg)](http://youtu.be/n006XpYXaAM)



## ⏰ 개발 기간

#### - 2022.03.26 ~ 2022.04.26 



## 📁 폴더 구조
```
└── src
    ├── App.js
    ├── index.js
    ├── assets
    │   ├── slideImg
    │   │    └── ...
    │   ├── tagImg
    │   │    └── ...
    │   ├── mainInfoData.json 
    │   ├── tagData.json   
    │   └── noImg.png      
    ├── components
    │   ├── common
    │   │     ├── AuthForm.jsx
    │   │     ├── Header.jsx
    │   │     ├── Responsive.jsx
    │   │     ├── Error.jsx
    │   │     ├── LoadingPage.jsx   
    │   │     └── Spacer.jsx         
    │   ├── main    
    │   │     ├── modal
    │   │     │    ├── CatTagItem.jsx
    │   │     │    ├── CatTagModal.jsx
    │   │     │    ├── RegionTagItem.jsx    
    │   │     │    └── RegionTagModal.jsx  
    │   │     ├── places
    │   │     │    ├── PlacesItem.jsx
    │   │     │    └── PlacesTemplate.jsx      
    │   │     ├── slide
    │   │     │    ├── SlideItem.jsx
    │   │     │    └── SlideTemplate.jsx      
    │   │     └── thumbnail
    │   │          ├── ThumbnailItem.jsx
    │   │          └── ThumbnailTemplate.jsx        
    │   ├── detail
    │   │     ├── PlaceTemplate.jsx    
    │   │     ├── PlaceInfo.js
    │   │     ├── PlaceTitle.jsx
    │   │     ├── ReviewList.jsx
    │   │     └── ReviewEditor.jsx       
    │   └── myPage
    │   │     ├── LikePlace.jsx    
    │   │     ├── LikeTagCheckBox.js
    │   │     ├── MyPageTemplate.jsx
    │   │     └── PlaceItem.jsx        
    ├── containers
    │   ├── common
    │   │     └── HeaderContainer.js    
    │   ├── main
    │   │     ├── MenuContainer.js
    │   │     └── PlacesContainer.jsx        
    │   ├── detail
    │   │     ├── PlaceContainer.js
    │   │     └── ReviewContainer.jsx            
    │   └── myPage
    │         └── LikePlacesContainer.jsx    
    ├── lib
    │   ├── api
    │   │     ├── clients.js    
    │   │     ├── auth.js    
    │   │     ├── place.js    
    │   │     ├── places.js        
    │   │     └── review.js          
    │   ├── createRequestSaga.js
    │   ├── fireBaseAuth.js
    │   ├── kakaoMap.js
    │   └── ModalPotal.js    
    ├── modules
    │   ├── common
    │   │     ├── auth.js
    │   │     └── loading.js        
    │   ├── main    
    │   │     ├── places.js
    │   │     └── searchParam.js
    │   ├── detail    
    │   │     ├── place.js
    │   │     └── reviews.js
    │   └── myPage    
    │         └── likePlace.js     
    └── pages    
        ├── MainPage.jsx    
        ├── PlacesListPage.jsx    
        ├── DetailPage.jsx    
        ├── MyPage.jsx    
        └── NotFound.jsx            
```

## 🛠️ 기획 및 설계

#### [기능 명세서](https://www.notion.so/For-Rest-f4552450135f42e987bcd7a02eaff7cd)

#### [페이지 기획서](https://whimsical.com/getting-started-boards-LuHajAmtXAgZ4oK2Abnb8s)

#### [디자인](https://www.figma.com/file/jY76g8qwad9pLzUOmByt1R/%EC%B9%B4%EC%9A%B0%EC%B9%98%EC%BD%94%EB%94%A9-figma%ED%8C%8C%EC%9D%BC-(Copy)?node-id=63%3A1870)

#### [API명세서](https://grape-ring-3f9.notion.site/API-9cc8b24e8f674ed1a4af508dea073eea)

#### [DB명세서](https://grape-ring-3f9.notion.site/DB-b0397ad96f6c4e5a958a908bacdf1a99)


## [백엔드 깃 레포](https://github.com/Couch-Coders/7th-for_rest-be)
