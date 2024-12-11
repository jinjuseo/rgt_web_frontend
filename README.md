## Getting Started

```bash
#개발 시 패키지 매니저 yarn 사용하였음
1. 패키지 설치
npm install
#or 
yarn install

2. 실행 
npm run dev
# or
yarn dev

3. test 실행
npm run test
# or
yarn test

#.env 파일 (환경변수설정필요)
NEXT_PUBLIC_API_ADDRESS=https://675697c411ce847c992d57cb.mockapi.io
```


# RGT Bookstore Admin (RBA)
- **`Project` :** 온라인 서점을 위한 관리자 웹 서비스 개발
- **`Project duration` :** 2024.12.09 - 2024.12.11
- **`Developer ` :** **서 진주**
- **`Link` :** [🌐 https://rgt-bookstore-admin.vercel.app/](https://rgt-bookstore-admin.vercel.app/) 
- **`Notion`:** [온라인 서점을 위한 관리자 웹 어플리케이션](https://www.notion.so/westpearl/1572585ce0eb80fa9a12da1f409ade0e?pvs=4)
- **`시연 영상`:** [시연 영상]()


## 👓 Frontend Developer

| 서진주<br>(FE) |
| :------------: |
| <img src="https://user-images.githubusercontent.com/45915619/233911901-e06e6ec2-41d2-4387-8512-4b3174f3c97d.jpeg" height="100" width="100"> |
| **Features** <br/>- 책 정보 CRUD 기능 (조회,추가,수정,삭제) <br>- 검색 기능 |


##  ⚙️ **Tools** 


| NextJS | Typescript  | TailwindCSS | Axios | React Query | mockAPI | Vercel| Jest | 
| :----: | :--------: |   :---: | :---: | :---------: | :---------: | :---------: | :---------: |
| <img alt="NextJS" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqsJpxyle5L9PwXST_rmofMHmA7HEXA30fw&s" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="Typecript" width="65" height="65" /> | <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" alt="TailwindCSS" width="65" height="65" /> | <img src="https://user-images.githubusercontent.com/45915619/233941806-5d6d2a03-3b82-4267-8966-2eb8b32c9ba0.png" alt="axios" width="65" height="65" /> | <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR6cDwwea5Cf865N8HQYn7J42_QiilcOj9Ug&s" alt="ReactQuery" width="80" height="80" /> | <img src="https://i.ytimg.com/vi/qp6ErTuVGg8/hqdefault.jpg" alt="mockAPI" width="80" height="80" /> |<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/2560px-Vercel_logo_black.svg.png" alt="Vercel" width="80" height="40" /> |<img src="https://iconape.com/wp-content/png_logo_vector/jest-logo.png" alt="Jest" width="60" height="60" /> |


## 🔖Version 
- Node.js v18
- Next.js v15.0.4
- react v19.0.0
- @types/jest v29.5.14
- @tanstack/react-query v5.62.3


## 🌟 Pages 

|                                                              |                                                                |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|                      **메인 페이지(책 목록)**                      |                     **메인 페이지(검색)**                     |
| <img alt='main-books' width="100%" src="https://private-user-images.githubusercontent.com/45915619/394618648-0f501377-47d6-4c20-82cd-77b2cfcca69d.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM5MDIxMjEsIm5iZiI6MTczMzkwMTgyMSwicGF0aCI6Ii80NTkxNTYxOS8zOTQ2MTg2NDgtMGY1MDEzNzctNDdkNi00YzIwLTgyY2QtNzdiMmNmY2NhNjlkLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjExVDA3MjM0MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTllYTM0MmU2MDZlMTYzNjYyY2YyOTEyNmJkYzFiYTExMzA2NWVlYWM1NDRhZDRjNmE4ZjM4MmYxMWM0OWQwMTgmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.9Rr7IOQtI9RFUqNjbykcv9inCwI4OkRtQVONRHxkNVI"/> | <img alt='main-search' width="100%" src="https://private-user-images.githubusercontent.com/45915619/394618686-7f3e14c9-e3de-41f1-b91f-85b34c378173.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM5MDIxMjEsIm5iZiI6MTczMzkwMTgyMSwicGF0aCI6Ii80NTkxNTYxOS8zOTQ2MTg2ODYtN2YzZTE0YzktZTNkZS00MWYxLWI5MWYtODViMzRjMzc4MTczLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjExVDA3MjM0MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTMyMTNkODczMmIwYTk1Zjg5N2NmYzkzZmFmOTJmZTRhOTI3NjhhZTc0MWQ2ZDEyMGEyMWFkOTczZmJkNTYzZGMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.05bh9KmqhW0Mfikwx5PB2d_3qXNh9O0SGLV13kfrN-A"/> |
|                    **상세 조회 모달**                     |                     **수정 페이지**                     |
| <img alt='book-detail' width="100%" src="https://private-user-images.githubusercontent.com/45915619/394618730-1f94da30-b5c9-4436-aaf0-7fbff2b8974e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM5MDIxMjEsIm5iZiI6MTczMzkwMTgyMSwicGF0aCI6Ii80NTkxNTYxOS8zOTQ2MTg3MzAtMWY5NGRhMzAtYjVjOS00NDM2LWFhZjAtN2ZiZmYyYjg5NzRlLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjExVDA3MjM0MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPWI3NjVlNTUyMDY4OTdmMzM1ZTFmMDczZTkyZjY2N2NkM2FjMzBlMTY5YzUzOGQyMDZjYjMwY2JkNmM4OWQxNWYmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.ENCj5z6vyY09QADSyfTSX1WztADkXWQTY_0DBjSoyB0"/> | <img alt='book-update' width="100%" src="https://private-user-images.githubusercontent.com/45915619/394618853-3e1f1bd0-a7df-4c26-8076-80f186f3086f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM5MDIxMjEsIm5iZiI6MTczMzkwMTgyMSwicGF0aCI6Ii80NTkxNTYxOS8zOTQ2MTg4NTMtM2UxZjFiZDAtYTdkZi00YzI2LTgwNzYtODBmMTg2ZjMwODZmLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjExVDA3MjM0MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTBhNmZkZDI3ODhiNTc0MzU5NjU4NDM3ZTYyNWU4ZTc1YjMxMzllMTZmYTM0ZGYxMmVmOGI3YzRhYzY0N2VmZDkmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.8WA7a1lKBE-0jyPnWwaoCSxCgqG1bmslBiqMLCBNs8k"/> |
|                          **추가 페이지**                          |                                           |
| <img alt='book-add' width="100%" src="https://private-user-images.githubusercontent.com/45915619/394618942-e2666bc2-5c34-4275-8f79-9a0b7eb15887.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzM5MDIxMjEsIm5iZiI6MTczMzkwMTgyMSwicGF0aCI6Ii80NTkxNTYxOS8zOTQ2MTg5NDItZTI2NjZiYzItNWMzNC00Mjc1LThmNzktOWEwYjdlYjE1ODg3LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDEyMTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQxMjExVDA3MjM0MVomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTdkZjlkMDcxOTI5MTlhMzg0YTkwMTZjN2FmNWVjZjE2MWI0Njc5ZDVkNzMyOTVjNjk2MGVjMmU3N2IyYjAzZWUmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0.68Pt-tfXE-1ZUCmDwLr3DzvNKHOXwbdRcIMcojyk968"/> | |
