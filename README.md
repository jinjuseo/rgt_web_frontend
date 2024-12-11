## Getting Started

개발 서버 설치 및 실행:
```bash
1. 패키지 설치
npm install
#or 
yarn install
2. 실행 
npm run dev
# or
yarn dev
```


# RGT Bookstore Admin (RBA)
- **`Project` :** 온라인 서점을 위한 관리자 서비스
- **`Project duration` :** 2024.12.09 - 2024.12.11
- **`Developer ` :** **서 진주**
- **`Link` :** [🌐 RGT_Bookstore_Admin](https://rgt_bookstore_admin.run/)
- **`Notion`:** [RGT_Bookstore_Admin_Notion](https://www.notion.so/westpearl/1572585ce0eb80fa9a12da1f409ade0e?pvs=4)
- **`시연 영상`:** [시연 영상]()


## 👓 Frontend Developer

| 서진주<br>(FE) |
| :------------: |
| <img src="https://user-images.githubusercontent.com/45915619/233911901-e06e6ec2-41d2-4387-8512-4b3174f3c97d.jpeg" height="100" width="100"> |
| **Features** <br/>- 책 정보 CRUD 기능 (조회,추가,수정,삭제) - 검색 기능 |


##  ⚙️ **Tools** 


| NextJS | Typescript  | TailwindCSS | Axios | React Query | mockAPI | Vercel|
| :----: | :--------: |   :---: | :---: | :---------: | :---------: | :---------: |
| <img alt="NextJS" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqsJpxyle5L9PwXST_rmofMHmA7HEXA30fw&s" width="65" height="65" /> | <img src="https://techstack-generator.vercel.app/ts-icon.svg" alt="Typecript" width="65" height="65" /> | <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" alt="TailwindCSS" width="65" height="65" /> | <img src="https://user-images.githubusercontent.com/45915619/233941806-5d6d2a03-3b82-4267-8966-2eb8b32c9ba0.png" alt="axios" width="65" height="65" /> | <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR6cDwwea5Cf865N8HQYn7J42_QiilcOj9Ug&s" alt="ReactQuery" width="80" height="80" /> | <img src="https://i.ytimg.com/vi/qp6ErTuVGg8/hqdefault.jpg" alt="mockAPI" width="80" height="80" /> |<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Vercel_logo_black.svg/2560px-Vercel_logo_black.svg.png" alt="Vercel" width="80" height="80" /> |


## 🔖Directory Tree



## 🌟 Pages 

|                                                              |                                                              |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|                      **메인 페이지(책 목록)**                      |                     **메인 페이지(검색)**                     |
| <img alt='main-books' width="100%" src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3efc29c4-17f6-432a-8628-5bc97bb416d1%2Ffd8763f0-38da-42f7-b90a-1e324e037384%2Fimage.png?table=block&id=1592585c-e0eb-80de-b8ef-e7d3fd522881&spaceId=3efc29c4-17f6-432a-8628-5bc97bb416d1&width=2000&userId=7730a27a-b2d4-4e83-8d56-5178e1828707&cache=v2"/> | <img alt='main-search' width="100%" src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3efc29c4-17f6-432a-8628-5bc97bb416d1%2F8e072a90-8ad5-4ec2-a99b-eeaa2e2dfb40%2Fimage.png?table=block&id=1592585c-e0eb-8026-9539-da80946be760&spaceId=3efc29c4-17f6-432a-8628-5bc97bb416d1&width=2000&userId=7730a27a-b2d4-4e83-8d56-5178e1828707&cache=v2"/> |
|                    **상세 조회 모달**                     |                     **수정 페이지**                     |
| <img alt='book-detail' width="100%" src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3efc29c4-17f6-432a-8628-5bc97bb416d1%2Ff0664c8b-f0f7-46ab-8ab5-01bd5b540aff%2Fimage.png?table=block&id=1592585c-e0eb-80a5-b46e-faef71200d3c&spaceId=3efc29c4-17f6-432a-8628-5bc97bb416d1&width=2000&userId=7730a27a-b2d4-4e83-8d56-5178e1828707&cache=v2"/> | <img alt='book-update' width="100%" src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3efc29c4-17f6-432a-8628-5bc97bb416d1%2F429c2650-5be4-4ad0-8c0d-2a72411bbc8d%2Fimage.png?table=block&id=1592585c-e0eb-80b7-b5a2-deb8a32bf577&spaceId=3efc29c4-17f6-432a-8628-5bc97bb416d1&width=2000&userId=7730a27a-b2d4-4e83-8d56-5178e1828707&cache=v2"/> |
|                          **추가 페이지**                          |                                           |
| <img alt='book-add' width="100%" src="https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3efc29c4-17f6-432a-8628-5bc97bb416d1%2F2ce771de-8624-47cd-ad54-84a629e22a6c%2Fimage.png?table=block&id=1592585c-e0eb-800f-9688-cd22bbdec53b&spaceId=3efc29c4-17f6-432a-8628-5bc97bb416d1&width=2000&userId=7730a27a-b2d4-4e83-8d56-5178e1828707&cache=v2"/> | |



