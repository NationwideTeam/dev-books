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

|                                                                                                                                                    **김효민**                                                                                                                                                     |                                                                                                                                                     **김희진**                                                                                                                                                     |                                                                                                                              **박성범**                                                                                                                              |                                                                                                                                                     **조수영**                                                                                                                                                      |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                                                                                  <img src="https://avatars.githubusercontent.com/miin-nii" height=180 width=180>                                                                                                                  |                                                                                                                 <img src="https://avatars.githubusercontent.com/Jinnie-kim" height=180 width=180>                                                                                                                  |                                                                                           <img src="https://avatars.githubusercontent.com/WannabeCM" height=180 width=180>                                                                                           |                                                                                                                  <img src="https://avatars.githubusercontent.com/sooyyoung" height=180 width=180>                                                                                                                   |
| <a href="https://github.com/miin-nii"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a> <a href="https://velog.io/@alsdl3344"><img src="https://img.shields.io/badge/Velog-1FC392?style=flat&logo=Vimeo&logoColor=white&link=https://velog.io/@new_wisdom"/></a> | <a href="https://github.com/Jinnie-kim"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a> <a href="https://velog.io/@kimconut"><img src="https://img.shields.io/badge/Velog-1FC392?style=flat&logo=Vimeo&logoColor=white&link=https://velog.io/@new_wisdom"/></a> | <a href="https://github.com/WannabeCM"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a> <a href="https://bumlog.tistory.com/"><img src="https://img.shields.io/static/v1?label=&message=Tistory&color=orange"></a> | <a href="https://github.com/sooyyoung"><img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/></a> <a href="https://velog.io/@sooyyyoung"><img src="https://img.shields.io/badge/Velog-1FC392?style=flat&logo=Vimeo&logoColor=white&link=https://velog.io/@new_wisdom"/></a> |

<br>

## 💻 역할 분담

### 👩🏻‍💻🧑🏻‍💻 공통 담당

- 회원가입 기능
- 로그인 기능

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
  - 프로필 페이지
    - 유저 정보, 판매중인 상품, 게시글 표시
    - 게시글을 목록형, 앨범형으로 선택하여 보기
  - 프로필 수정
    - 기존 프로필 정보가 입력되어 있도록 구현
  - 팔로워, 팔로잉 목록
    - 팔로우 상태에 따라 버튼 변화

<br>

## 💻 구현기능

---

| Splash                                                                                                                         | 회원가입                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://user-images.githubusercontent.com/92916958/181716171-b0fe70a3-ce35-498e-9cdb-215762a940c1.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/92916958/181716184-3543131d-855a-42d9-b777-0a251b0f8cc4.gif" width="300"/> |

| 로그인                                                                                                                         | 홈화면                              |
| ------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------- |
| <img src="https://user-images.githubusercontent.com/92916958/181716143-616a6915-671a-40ca-b380-580620125c91.gif" width="300"/> | <img src="준비중 ..." width="300"/> |

| 계정검색                                                                                                                       | 채팅                                                                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://user-images.githubusercontent.com/92916958/181716137-91266280-8567-43c0-934e-0c16a0b3d90b.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/92916958/181716179-5293e85e-3473-4988-ad1f-eb78970be15c.gif" width="300"/> |

| 유저 프로필                                                                                                                    | 팔로우, 팔로워                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://user-images.githubusercontent.com/92916958/181716174-97330776-e72f-4185-9b1d-aebeedeba199.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/92916958/181716181-d52f8a7e-4ad3-4469-8f23-8e4b09270152.gif" width="300"/> |

| 마이프로필                                                                                                                     | 마이프로필 수정                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://user-images.githubusercontent.com/92916958/181716146-ea5e7d37-f96d-481a-add3-843803e7625d.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/92916958/181716151-2e05df4a-f11b-4d25-9910-03c930e6945a.gif" width="300"/> |

| 상품등록                                                                                                                       | 상품 수정                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://user-images.githubusercontent.com/92916958/181716163-b68f0190-ad65-4178-b297-3e695fcb6f2e.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/92916958/181716158-36addfd5-e967-421d-9293-7f4b23ebec64.gif" width="300"/> |

| 상품 삭제                                                                                                                      | 게시글 등록                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://user-images.githubusercontent.com/92916958/181716154-f05a5270-bcdc-44eb-8fd2-252a662a7a47.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/92916958/181716108-61b3bc70-fbef-4ade-aa23-14cef9d7e7a9.gif" width="300"/> |

| 게시글 수정                                                                                                                    | 게시글 댓글                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://user-images.githubusercontent.com/92916958/181715983-2b578cb0-ef4a-481b-a8ff-8c0fa06b8424.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/92916958/181905317-d42c5978-5bbe-4498-9cf2-0afbefc26e08.gif" width="300"/> |

| 게시글 신고                                                                                                                    | 게시글 댓글 신고                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| <img src="https://user-images.githubusercontent.com/92916958/181877289-dbaf1b57-c186-4ea7-b6fb-48fde024ad78.gif" width="300"/> | <img src="https://user-images.githubusercontent.com/92916958/181878639-9ad5efb1-aad8-4635-8f10-104b34020d36.gif" width="300"/> |

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
