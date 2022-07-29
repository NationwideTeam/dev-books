# 📚 데브북스
**데브북스(dev-books)는 IT 개발자들을 위한 중고책 거래 마켓입니다.** <br>
자신의 스토어에 판매하고 있는 상품을 등록하여 홍보할 수 있는 SNS입니다. <br>
상품을 등록하지 않아도 일상을 공유하며 즐거운 SNS 활동을 할 수 있습니다. <br>
글과 사진과 함께 게시물을 작성하여 자신의 일상을 공유할 수 있습니다. <br>
다른 사용자를 팔로우하면 유저가 올린 게시물을 홈 피드에서 소식을 확인할 수도 있습니다. <br>
피드를 구경하다가 마음에 드는 게시물을 발견했다면 '좋아요'를 누르거나 댓글을 달 수도 있습니다. <br>

<br>

## ⚙️ 개발 환경 및 배포 URL
- Front: React
- Back: 제공된 API 사용
- 버전 관리 및 이슈 : [GitHub](https://github.com/NationwideTeam/dev-books), [GitHub Issues](https://github.com/NationwideTeam/dev-books/issues?q=is%3Aissue+is%3Aclosed) 
- WorkPlace: [Notion]()
- Design : [Figma](https://www.figma.com/file/maNC6XnmZaSJ8Ep2y0EtDj/Dev-Books?node-id=0%3A1)
<br>

- 배포 URL : 
- 계정 <br>
`ID`: <br>
`Password`: 

<br>

## 🧑🏻‍💻 팀원 구성

|**김효민**|**김희진**|**박성범**|**조수영**|
|:----------:|:----------:|:----------:|:----------:|
|<img src="https://avatars.githubusercontent.com/miin-nii" height=180 width=180>| <img src="https://avatars.githubusercontent.com/Jinnie-kim" height=180 width=180> | <img src="https://avatars.githubusercontent.com/WannabeCM" height=180 width=180> | <img src="https://avatars.githubusercontent.com/sooyyoung" height=180 width=180>|
| <a href="https://github.com/miin-nii"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a> <a href="https://velog.io/@alsdl3344"><img src="https://img.shields.io/badge/Velog-1FC392?style=flat&logo=Vimeo&logoColor=white&link=https://velog.io/@new_wisdom"/></a>| <a href="https://github.com/Jinnie-kim"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a> <a href="https://velog.io/@kimconut"><img src="https://img.shields.io/badge/Velog-1FC392?style=flat&logo=Vimeo&logoColor=white&link=https://velog.io/@new_wisdom"/></a>| <a href="https://github.com/WannabeCM"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a> <a href="https://bumlog.tistory.com/"><img src="https://img.shields.io/static/v1?label=&message=Tistory&color=orange"></a> | <a href="https://github.com/sooyyoung"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a> <a href="https://velog.io/@sooyyyoung"><img src="https://img.shields.io/badge/Velog-1FC392?style=flat&logo=Vimeo&logoColor=white&link=https://velog.io/@new_wisdom"/></a>| 

<br>

## 💻 역할 분담

### 👩🏻‍💻🧑🏻‍💻 공통 담당
- 회원가입 / 로그인 기능

### 👩🏻‍💻 김효민
- `UI`
  - 페이지 : 게시글 / 게시글 업로드 / 채팅방 
- `기능`
  - 하단 탭 메뉴 기능 구현 
  - 판매 중인 상품 삭제 및 수정 기능 구현
  - 게시글 삭제 및 수정 기능 구현
  - 모달 버튼 기능 구현
  - 채팅방 페이지의 전송 버튼 활성화 기능 구현

### 👩🏻‍💻 김희진
- `UI`
  - 페이지 : 홈피드 / 유저 검색 / 채팅방 리스트 / 404
- `기능`
  - 게시글 작성 / 게시글 댓글 / 홈피드

### 🧑🏻‍💻 박성범
- `UI`
  - 페이지 : splash / 로그인 / 회원가입 / 마이 프로필
- `기능`
  - splash / 상품 등록 / 팔로워, 팔로잉 목록 / 좋아요 버튼

### 👩🏻‍💻 조수영
- `UI`
  - 로고 
  - 페이지 : 프로필 설정 / 프로필 수정 / 팔로워, 팔로잉 목록 / 상품 등록 
- `기능`
  - 사용자 프로필 / 마이 프로필 / 내 프로필 수정 

<br>

## 📍 프로젝트 구조
```
├── node_modules
├── public
│   └── index.html
└── src
    ├── assets
    ├── components
    │   ├── Album
    │   ├── Alert
    │   ├── Buttons
    │   ├── Comment
    │   ├── Content
    │   ├── ImgPreview
    │   ├── Like
    │   ├── Modal
    │   ├── ModalContent
    │   ├── Navbar
    │   ├── PostComment
    │   ├── Postbar
    │   ├── Products
    │   ├── ProfileImgUpload
    │   ├── ProfileInfo
    │   ├── TabMenu
    │   ├── TextInput
    │   ├── Topbar
    │   └── User
    ├── pages
    │   ├── ChatFeed
    │   ├── ChatRoom
    │   ├── Followers
    │   ├── Followings
    │   ├── HomeFeed
    │   ├── JoinMembership
    │   ├── JoinProfile
    │   ├── Login
    │   ├── LoginEmail
    │   ├── MyProfile
    │   ├── NotFound
    │   ├── PostEdit
    │   ├── PostUpload
    │   ├── ProductEdit
    │   ├── ProductUpload
    │   ├── ProfileUpdate
    │   ├── SearchFeed
    │   ├── SinglePost
    │   ├── Splash
    │   └── YourProfile
    ├── App.jsx
    ├── index.js
    └── reset.css
```
