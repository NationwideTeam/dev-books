# 📚 데브북스
데브북스(dev-books)는 IT 개발자들을 위한 중고책 거래 마켓입니다. <br>
자신의 스토어에 판매하고 있는 상품을 등록하여 홍보할 수 있는 SNS입니다. <br>
상품을 등록하지 않아도 일상을 공유하며 즐거운 SNS 활동을 할 수 있습니다. <br>
글과 사진과 함께 게시물을 작성하여 자신의 일상을 공유할 수 있습니다. <br>
다른 사용자를 팔로우하면 유저가 올린 게시물을 홈 피드에서 소식을 확인할 수도 있습니다. <br>
피드를 구경하다가 마음에 드는 게시물을 발견했다면 '좋아요'를 누르거나 댓글을 달 수도 있습니다. <br>

<br>

## 🧑🏻‍💻 팀원 구성
- 김효민 [github/miin-nii](https://github.com/miin-nii)
- 김희진 [github/Jinnie-kim](https://github.com/Jinnie-kim)
- 박성범 [github/WannabeCM](https://github.com/WannabeCM)
- 조수영 [github/sooyyoung](https://github.com/sooyyoung)

<br>

## ⚙️ 개발 환경 및 배포 URL
- Front: React
- Back: 제공된 API 사용
- 버전 관리 및 이슈 : [GitHub](https://github.com/NationwideTeam/dev-books), [GitHub Issues](https://github.com/NationwideTeam/dev-books/issues) 

<br>

## 📍 프로젝트 구조
```
├── node_modules
├── public
│   └── index.html
└── src
    ├── assets
    ├── components
    │   ├── Alert
    │   ├── Buttons
    │   ├── Comment
    │   ├── Content
    │   └── ...
    ├── pages
    │   ├── HomeFeed
    │   ├── JoinMembership
    │   ├── JoinProfile
    │   ├── Login
    │   └── ...
    ├── App.jsx
    ├── index.js
    └── reset.css
```
<br>

## 💻 역할 분담

### 공통 담당
- 회원가입 / 로그인

### 김효민
- 채팅방 / 모달버튼 / 하단 탭 메뉴 / 채팅 목록 / 상품 삭제, 수정 / 게시글 삭제, 수정

### 김희진
- 게시글 작성 / 게시글 댓글 / 홈 화면

### 박성범
- splash / 상품 등록 / 팔로워, 팔로잉 목록 / 좋아요 버튼

### 조수영
- 사용자 프로필 / 나의 프로필 / 내 프로필 수정