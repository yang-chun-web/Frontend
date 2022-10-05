# 기능 설명

---

### 로그인

- 가입된 회원에 한해서 로그인 수행 가능
- 존재하는 회원이 아닐 경우엔 로그인 페이지로 리다이렉트
- 로그인에 성공했을 경우 AccessToken 과 RefeshToken 을 발급

### 회원 가입

- Validation 을 개발자 도구에서 변경할 수 없고 form 을 구성하는 코드를 줄이기 위해
 useForm Hook 을 설치해서 Input 태그를 구성
- 기존에 회원 가입된 Email 로는 가입 불가

**Validation**

- 모든 Validation 에는 정규표현식을 사용
- Email 은 `@` 와 `.` 가 필수로 들어가야 한다
- Password 는 대소특수문자 포함 10자 이상이어야 한다.
- Confirm Password 는 Password 와 동일해야 한다.
- Validation 의 조건을 충족하지 못하면 해당 Input 이 Focus 된다.
- Validation 의 조건을 충족하지 못하면 만족하지 못한 조건의 알림이 나타난다.

### 게시글 작성

- 로그인 된 유저만 게시글 작성가능

데이터 관계 ( 1 : N )

- 게시글 작성시 해당 유저의 Data 에 작성된 글의 id 가 배열로 보관
- 게시글 Data 에는 작성한 유저의 id 가 보관

### 게시 글 리스트 조회

- DB 에 존재하는 글 전부를 조회

### 게시 글 내용 조회

- DB 에서 해당하는 글의 Id 에 해당하는 내용을 조회

### 게시 글 수정

- 해당 게시글의 작성자만 수정 가능

### 게시 글 삭제

- 해당 게시글의 작성자만 삭제 가능

---

## JWT 토큰

**RefreshToken**

> AccessToken 을 재발급하는 경우에만 사용
> 
- 쿠키에 담긴 RefreshToken 검증

**AccessToken**

- header 에 담긴 AccessToken 검증

토큰 발급 조건

- 로그인에 성공했을 경우
- 로그인 한 상태에서 페이지를 새로고침 했을 경우

토큰 검증 조건 ( 미들웨어)

- 토큰 재발급할 경우 (로그인 유지를 위한 용도)
- 게시글을 작성할 경우 (로그인 여부를 판단하기위한 용도)
- 게시글 상세내용을 조회할 경우 (수정,삭제 권한부여를 위한 용도)
- 게시글 삭제를 수행하는 경우 (삭제 권한 확인을 위한 용도)

### 에러코드 출력

---

로그인

- email 과 password 모두 미입력한 상태에서 로그인 시도 ← `401`
- email 은 존재하나 password 가 틀렸을 경우 ← `401`
- email 이 존재하지 않을 경우 ← `401`
- 이외의 에러상황 ← `500`

회원가입

- 회원 가입된 email 이 있는 경우 ← `409`

토큰 재발급

- RefreshToken 이 쿠키에 존재하지 않을경우 ← `401`
- 이외의 에러상황 ← `500`

게시글 삭제

- 게시글 조회중인 유저와 작성자가 불일치할 경우 ← `403`
    
## API 명세

---

### 사용자 관련

| API | Method |  |
| --- | --- | --- |
| /login | POST | 로그인 |
| /signup | POST | 회원 가입 |
| /refresh | POST | 토큰 재발급 |

### 게시판 관련

| API | Method |  |
| --- | --- | --- |
| /write | POST | 게시 글 작성 |
| /view | GET | 게시 글 리스트 조회 |
| /detail/:id | GET | 게시 글 내용 조회 |
| /edit | PUT | 게시 글 수정 |
| /remove | POST | 게시 글 삭제 |




## Dependencies

---

npm install axios

npm install react-router-dom

npm install react-quill

npm install react-icons

npm install recoil

npm install styled-components
