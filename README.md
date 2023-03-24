# 👔 Ce1ev. :: celebrity picks.

```
💡 셀럽들이 착용했던 의상들을 기준으로 데이터화하여 소비자에게 착용 정보 제공 및 상품을 판매하는 쇼핑몰 서비스입니다.
```

<img width="960" alt="mainpic" src="https://user-images.githubusercontent.com/113027954/212001425-a9a11910-380e-4524-9617-77693f62dfb2.png">

## ⭐️ About Project

```
소비자들은 셀럽들을 선망하고 그들이 미치는 영향력의 대상이 됩니다.
우리는 셀럽의 영향력을 이용하고자 하여 셀럽들의 아이템에 중점을 둔 쇼핑몰을 기획하였습니다.
```

## 📄 Summary

- 메인 페이지
  - 검색 기능을 통한 키워드 검색(상품명, 셀럽명, 셀럽 분류)
  - 카테고리 필터를 통한 셀럽 분류 별 상품 표시
  - 무한 스크롤로 끊임없는 상품 소개
  - 상품 블럭 위치에서 좋아요 기능 구현
  - ImagelazyLoading을 통한 웹 성능 최적화
- 상품 상세 페이지
  - 제품 사이즈 및 색상 선택과 수량 조절
  - 바로 구매 & 장바구니 기능 구현
  - 리뷰 및 문의 기능 구현
- 마이 페이지
  - 회원정보 수정
  - 회원 탈퇴
  - 주문 관리(주문내역 조회/삭제)
  - 장바구니 관리
  - 상품후기 관리(등록/삭제)
- 관리자 페이지
  - 상품 관리(등록/수정/삭제)
  - 주문 내역 전체 조회
  - 배송 상태 관리
  - 상품 후기 관리
  - 회원 관리
  - 공지사항 관리(등록/수정/삭제)
- 비회원 주문

## ⚒ 기술 스택

<img src="https://user-images.githubusercontent.com/113027954/211986343-fd13d56c-1c80-41e9-aaf8-1ff71ea1e1da.png" width="960" >

### 💻 주요 기능

<details><summary>상품 상세페이지</summary>
<img width="960" alt="상세페이지" src="https://user-images.githubusercontent.com/113027954/211991956-e3bda172-e248-48ac-8872-b46edda63b83.png">
</details>
<details><summary>장바구니</summary>
<img width="960" alt="장바구니 페이지" src="https://user-images.githubusercontent.com/113027954/211991553-7c89cac2-6eb7-4b9e-a4ba-8cffa14e659d.png">
</details>
<details><summary>결제페이지</summary>
<img width="960" alt="결제페이지" src="https://user-images.githubusercontent.com/113027954/211992033-ea1506c3-6874-4eba-8135-cb67a87a164e.png">
</details>
<details><summary>주문조회 페이지</summary>
<img width="960" alt="주문내역 조회" src="https://user-images.githubusercontent.com/113027954/211992053-4b62d3fa-9af0-4159-b477-79d91a0f018d.png">
</details>

## 👤 테스트 계정

```
- 👨‍ 사용자
ID: test555@example.com
PW: 123123123
```

```
- 👨‍🔧 관리자
ID: admin555@example.com
PW: 123123123
```

## 👨‍👩‍👦‍👦 Responsibility

| 담당자명(GitHub)                                    | 담당 파트                                                                               |
| --------------------------------------------------- | --------------------------------------------------------------------------------------- |
| 박재훈 [@noorong](https://github.com/noorong)       | 전체 UI design 및 개발, 검색, 카테고리 기능 개발, Nginx배포, 로그인, 회원가입 기능 구현 |
| 김윤수 [@snowriceDD](https://github.com/snowriceDD) | 홈, 캐러셀, 상품 상세, 상품 블럭, UX/UI, 지도 API                                       |
| 송주혜 [@Zuhye](https://github.com/Zuhye)           | 회원정보 API, 상품 API, 찜, 공지사항, 배포                                              |
| 김현아 [@kimakuma](https://github.com/kimakuma)     | 후기관리, 장바구니, 결제 API                                                            |
| 동하 [@donggram2](https://github.com/donggram2)     | 장바구니, 제품 상세 , 유저 API,                                                         |

## 🗂 디렉토리 구조

```
ce1ev
└─ src
   ├─ app.js
   ├─ middlewares
   ├─ models
   │  ├─ SelectedProduct-model.js
   │  ├─ index.js
   │  ├─ order-model.js
   │  ├─ post-model.js
   │  ├─ product-model.js
   │  ├─ review-model.js
   │  ├─ schemas
   │  │  ├─ SelectedProductSchema.js
   │  │  ├─ order.js
   │  │  ├─ post.js
   │  │  ├─ product.js
   │  │  ├─ review.js
   │  │  ├─ shoppingCart.js
   │  │  └─ user.js
   │  └─ user-model.js
   ├─ routers
   │  ├─ SelectedProduct-model.js
   │  ├─ index.js
   │  ├─ mypage-router.js
   │  ├─ order-router.js
   │  ├─ post-router.js
   │  ├─ product-router.js
   │  ├─ user-router.js
   │  └─ views-router.js
   ├─ services
   │  ├─ index.js
   │  ├─ order-service.js
   │  ├─ post-service.js
   │  ├─ product-service.js
   │  ├─ review-service.js
   │  ├─ selectedProduct-service.js
   │  └─ user-service.js
   └─ views
      ├─ addProduct
      ├─ adminPage
      ├─ adminProductList
      ├─ admin_members
      ├─ admin_orders
      ├─ admin_productDetail
      ├─ admin_reviews
      ├─ api.js
      ├─ aws-s3.js
      ├─ guest
      ├─ guestOrderList
      ├─ home
      ├─ image
      ├─ login
      ├─ memberOrder
      ├─ mypage
      ├─ mypageOrderList
      ├─ notice
      ├─ order
      ├─ order_now
      ├─ postEdit
      ├─ productDetail
      ├─ register
      ├─ updateProduct
      └─ utils/useful-functions.js

```

```
Celev_refactor
├─ .eslintrc.json
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ HEAD
│  │           └─ main
│  ├─ objects
│  │  ├─ 00
│  │  │  ├─ 22e2941961dc4127d8a7d4a0c6b6d6d2995feb
│  │  │  ├─ 43235e2eae13d63274f72b2fbfcc181da2e012
│  │  │  └─ c3541d23d6875ed12d49eec0a9e6123a9277fe
│  │  ├─ 01
│  │  │  ├─ 2067d015e5461ae38345a4bee251f52f5f8b9a
│  │  │  └─ 7b51c7e3036ec259b269b926f141ccad2f69be
│  │  ├─ 02
│  │  │  └─ ae3917ebdd64ad3f95e95abb3d4018aedd2bcd
│  │  ├─ 04
│  │  │  ├─ 461e50bf20d1a985691460765d310e298f0ae2
│  │  │  └─ 69a299e790a0ea2d5ccf574d92d5348c9ed44f
│  │  ├─ 06
│  │  │  ├─ 051a9a1c44a01f5766d5b660f906b072197271
│  │  │  ├─ 6ad5966a7a26e207aae3bdcc3cb65e5a1fd101
│  │  │  ├─ c00b3d26d9c9fd40d3b3980365ff562b5bf6f3
│  │  │  ├─ ca4f6924be804229ccb254c6b5338d8db34ecf
│  │  │  └─ e1a14002471b1f859f72a6c7fcb31eef65f8be
│  │  ├─ 07
│  │  │  └─ df1e2e092b380b67a72823d7fba8ef4a663a43
│  │  ├─ 08
│  │  │  └─ f3814ecefcdded16719de724368caa3f99d366
│  │  ├─ 0a
│  │  │  └─ aa5248fd7f521db81151558fc5350e3108a050
│  │  ├─ 0b
│  │  │  ├─ 62e30c46c1f298bea67d1bb453f97e10b0b160
│  │  │  └─ c6a9b1cf4dce5eb67596a18849e718571cc696
│  │  ├─ 0c
│  │  │  ├─ 9ed25d558e9a0bc1f83366171d65d976998317
│  │  │  └─ b4aa40edcd0fca6a23a05b5878a9e24b50cafa
│  │  ├─ 0d
│  │  │  ├─ 1873ff02b9e87af04def378178702bca741958
│  │  │  ├─ 28427fcdb68a0a54fcfd04ffc2a601a74051bd
│  │  │  └─ 3b4371df25ca603a7a4e2df7d4c05ac7416df4
│  │  ├─ 0e
│  │  │  ├─ 063dd9cae4b1782bff136e8816fbe3a3cae789
│  │  │  ├─ 28399619e37e1f369880a99f59ef2d45d1a306
│  │  │  └─ b73810c5eb416ccac564f2fbebbeca9e22799f
│  │  ├─ 0f
│  │  │  └─ ac7f42578e4be9aa2af35378bf45d63a8e9b94
│  │  ├─ 10
│  │  │  ├─ 2ca339f85189ef9ce6eaef9bd82380416def02
│  │  │  └─ b6fd03dfab7c3b5225e7219e95daac6db03d86
│  │  ├─ 11
│  │  │  ├─ 0a611e762c50405ef521924bf773590b007ea1
│  │  │  ├─ 536695fd7f55137593d5cd64642fac126c3be9
│  │  │  └─ 95987f07c210e125b071e6071fce4670c79adc
│  │  ├─ 12
│  │  │  ├─ 294237257e368ac5e62367f2ded109f0b20611
│  │  │  ├─ 98792bcc377d55af417a6647b3e9ad8b4f6bf2
│  │  │  ├─ d3bc19445d7ba2eff36354352fbb5832642190
│  │  │  └─ ebc4657dcc6959005efb1516827582b18f6c69
│  │  ├─ 13
│  │  │  └─ 58004b08fa919867bfa6d2e1d959bfef8843bf
│  │  ├─ 14
│  │  │  └─ 140838c46f888f9fbf83948d1f25529f56e6df
│  │  ├─ 15
│  │  │  ├─ 13281385d6853aa72b334377729858f776b261
│  │  │  ├─ 2d80f7f9c30ccc2ad8a37d945dc54c5ae65846
│  │  │  └─ 479aa01ad001a375208e8e5fb1651e5cd30200
│  │  ├─ 16
│  │  │  ├─ 31108340d3279bcab3cc0ca3ab515f8c6f6642
│  │  │  ├─ 455a2e29bc61853529140f70f275a7d097e7a4
│  │  │  └─ 9ff2b295372a76ae655bbba047c2b7b595a0fe
│  │  ├─ 17
│  │  │  ├─ 96512911824ed0187b781b26f0c061be22c18a
│  │  │  └─ dc62002df034c19ad872730fae4a7b918dc0e8
│  │  ├─ 18
│  │  │  ├─ 45dc807f41f75588f4c3becdc6fcd1a6108f0c
│  │  │  └─ 4bddf738ddb44340c4c26a0e09cd6484e63df3
│  │  ├─ 19
│  │  │  ├─ 3958923b58cde27425fa5649645e7e1b0822ad
│  │  │  ├─ 3e40d2b1fa412fab9a260c8f3d2d5bee9bd406
│  │  │  ├─ 6c616bab96cb01456b3baff43555e5f3787a54
│  │  │  └─ b05341979a163fb0b6f0d705ef860736e0ac97
│  │  ├─ 1a
│  │  │  ├─ 779bd5230212c21f416a93a3028c9dc33a279f
│  │  │  └─ d2ba0814839be1ba8d81f8f09bea7fd1c5b6b3
│  │  ├─ 1b
│  │  │  ├─ 683cbcf558e982ec350378bcbb27cedc0eaf6b
│  │  │  └─ 844bb1a588fed8eb56a8acb6d830babec38e6d
│  │  ├─ 1c
│  │  │  ├─ 501b45982b2670f1f8ee0b3eddd6d644b486f0
│  │  │  ├─ 662f3b546f9aef8c470acdc4ea6465b8fe1c2d
│  │  │  ├─ ae22dfafb641c57c3f2edb0940db6cdf15b235
│  │  │  └─ ffd96ade4be59871e1f4f7ab2da07928be080c
│  │  ├─ 1d
│  │  │  ├─ 9e2e41c8d61758831e81fd3961d328080be301
│  │  │  └─ fdacd84e26ff8332fc4089e86ee6fe05e3d008
│  │  ├─ 1e
│  │  │  ├─ 0130fd25221abcbab010fd677f5ac5b5e7e278
│  │  │  ├─ 5c8bc7518607daa47443fee8b61a7e65c42234
│  │  │  ├─ 6ba9cc25a7cdfc5188141cbc7fefd2bcf841f6
│  │  │  ├─ ac493ef2a740cc622429a918c218a17ebaef92
│  │  │  ├─ e126d10cdbc0548dd1dee33360f63f36ba2e39
│  │  │  └─ f1d6d2f26e4577218f45edae881e3134c435e3
│  │  ├─ 21
│  │  │  ├─ 0cef156266a066ebbcabae72d74936001dc056
│  │  │  ├─ 4a96135c4edb133e9ce0011568c339d3320c34
│  │  │  ├─ b0f48613d6017dd8f2379b320656fccb79591e
│  │  │  ├─ cccd345bee87bbf21bd20b5f85245475327778
│  │  │  └─ f77c518f1890625039b1e530a3a0775ba390aa
│  │  ├─ 22
│  │  │  └─ eda1ec4a2a072e0b1711e384b3c8d3a5ed073d
│  │  ├─ 23
│  │  │  ├─ 0f02c88f8f72591e8c8a04d623a9d8628f1632
│  │  │  └─ b10b997e74cf87da1492757b4b03111bc634f3
│  │  ├─ 24
│  │  │  ├─ 71a714af639b74afc2b8844d46b1c3d2537df4
│  │  │  └─ 9178cd76e614a342d2b6e50b8233ebf49b7f43
│  │  ├─ 25
│  │  │  └─ fd0e7c97f05d7205c2a956995bb490caea18fb
│  │  ├─ 26
│  │  │  ├─ 52c5f34aa659c9c6fa33397b0adbe1c03a0102
│  │  │  ├─ e02a42dc2e46837ddb309d7bd9da0a9db913be
│  │  │  └─ f5c3cf8b58bb3d3ffe6cca6f7932bf44767009
│  │  ├─ 27
│  │  │  ├─ 58f16ea5fb6e02f4f88295f9528942a92666b7
│  │  │  └─ a6566d238f14f0d5d234c94221f899ca8587ae
│  │  ├─ 28
│  │  │  ├─ 695c6380181b3d6decff66ecbfd465cccb9075
│  │  │  ├─ a9f52af14af041d0d5e54745d6a36eafa206f9
│  │  │  ├─ ad4e9e66806614e1509fc0fd10f02210e7b27b
│  │  │  └─ c9a7574e4658381c16b30ff6e8fb714548ae2a
│  │  ├─ 29
│  │  │  ├─ 3f54fb7e85a129f74894f67cc40b849929d970
│  │  │  ├─ 5df686bdcef6a3aa6637d2fabfb3c352c49c1d
│  │  │  ├─ a5fcbb52c0e0a88e2ff02f0b41b6314194764f
│  │  │  └─ fbe2b75813c4274c3a145d2e891ca04cea7ed7
│  │  ├─ 2c
│  │  │  ├─ 5289b4c139e789af10fe473570771cf1da7794
│  │  │  ├─ 5a03669adf6b9d6cac5caf7d11562e94cb6b65
│  │  │  ├─ 68c54ccd47c0d0f4850a461470193928b4087f
│  │  │  └─ 6c50327240316539cb83492e158632a03a7994
│  │  ├─ 2e
│  │  │  └─ fc07ebb7be2f9a4280b9771e1f352626df9735
│  │  ├─ 2f
│  │  │  ├─ 1eda0c1f6dc35cfe82e114404d287dceae6666
│  │  │  ├─ 4048bd534821ecd4ec4cda5c8666eb73ace098
│  │  │  └─ 807d074eed0cc9e25663c06d43ec13c11e2411
│  │  ├─ 30
│  │  │  ├─ c21858a44673b85a83264f3ad5910a9dff0900
│  │  │  └─ ced519beece3ad78c9d835755e702cb56c4197
│  │  ├─ 31
│  │  │  ├─ 00faca6a9790c8af7238b8284f7737301835fd
│  │  │  ├─ 3e571a254daf66fa8bd67d551cfe0cd11f1395
│  │  │  └─ ad2211ef3407c8712373aaebf29333f7b240f2
│  │  ├─ 32
│  │  │  └─ 0d19747be44c3684cc4c7a1a3f6813be60ff26
│  │  ├─ 33
│  │  │  ├─ dc584b51ceb5fc49b8a37d1c91a5c560d8e25a
│  │  │  └─ fa79752b7ed283a547d250ec51284371517515
│  │  ├─ 34
│  │  │  ├─ 04ed515b4be623571d9ee0c8a05933e82c52b7
│  │  │  └─ 36aca14c39021f779bba0a1b3b05efcb2a85e0
│  │  ├─ 35
│  │  │  ├─ c6957e783f9b58c6f7e6d239d7aa3f565b955f
│  │  │  ├─ e4d12a99ee5e107ee38b55e69edebaf5eaf60c
│  │  │  └─ f98987b804efb1a863f0b1db9b400fb35f9cd4
│  │  ├─ 36
│  │  │  ├─ 320d886dd67ac2aa467e1748803f9570629c09
│  │  │  ├─ 40041de97005aef3a53f49c47ee98390f8762a
│  │  │  ├─ 57f79f003615bc48d09526ecf5c9ae6709d567
│  │  │  ├─ 6322a51c69fcd933ca1983fc24b3d5b546dcbf
│  │  │  └─ d47916481cf0937fc5563ca48e456645846715
│  │  ├─ 37
│  │  │  ├─ 41395ae2b9bf641a268bf342e6437ae639a701
│  │  │  └─ dc4b3c25fd53e496c11f0bd09a8bd36e1a6d56
│  │  ├─ 38
│  │  │  └─ d5ca9f17858c67fcc1bd739a55db319d766b21
│  │  ├─ 39
│  │  │  └─ c27fbd1c90c55a51837ad5b3ac6af215d5ee99
│  │  ├─ 3a
│  │  │  ├─ 0c20af3bfceb32cc72e932f29801568d83f74d
│  │  │  ├─ 2a05015582559b76c2081f254450c35a7cea4b
│  │  │  ├─ 7d12f938aa93716c3574695ea854e117c4db75
│  │  │  └─ c600508e026738ef2e9fbfc398a6f365cfa5f5
│  │  ├─ 3b
│  │  │  ├─ 057890cccee662ca69f04b9eb2eccb0ee1956c
│  │  │  ├─ 0a3520032c19ebc53191ae8a2d529190160745
│  │  │  ├─ 9ea116c70e39f2365910dd5a24a1e8dcb976c6
│  │  │  └─ 9ed96475349679623c8c1da049b4178d1be6da
│  │  ├─ 3c
│  │  │  ├─ 7cd8bc950d597b8cd55588878c19d297c722a6
│  │  │  ├─ 8b9e4938a5d3fa5e2bdd875728a36873d7152e
│  │  │  └─ c218927d7e3b0c15aecdc64c4bb86fdcd7605f
│  │  ├─ 3d
│  │  │  ├─ 9d751d7913708cde7b1064f71c4daf3bc425b8
│  │  │  └─ eca3a7afda19e0b8eaf101f00eaa97f6e3e50d
│  │  ├─ 3e
│  │  │  ├─ 0bc0b567b878ed61510f3fef90def9bbc4cfc1
│  │  │  ├─ 508921fc8c69b467ed6305ad088a854f0b708d
│  │  │  ├─ 535fd8142f518093377f0edc3ee9a6ef0baa41
│  │  │  ├─ 8f72ea041b12d56826e1c6ac1b3fedb8162a40
│  │  │  └─ 9243131c6b881d28bbba0ba51c9bf5924c27fa
│  │  ├─ 3f
│  │  │  ├─ 420c80d9d0eb9508a3c93d9bf0f118dfcb29c7
│  │  │  ├─ 6ffd68aec76cffc68c82e108a1df89b956049e
│  │  │  └─ 7b8447cdb4b0da5a91ede272da662b498f1adf
│  │  ├─ 40
│  │  │  ├─ 05aab53381da3d92b1e199343059961ff8e750
│  │  │  ├─ 203e34f01d4f2947872016ffb50f9b752fcd27
│  │  │  ├─ 786e881c241113befc1c1353d469ab3e99700d
│  │  │  └─ 7c9d4c3c1cc1d8fb131e4359c91ffef3a97080
│  │  ├─ 41
│  │  │  ├─ cb068879ba0f43a01ab54f049addb3abe9b272
│  │  │  └─ e3c6b7229c676ccfbccd593a1dcc1ccced4606
│  │  ├─ 42
│  │  │  ├─ 9ca27447b11d75cd955b355e26fcfef8c5472f
│  │  │  └─ a652209e6dc86a762a15c54def6a713449c7a0
│  │  ├─ 43
│  │  │  ├─ 4b63342614cb1a5873fbdedcd1b59d454a6768
│  │  │  ├─ 5c6bbdb970fe053683250fb1f19ece0b024f13
│  │  │  └─ 66e36a9ef673ad6c77c396b012100447ad6e3c
│  │  ├─ 44
│  │  │  └─ 45670b7233b20cc492d6d9b8dc27f3d978c410
│  │  ├─ 45
│  │  │  └─ 02c5581beb76b85449d9caaa37c784bfec55db
│  │  ├─ 46
│  │  │  ├─ c630bdec02df9d8f25787c59e702693164aad4
│  │  │  └─ d7e2757f5777edb7c64a5260acedbd409e42ab
│  │  ├─ 47
│  │  │  ├─ 1ca705d76e81f782862caa0444a25e964b80e8
│  │  │  ├─ 245edf704e96ef7f33d8dcc45247ead77f8c76
│  │  │  ├─ 5d849961549c62079450207e55b8a52c5e8e21
│  │  │  └─ e8fd65dc9c30c3483507c9616e65c8f5c1d70f
│  │  ├─ 48
│  │  │  └─ afa4313865daf30246364386dedf3480705326
│  │  ├─ 4b
│  │  │  ├─ 3a991081793dbaad44cfd53a99d576fd392a14
│  │  │  └─ a7959729ddfeb1f0864312d26ce97b5629d92d
│  │  ├─ 4c
│  │  │  └─ f0a50a1039d891aebc1619c3a130a90f032f9b
│  │  ├─ 4d
│  │  │  ├─ 9970ec17243342961bc8ed7112aa1f4fa5e5a4
│  │  │  └─ da8fa53b8448dbda2eaa717be9f68e881e0bbd
│  │  ├─ 4e
│  │  │  ├─ 2293568ee20701dc0fa065ac6a6008a706bac2
│  │  │  ├─ 6779fb8f328b17a259da29dd350043cdadfa90
│  │  │  └─ cf3cb6de7fa04dac609b8963f3f1b990266f2b
│  │  ├─ 50
│  │  │  └─ 66f51a53fc1acb63e881121421b4e0223dc856
│  │  ├─ 51
│  │  │  ├─ 6f675aeaad068c693e3a9c6577f7d46e575762
│  │  │  └─ 8d2c6b423dcfff70c8703f7cff83828588b19b
│  │  ├─ 52
│  │  │  ├─ 4af3b98ae9a612edb6997d3c5be61040ed2ff6
│  │  │  └─ f9e77daf50a67905f7c0a2d1bc289d135a0f15
│  │  ├─ 53
│  │  │  ├─ 056e74c0b7800e619c9e0b307ff8a0c4c1c784
│  │  │  ├─ 8f35bb96b5d10f3a37cf3b2412793bb747e62b
│  │  │  └─ ab02fae7084a120345608f1af151099224e094
│  │  ├─ 54
│  │  │  └─ 2116c95310a925640d18ff49092bb9b4270d80
│  │  ├─ 55
│  │  │  └─ 9a186c112643f833787358ede708403e075adf
│  │  ├─ 57
│  │  │  ├─ 9d496cbe02331d79d54ed57c8f2fed5a43de14
│  │  │  └─ fad86a09eff1acda49ca479acca580e35ef7cc
│  │  ├─ 58
│  │  │  ├─ 7a818fea2af6b3aba170b467c11d26a4444fcb
│  │  │  └─ f72590a1e0b511e523063d78b60291a84804d5
│  │  ├─ 59
│  │  │  ├─ 384582b92a92d0899f80188e759b0a34befbfa
│  │  │  ├─ 55be2edf9c9b071b7ca188f0c4d3b10b4a4b12
│  │  │  └─ c3643bd0254ca49575c5230eb54e3001b94933
│  │  ├─ 5a
│  │  │  ├─ 251d0b8930ab44ced837d7fd0498a9910fce8c
│  │  │  ├─ 40eeae4553a74d8a369eca3a85d5b4ccc0e15f
│  │  │  ├─ 4584ce18509c389f25838839efe93d61d8e2fe
│  │  │  ├─ 48c9516ec798d41b2120d669231f2518c0281f
│  │  │  ├─ bbf54dc7727c5f0b73e381049c4dcfd42f338e
│  │  │  ├─ caa44dd8b88940cc7ef4a4574f8f891b7c9f2f
│  │  │  ├─ d95f721c14f12622630e09f166dde3ffad9223
│  │  │  └─ dd24ab0e27f44d64e85a033ac9d47e394b51f2
│  │  ├─ 5d
│  │  │  ├─ 11377f6e6ed9034717d39546f7e420333a0634
│  │  │  └─ bc91aed2e7b82d6044293fa602fce874a7e8d6
│  │  ├─ 5e
│  │  │  ├─ de60a55ec01a3ee50be01c33f14518065cfddb
│  │  │  └─ f4d15c854900c1ab39cf52d9fb7488b6c16ba8
│  │  ├─ 5f
│  │  │  ├─ 61e9c556c9164f4c4f7f14aba4b2fbd9662160
│  │  │  └─ b143a47dd3ee7658ac27306f8986fd036241ba
│  │  ├─ 60
│  │  │  ├─ 086d8c69a5a327c3f009685e3127b3051eaa4d
│  │  │  ├─ 100562c525cd4aa3e213da82a812edaa5c485b
│  │  │  ├─ 2aa1d694603bb84c52629eb40dab3558f7a22b
│  │  │  ├─ 3bde3cb1fd8c42851663d8356cb663c358693f
│  │  │  └─ 648ddd96db53b6b87be962df520382582fa34f
│  │  ├─ 61
│  │  │  └─ e57223c49e60ee25922669e65f7e041444636e
│  │  ├─ 62
│  │  │  ├─ 7d77c517a43e5146dd4cc35d6097119c9bf9f5
│  │  │  ├─ b58f744c0494bd1095197c8b5d702c633141c6
│  │  │  └─ d4373686c1f3b1c02d21cdd7915bb07c5f80fc
│  │  ├─ 63
│  │  │  ├─ 1e58b34a34215b90d60ff20dc3d54ef3969714
│  │  │  └─ 6467a8ec06e88b7200e422ded0c97ab4c68d47
│  │  ├─ 64
│  │  │  └─ 041ae8c8df9bcc6b4e46117b07d6c90176fd50
│  │  ├─ 65
│  │  │  ├─ 5938aea9ba1d3b8a0bc17b39f8642ef2468397
│  │  │  └─ 96642e83c6d78a28b4d43c5d9e6ab55c6951d3
│  │  ├─ 66
│  │  │  ├─ 2676cf73de45269e0df34c3323c5be9ce9ccc0
│  │  │  ├─ 4a8bcde7ba256f41090ee8e75d876acf15e0de
│  │  │  ├─ 74f9035ae81a5ea5ac19f252e42b918c5cd8f2
│  │  │  ├─ 7890725c850469d4d940cfa093473e31475b9a
│  │  │  └─ cd2c1907cf8f13e22d5bb5bbbc1f3e278f052d
│  │  ├─ 67
│  │  │  ├─ 16a71410a741be426d0e366bb47516c68dc8e2
│  │  │  └─ 70aa7b3ca163de5d2b4c7d6a64c1de4d65d56a
│  │  ├─ 68
│  │  │  ├─ 0b7b4582313948134f3303afb391c13f508806
│  │  │  └─ 9042bd0dc044cb109b64622006329d4631d05f
│  │  ├─ 69
│  │  │  ├─ a1ac4c7e4ee523158c99d2206a8affeac37d2b
│  │  │  └─ c92edd5f351e972def704a638541758a74cb40
│  │  ├─ 6a
│  │  │  ├─ 31b4b6f262055a3ffa1440160e4334454a19d3
│  │  │  ├─ 3ca4f3f2a016997a81ed7dac1d1689e711b5fe
│  │  │  ├─ 44ef3bbc45cbe143d08800eab19c2746e2bd66
│  │  │  └─ ee9e60a62483a72529dc561d493699c7d07502
│  │  ├─ 6b
│  │  │  ├─ 114b2f0ab715bbeb640885e64474651bfba9be
│  │  │  ├─ 54072212a0060853ced02315335e1e634e5ede
│  │  │  └─ ab813b3bd417c77cd07f2a7205a72d63005135
│  │  ├─ 6c
│  │  │  ├─ 024ee96b756f8904f088a7dbf37de4657421ca
│  │  │  ├─ 20d774d4a08ff1efbbe78173db2376ecb21d7e
│  │  │  └─ 7a048db6125c236619f96e3b009111641830bf
│  │  ├─ 6e
│  │  │  ├─ 06c9be29849b77a4401d15ffe5d8ad09230063
│  │  │  └─ cf60d89d7dffb12b1afeed86fb6b1a572f81c3
│  │  ├─ 6f
│  │  │  └─ b7cc6ef5184e915935c978d53d548799ff74b0
│  │  ├─ 70
│  │  │  ├─ 19cae5013a29cf100e7e428ae8fb898d72517d
│  │  │  ├─ 487950205a37d910c84ce7f78d4a6f29f3dee2
│  │  │  ├─ 6fc5b2ee38df67d79b6941b93442f8308645a4
│  │  │  └─ 8d6d2d66e0789bbce33b45800e76ac31e91faa
│  │  ├─ 71
│  │  │  └─ 3d771dbfba3f55cc9872d1392f8b688ca74ec3
│  │  ├─ 72
│  │  │  └─ 9c01001bb2080bad4680950bc1148b59c3a7b4
│  │  ├─ 73
│  │  │  ├─ 0860b22eaede5a1075d28c0572bf2f2dfcd428
│  │  │  ├─ 21c5c889eb1a13582a548f67606eb48eceb480
│  │  │  └─ 467210114ce9a5fce662ebfc9286a7124054a9
│  │  ├─ 74
│  │  │  └─ 1bcfd1ed3d0fb342138068b4ffdf8564d01b40
│  │  ├─ 75
│  │  │  └─ fd8bf6642dde946176bba3f21cc1f7ab2a51a7
│  │  ├─ 77
│  │  │  └─ 28f63b18b63488dc112892ee0669984f8bcecc
│  │  ├─ 78
│  │  │  └─ 6b202bfba58c372a76d8d3bdce1d7775d51baa
│  │  ├─ 79
│  │  │  └─ 4ececf26924c00dd91b684454c86144eda9c26
│  │  ├─ 7a
│  │  │  ├─ 9873994bbe4d5ae351ce24127d673e4cca736f
│  │  │  └─ bd586012ccca72ecbf06f46288b94fe027d4c5
│  │  ├─ 7b
│  │  │  ├─ 2c100c7f0561e9a44783f35d3f32d5475a83de
│  │  │  └─ 6afede146afd2617108c3abba50bb5df794214
│  │  ├─ 7c
│  │  │  └─ 0c5da02a406fc527e5bb93141afc98ec165bf3
│  │  ├─ 7d
│  │  │  ├─ 22c03fddef30580d00cdd71c1a7a291114cdf0
│  │  │  ├─ 5ecb45a8f2548b5e66771bda7be43d15ad35d7
│  │  │  └─ 7a86c498b603cff466222e3cc03505734ba1f8
│  │  ├─ 7e
│  │  │  ├─ 1b5b98b7ebdf97cbf406fed9325985cd46babd
│  │  │  └─ b54d83280d7ccabfe7cdedbb7e27006c890d0f
│  │  ├─ 7f
│  │  │  └─ 60eaeae41e19139319e9d99808595f78af475b
│  │  ├─ 80
│  │  │  └─ 7cef6b542ad37605058bb238e7f57bae4e8dab
│  │  ├─ 82
│  │  │  ├─ 91fbde77a66ed2e0be376e5c20378f48b826be
│  │  │  ├─ c416bdcf7679bea037631f30ad91db49e7eb81
│  │  │  └─ edc743835ef9565c279e871591c86a004ef623
│  │  ├─ 83
│  │  │  ├─ a4f1d84d5db5def74c64ccad81cc479f4b8d1b
│  │  │  └─ fa43e49c138393aa478b2e58399dbe4e363e55
│  │  ├─ 84
│  │  │  ├─ 2b3dcd9b1ba1b20ae05f3aa4992753398c4d27
│  │  │  ├─ 32e36e23870bab9cb64cf4bce750b3dbd5afe7
│  │  │  └─ d0465b262eecff7429adf15e3cc40b4dd8efe3
│  │  ├─ 85
│  │  │  ├─ 0be108b23ab21a6921fa17f6a53945132bfc8a
│  │  │  ├─ 1bd4d700de4512c5bd8e815e6df66fa7afc535
│  │  │  └─ 5c73c563271cd7b70f5f960399404cb0cfdae3
│  │  ├─ 86
│  │  │  ├─ 5ad90ec83cec9247f4b33b140fb26beb835cf2
│  │  │  ├─ 5fef92d45d772c8ae22d4363d6cce44c02431f
│  │  │  └─ 797addec898262e58ad5782d2c30ebee8d2959
│  │  ├─ 87
│  │  │  ├─ 4978e6a59514a1bec120d9492a284b00283fc6
│  │  │  ├─ 7315ecaf2e5be216a8fb47f49474c44857bc1a
│  │  │  └─ b63d3bc1eceeea8ffb0c0793bc0385a92ad856
│  │  ├─ 88
│  │  │  └─ ffd40bea779ecb58075563f2c1ebee271e7ada
│  │  ├─ 89
│  │  │  ├─ 915e5e1cf6ec7ce7e1eb198a9fb207c8941013
│  │  │  └─ eaf9c44f1bd09f11b6aa97e44873176d1b1ce8
│  │  ├─ 8a
│  │  │  └─ eefad0ce9e822b8da5807e2662948058f0ef95
│  │  ├─ 8b
│  │  │  ├─ 24b4d81cd44d525939976d760b087a0650dd2d
│  │  │  ├─ b392a2cfd61acc3a50f7b416bd540b72694a12
│  │  │  └─ c269eddc521b800f66094c8042fa878d3e2264
│  │  ├─ 8c
│  │  │  ├─ 1cafdb519cd35735c493d2a2e9762f77f2ad7b
│  │  │  ├─ 955f4c1b24613c1f81128bc9148833eda569e7
│  │  │  └─ cd25598bb1e02cb7b962258979e5d5f6018ac0
│  │  ├─ 8d
│  │  │  ├─ 4dd16ab96b31dc8b08b8e5e9e02f52ceda72b6
│  │  │  └─ 5757ed409954aaf7a824e8dae786eb12ae9601
│  │  ├─ 8e
│  │  │  └─ d05b17c91d77b4f943953b56bfd9b75ceacc61
│  │  ├─ 8f
│  │  │  └─ 70319bb89e11fa2144902c19f3827bd751a264
│  │  ├─ 90
│  │  │  ├─ 09291153f56d720b1e181120a602ee3fc286c4
│  │  │  ├─ 15ab474fa18056abe56dedeebd3bbb785d7ad2
│  │  │  ├─ 18a5124fcfdd188d273e577d1bcbb850ef9d57
│  │  │  ├─ 85e3fd0742d5fa5ace3d0a189fac721efcee6f
│  │  │  └─ 8ed9d0dbc7ad39e7f93c9b0f5422fc70a0aa74
│  │  ├─ 91
│  │  │  ├─ 91719655cc41972047f08bfb9fbf23cf0a8d8e
│  │  │  └─ b65163f266d4f5e9084e313905b9421db9af2f
│  │  ├─ 92
│  │  │  └─ 00657fb7c829b179532eb39bce7ef01ed4a86c
│  │  ├─ 93
│  │  │  └─ a4e55d0729005668be5adf42e670573f616a7b
│  │  ├─ 94
│  │  │  ├─ 64a1477f89a035dc6894ea2b7905cf353c7a86
│  │  │  ├─ 953b7dfe3ade28603fa7e555bc3a6c49303f45
│  │  │  └─ d6623da801b3b8244d612f9c477091fc8ffd56
│  │  ├─ 95
│  │  │  └─ 8cb4d7894da2b02a4f3f2f1cd2b2b31ce67fd0
│  │  ├─ 96
│  │  │  └─ 3bd6670a700d6f122792e65e3f677181fad04e
│  │  ├─ 97
│  │  │  ├─ 714a8b7e72e772676596e71ed816a3a5b0d825
│  │  │  ├─ 919c8a5c8b269085987d8bf9c70684109e26d5
│  │  │  └─ 9c5651e1a6fec0462cb781794f7a54045dded0
│  │  ├─ 98
│  │  │  ├─ 028f2adffc26ebb2ebfb8972f7b3fc99d20053
│  │  │  └─ c123a523c072566a6840ce44a37b97d2812de9
│  │  ├─ 99
│  │  │  └─ 06dabd100a5170c51c487293b07510a6a99ab8
│  │  ├─ 9a
│  │  │  ├─ 2f0463792800d59d19e5967132864aa6db0838
│  │  │  └─ aedb7fd59a979823362498a2e1942b7c473264
│  │  ├─ 9b
│  │  │  ├─ 22a99a78ef7ba76a68f314f8ffff0cc3f5c844
│  │  │  ├─ 88ba146a864a256f40fde78388e3983d0f160d
│  │  │  ├─ a4b0307ef7e41763b234797eca1cd73e00c90c
│  │  │  ├─ b59345b43bb50174153f0e9e0800c4f89ea8c7
│  │  │  ├─ beabec866593799ad251a899a6a0567d306488
│  │  │  └─ debe8164038441d901978f565e25571caad1af
│  │  ├─ 9c
│  │  │  ├─ 97cfdfc988f02391f7679b6c38826c94d52326
│  │  │  ├─ cdba9e685b17d52b745d443513e54ce5fbf57c
│  │  │  └─ e112367de8166baf78c202b6c10d4b8c25bd8c
│  │  ├─ 9e
│  │  │  ├─ 111988a991bd1cb0dd2e8aa9d2127fe2b60d8a
│  │  │  ├─ 163a60b94942d0003d9e0945f842611ccd244c
│  │  │  ├─ 9681cf3b4b474f327b90be5c8a7cfe6c9125f3
│  │  │  └─ 98eae376ab97a822027cbb8e9ec0f7cdea0b28
│  │  ├─ 9f
│  │  │  └─ b1692c5b9bb9e05a2726b0f118d6f87cea366c
│  │  ├─ a0
│  │  │  ├─ 79f320d8bb8f12ec38f3734a2f839f33126831
│  │  │  └─ 8a2653e684a31d80c586cd4fb0dae1e115627f
│  │  ├─ a1
│  │  │  └─ 8e0d71f562f6d4528fc259bb987285957d4af2
│  │  ├─ a2
│  │  │  ├─ a0937f740989847d3c87d2553169b181ae184a
│  │  │  └─ c528366e2b02cf58d76212fdfbbffc82796749
│  │  ├─ a4
│  │  │  ├─ 5dbc32e916df10dce28542392421f6f4b7eedb
│  │  │  ├─ 7259fb2d8b2fd34bb9a34b4559640def4ae272
│  │  │  ├─ a70ad580b0e2f6bd05af3fa23423bf48917d75
│  │  │  └─ dda79a7370b4c1bd34d6a255afe6471347c09f
│  │  ├─ a5
│  │  │  └─ 3c6b3a994a984e5e082ff84ce3a852e0f2e889
│  │  ├─ a6
│  │  │  └─ ff4b886d3e7aa2328842ec7b1f70f631152349
│  │  ├─ a7
│  │  │  └─ e89bdb8ec6d82959061d29df0f2154f5ea614e
│  │  ├─ a8
│  │  │  ├─ 31e47e7c5e38903e2624156c717e9672bab9ed
│  │  │  └─ 64ca4c8db397a83c416ab64d6f26b30bdedd22
│  │  ├─ a9
│  │  │  ├─ 03905675d56bacc3b3cd338972378c25084e16
│  │  │  └─ 5aacd0f7ec8df337094244d09ca0bbbab379d7
│  │  ├─ aa
│  │  │  ├─ 26baf5d55608694348fa5cdcd432895cb61cc5
│  │  │  ├─ 4ba5be2958de4e19ea181756c9d999c767a8b6
│  │  │  └─ 520dfb295d63faaf9e4a2fa87d295a50ab7f25
│  │  ├─ ab
│  │  │  └─ bda7d0663f381c1d21f15ec5c137005b2ed9fa
│  │  ├─ ad
│  │  │  ├─ 1ba9b49087a6c007d2dd0b68b42c8fce519194
│  │  │  ├─ 27746fc11ea282f2ae58c093a2dc6ac5b99d75
│  │  │  └─ 6149cfd9e01664cca75570a2e074b816bffc9e
│  │  ├─ ae
│  │  │  └─ 7300c0b5eab695decec2f4fb1bacde640c03a7
│  │  ├─ af
│  │  │  └─ 1a894f73d81eab49b56ad9870bbf5d030ae2e3
│  │  ├─ b0
│  │  │  ├─ 36d27698d90a2cfbd40a7a58ac4726710a9cf7
│  │  │  ├─ 51460a4ed060668800bce976e82aee5e91e042
│  │  │  ├─ 76a8f655f1d1e587fed77ed6d0c1f8ccd8a9da
│  │  │  ├─ 7ef636967971f98c21233baf6d2a945736ba57
│  │  │  ├─ cb7e5b3bd11e4fcecc4c164a2009da6b8065ad
│  │  │  ├─ ce2dbb4aa94e3fdd24f6b398f892c9d6c0f890
│  │  │  ├─ d6838ff518803b8dc2cb96b73eafa954e7af22
│  │  │  └─ e60a824ff9bf1bb6027a991714276a41311709
│  │  ├─ b1
│  │  │  ├─ 9ac7d6a680f14d8453514d48ececcfbdd31888
│  │  │  └─ e26b5cedf0486f5db9b588e1c620a357669518
│  │  ├─ b2
│  │  │  └─ d2b582cf80bbba2af3699552fa568ee326298b
│  │  ├─ b3
│  │  │  ├─ 657f21c869ad8bb7eb523d1381299e1dc14877
│  │  │  └─ b5fef69557b238c4e22a837768b23e3e386e44
│  │  ├─ b4
│  │  │  ├─ 0c886994fdd12b55007beb34bec2f97fd36ef1
│  │  │  └─ c23fdece6977976498237a910b7a53951b28bf
│  │  ├─ b5
│  │  │  └─ 78ea577d329a5ff6ce669aa18cd83c73d2cf8e
│  │  ├─ b6
│  │  │  └─ 92f4f6d8ebdd78b91596541afea37f5e174fdf
│  │  ├─ b8
│  │  │  ├─ 434b0b0c18a3e3b03e5a6ddd6ccc417c40f570
│  │  │  ├─ 4d3b00932548768b3fd4822b681da5f9e14f47
│  │  │  ├─ 927e9b332d91b18811fa714f9a4f3bad4fe387
│  │  │  └─ 959017d238bf184d440859fa6c8e30fc848fa5
│  │  ├─ b9
│  │  │  └─ 87dcf9e91b12a959f85c718f6e286e0bc0b6c0
│  │  ├─ bb
│  │  │  ├─ 5b3bf9b1eac0290d7bb515fb87a3514c729b4e
│  │  │  ├─ 60bd47a9473d61c8c142b0bc183c82af8f131e
│  │  │  ├─ d104d9ef6abcb947309399c4260347b1f6a0ee
│  │  │  └─ e99fbb4a3c730b89e3e2b2f32e89a097af38e5
│  │  ├─ bc
│  │  │  └─ 3182d7bfb097a182b046d7e71081dbce96165e
│  │  ├─ bd
│  │  │  ├─ 4410101ea1716397e504c1ca24d1e5629092ac
│  │  │  └─ 987fce36efe3ec2401e3b9769e7cf0beacdae7
│  │  ├─ be
│  │  │  ├─ 361c8724b1708bb8a16d27afd7cfa5652fe5bb
│  │  │  └─ 8263c45bb79dd7e4aedb1ddfafe9b57d6f6351
│  │  ├─ bf
│  │  │  ├─ 242eb0ef78f024c1e4b84d57113f121fdb26f9
│  │  │  ├─ c2a7afc17e7f8b1035ce3929f454b26a05fbdb
│  │  │  └─ f731ed55215d81d7015fbed6ddae2c9b1c52e1
│  │  ├─ c0
│  │  │  ├─ 07634a3e779c23eaca6ed5cc6dd64ec718d3a5
│  │  │  ├─ 6c2e8027157f478f268fdd15ec69ab00a7b38e
│  │  │  └─ 97c0a11c117ed89ff66981f9e204b926ccbfb5
│  │  ├─ c1
│  │  │  └─ fbbab342a74c13afc3962e73fc97e77a90008a
│  │  ├─ c2
│  │  │  └─ 754b0687273c782439919f935485d8c2270b75
│  │  ├─ c3
│  │  │  └─ 95d9a18c8392ea7364e1914ae15d533bd65783
│  │  ├─ c4
│  │  │  ├─ e68d25f5351f79bfb19c1a66d500cf0bd30c6f
│  │  │  └─ f2cc1341ea752cd44339c1eefa8691ab8d358f
│  │  ├─ c5
│  │  │  └─ 91aabdaae10efd81f86cd982db34c503a18c71
│  │  ├─ c6
│  │  │  └─ cf914cbc1222d8468ac9d4fc3c81bce4237093
│  │  ├─ c7
│  │  │  ├─ 4dec9f68eeb9acd8b25ea076b0f492b17b02fa
│  │  │  └─ 92d4dcf25e0852bdb1b170297e5072b27bcce7
│  │  ├─ c8
│  │  │  ├─ 456213dd981cd31e5edaf2ed0a0fafdc3634b3
│  │  │  ├─ a36d94cb940846320ab45f7736723f89208d52
│  │  │  └─ df5277b8c9b5d67a91a604740d9f4709b2624b
│  │  ├─ c9
│  │  │  ├─ 3b3f600c7306fe54c488d41abf26710116516f
│  │  │  └─ 8f40cdae3bb4d30de1285913fd5c5bcf1d98d9
│  │  ├─ cb
│  │  │  ├─ 096897aec8c1eff45bb556efcacfd097736f60
│  │  │  ├─ 2b592e7a1ffa04db31938afd13168d114286af
│  │  │  ├─ 3a49c6ad3faf98d788dd422537e0c0e1187ee2
│  │  │  └─ 7208dfe1dd61f2d860792e21cbf407999430ef
│  │  ├─ cc
│  │  │  ├─ 33893f54f9c82c92c50e7c69fe08d8ba667e3d
│  │  │  ├─ 48fa0f268ee70af708eb75024baeabdf73ef47
│  │  │  ├─ 822c1172ab07315830bff2e09c7ad9a5745bb7
│  │  │  └─ d969be883b146efd0f24568cfd7b4f4d4d6d33
│  │  ├─ ce
│  │  │  └─ c5064427dbe82a004c3b6a68f23ce9110630b7
│  │  ├─ cf
│  │  │  └─ 02be8e0ac330ce0aed8d7ab56e0a1685758d25
│  │  ├─ d0
│  │  │  ├─ 310eacb82134fa05b91e18195a898834b7dab1
│  │  │  └─ cd6d84fd118d9ec77ec98b2d81332930decba7
│  │  ├─ d1
│  │  │  ├─ 8cb9c20cbcafd694c56f517cd180d6e0af47e8
│  │  │  └─ ef0009f445854814b517c0ab005d3c077f73bd
│  │  ├─ d2
│  │  │  ├─ 0ba9b8aa5c59b1958a4157e808e62de0d5c7b3
│  │  │  ├─ 2e499cc9dfa5cdff3fec65834e4db574110853
│  │  │  ├─ 729e252c1ce426b9aea6cf568b128857645575
│  │  │  └─ 98ae87b90a1b387945efba2f00a0461cdabcf9
│  │  ├─ d4
│  │  │  └─ 7092f39d0ebacd5c96b4138223822253e768c9
│  │  ├─ d5
│  │  │  └─ 1611dc3b4f5945e7aea5a0012c67e5add90b78
│  │  ├─ d6
│  │  │  ├─ 761067f9effb95649474bd9ad7a3a1b808fd3d
│  │  │  └─ d4d624708653150b913315a8acd300578db9c2
│  │  ├─ d7
│  │  │  ├─ 64f532285f66a623cf6887c2891637c8128320
│  │  │  └─ fa3f8f9f565d40f5d76ba5183244dfdf0de735
│  │  ├─ da
│  │  │  ├─ 1049d10a52cc7bcab96f542568cade6360850a
│  │  │  └─ 5f2c3d85be3bfa674856740e46b47c3c596984
│  │  ├─ db
│  │  │  ├─ 879c2119c5c4ac9077bff5f688595e3299ef2e
│  │  │  ├─ 8a24ecfaea89af5b0c913543f4c441f1709d00
│  │  │  └─ ce7e598ac1e5d0e11a6cb3afa12e72be5f6c18
│  │  ├─ dd
│  │  │  ├─ 6fb68b255253f181a477e3b8320171fcc92d4e
│  │  │  └─ fb98f30b6ae109d75d2af4b1159aa55c7b4800
│  │  ├─ de
│  │  │  ├─ 450edc16ae7af1c88a73bd63e3c3219d6e9049
│  │  │  ├─ 64281a0d0fe8d9d9264db78bf2b2e93d83b1fd
│  │  │  └─ 7d34d53c597fbdb239093d58def4bdd333c821
│  │  ├─ df
│  │  │  ├─ 37860032d4d266609837ec731091f7869f19b5
│  │  │  └─ 74bd95d91276d49469cdf19eb7c0ef7ebb1fcd
│  │  ├─ e0
│  │  │  ├─ 27c2e4e002fd448bbe8524846b4fe975830209
│  │  │  ├─ 3aea1f7d8cb233536392c5182aa18c0342a4ec
│  │  │  ├─ b12b59fc752fda663585f74e28554b3fd9ae3d
│  │  │  └─ dccb1a9faa432f5ba8b88cc2dd35026fe3fac7
│  │  ├─ e1
│  │  │  └─ 6962cf89de7ed3934ac9954881be8f8371461e
│  │  ├─ e2
│  │  │  └─ 02dc1e93e53e0d9b03db8580fa247d04c6e736
│  │  ├─ e3
│  │  │  └─ aeddebf7af9b583f3d75de4fa0fedca6423e47
│  │  ├─ e4
│  │  │  ├─ 1f8f6b61ed010cc8cad2a0e05d33d2a35f8ca1
│  │  │  └─ 458b9a1d0b472f01bf29444aab87b23581522f
│  │  ├─ e6
│  │  │  ├─ 6cd1d02d0efc7bd4c247c4fa4e9d6d7687cff9
│  │  │  └─ d477905bd8f81b5a33d844a7ff53dbb66a2bce
│  │  ├─ e7
│  │  │  └─ 60e5f2bbc5c2ccbfc7f81b381b01a290cc018f
│  │  ├─ e8
│  │  │  ├─ 499b9887f00e0bc787ea24e30f2f237194f8cb
│  │  │  └─ fb825c6277f9d8b6c25d46f0db521492ba09e5
│  │  ├─ e9
│  │  │  ├─ 0aeca369af3e67937212d1e67c71b66dc81251
│  │  │  ├─ 26afb1679b4faa70c077fe1fdc5502d9951956
│  │  │  ├─ 3615035065ff84e7b5af4d8ff5096ed20c3ec7
│  │  │  └─ d953759e5a69f8c0fe6b2255f38410b9b97e52
│  │  ├─ ea
│  │  │  ├─ 95596971b9d05a3bbfdb0d4cc8e240f7780f91
│  │  │  └─ e419f7052ee78072f64737373900da89de2ac1
│  │  ├─ eb
│  │  │  ├─ 5b23b35887ec1bdc9a488c92541ce56acd6d05
│  │  │  └─ 970b7f6dffc79f2af3ba77626fe07c8fdc00a3
│  │  ├─ ec
│  │  │  ├─ 151aa3051d95584ec656e16bfa65bfc1ea0c6a
│  │  │  └─ ab0997fde855148f156aa5c2202e5f34d073b9
│  │  ├─ ed
│  │  │  ├─ 43c4c766c9e2e8c8d06918b9dd55e39bc67b7e
│  │  │  ├─ 4fc936febb09c5c435ac6e9ddf06f3e9eab0ab
│  │  │  ├─ ca35ac5aace60babc5b146b7df94881f796d63
│  │  │  └─ ddc8b5c187901d67b16e74fc447b5dcaba9e2f
│  │  ├─ ee
│  │  │  ├─ 04e79f326abe37c6f8204a8bfa6e57b86fe5c3
│  │  │  ├─ 24a7bafb9c92784fad4a745b16bafaf55adbb1
│  │  │  └─ 3c24bdc2ac8fc7e289997530485b39c54cb5ed
│  │  ├─ ef
│  │  │  └─ bef745484342e091acc6869ea37a483d139de5
│  │  ├─ f0
│  │  │  ├─ 0ca91690371fb1f82c15c71a061c7c73c593c4
│  │  │  ├─ d30726d0ae3076ddd1cf24fbe598da56200958
│  │  │  ├─ f6d03b334a091153d375d0197e326775628746
│  │  │  └─ f83068526fdaf4f3bb9252322e75e458088a8b
│  │  ├─ f2
│  │  │  └─ 9074e1199aaa60060b149f91a466dc60ab11ff
│  │  ├─ f4
│  │  │  └─ a6ea36918b701a4cd34b2b61e3aa4d8cf730ba
│  │  ├─ f5
│  │  │  ├─ 6534281ab923fa85fe375008f72dc749255859
│  │  │  └─ 853bf51b2e070bed0efc180825383e52ad85af
│  │  ├─ f6
│  │  │  ├─ 380553140a1d785c76055053cb8eb3d3bf8d54
│  │  │  └─ c3c67e743f6ae734ce381e8e5b2821568f1a49
│  │  ├─ f7
│  │  │  └─ 5553e5938fd3d328ba027a3c965423daa944e8
│  │  ├─ f9
│  │  │  ├─ 4f0bc7945be628dd5f817537cd621a0597d3c4
│  │  │  └─ 9ba075dda5b92c5d3a569233efb1e5b5bc3ffc
│  │  ├─ fa
│  │  │  ├─ 30062b2161afa30ebc0366933bc7309ef4211b
│  │  │  ├─ 408ecffccbca70f8c7c2053ce5978dffa56541
│  │  │  └─ c38eb2434d700b1497f681c6f2b02ccaf7d72f
│  │  ├─ fc
│  │  │  ├─ d23c94b84565625792c4bc5c40420b48d729ce
│  │  │  └─ e48d4e0413d352f7a5e0ecc97fa187b3a30732
│  │  ├─ fd
│  │  │  ├─ 23019560c53a8a93b80f24f049770177c4ef32
│  │  │  ├─ 2e287e87cda93b6bcaa59e2edd2cd7bd7eebfa
│  │  │  ├─ 31728726583be8c14c30462caa49d0bc47a3d3
│  │  │  ├─ 6e27dbc05ccebc948dcaf0d44388f77c246a39
│  │  │  ├─ 9c9a69c1406caeb0a9660c645bef9ba4eb1362
│  │  │  ├─ b107517fafe47c47518a51dd2d1066d75b25ce
│  │  │  ├─ d194c394a74cd34d316d2fdc9da000dd342636
│  │  │  └─ db126aa0eeac43359e141adddcc988b1af512b
│  │  ├─ fe
│  │  │  ├─ 5483aefd8ee36f2131ea1bdcd4cd10d75f3c23
│  │  │  ├─ 63657dee9bc0723201c55d7bf5feb459ac30bf
│  │  │  ├─ a8ee1bb58e3ba382405c7ff44a7ea38f4e750b
│  │  │  └─ f18287d7407bd75dee942674dc4e0da2a01d89
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-d4bb99d892a92dc78007ac9b7f7f5a49efd0cd4f.idx
│  │     └─ pack-d4bb99d892a92dc78007ac9b7f7f5a49efd0cd4f.pack
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ babel.config.json
├─ index.js
├─ jsconfig.json
├─ localhost_3200-before refact.html
├─ localhost_3300-20230324T155019.html
├─ package-lock.json
├─ package.json
├─ README.md
├─ src
│  ├─ app.js
│  ├─ middlewares
│  │  ├─ admin-only.js
│  │  ├─ error-handler.js
│  │  ├─ index.js
│  │  └─ login-required.js
│  ├─ models
│  │  ├─ index.js
│  │  ├─ order-model.js
│  │  ├─ post-model.js
│  │  ├─ product-model.js
│  │  ├─ review-model.js
│  │  ├─ schemas
│  │  │  ├─ order.js
│  │  │  ├─ post.js
│  │  │  ├─ product.js
│  │  │  ├─ review.js
│  │  │  ├─ SelectedProductSchema.js
│  │  │  ├─ shoppingCart.js
│  │  │  └─ user.js
│  │  ├─ SelectedProduct-model.js
│  │  └─ user-model.js
│  ├─ routers
│  │  ├─ index.js
│  │  ├─ mypage-router.js
│  │  ├─ order-router.js
│  │  ├─ post-router.js
│  │  ├─ product-router.js
│  │  ├─ SelectedProduct-model.js
│  │  ├─ user-router.js
│  │  └─ views-router.js
│  ├─ services
│  │  ├─ index.js
│  │  ├─ order-service.js
│  │  ├─ post-service.js
│  │  ├─ product-service.js
│  │  ├─ review-service.js
│  │  ├─ selectedProduct-service.js
│  │  └─ user-service.js
│  └─ views
│     ├─ admin
│     │  ├─ addProduct
│     │  │  ├─ addProduct.css
│     │  │  ├─ addProduct.html
│     │  │  └─ addProduct.js
│     │  ├─ admin.css
│     │  ├─ admin.html
│     │  ├─ admin.js
│     │  ├─ adminMember
│     │  │  ├─ adminMember.css
│     │  │  ├─ adminMember.html
│     │  │  └─ adminMember.js
│     │  ├─ adminOrder
│     │  │  ├─ adminOrder.css
│     │  │  ├─ adminOrder.html
│     │  │  └─ adminOrder.js
│     │  ├─ adminProductDetail
│     │  │  ├─ adminProductDetail.css
│     │  │  ├─ adminProductDetail.html
│     │  │  ├─ adminProductDetail.js
│     │  │  ├─ changeHeader.js
│     │  │  ├─ Footer.js
│     │  │  ├─ HeaderFooter.css
│     │  │  └─ reset.css
│     │  ├─ adminProductList
│     │  │  ├─ adminProductList.css
│     │  │  ├─ adminProductList.html
│     │  │  └─ adminProductList.js
│     │  └─ adminReview
│     │     ├─ adminReview.css
│     │     ├─ adminReview.html
│     │     └─ adminReview.js
│     ├─ api.js
│     ├─ aws-s3.js
│     ├─ guest
│     │  ├─ guest.css
│     │  ├─ guest.html
│     │  └─ guest.js
│     ├─ guestOrderList
│     │  ├─ guestOrderList.css
│     │  ├─ guestOrderList.html
│     │  └─ guestOrderList.js
│     ├─ home
│     │  ├─ home.css
│     │  ├─ home.html
│     │  ├─ home.js
│     │  └─ home_bundle.js
│     ├─ image
│     │  ├─ celev_logo.PNG
│     │  ├─ left.png
│     │  ├─ like.png
│     │  ├─ like_hover.png
│     │  ├─ login.PNG
│     │  ├─ mainPage.PNG
│     │  ├─ profile.png
│     │  ├─ register.gif
│     │  ├─ register.PNG
│     │  ├─ right.png
│     │  ├─ search_img.png
│     │  ├─ slide1.png
│     │  ├─ slide2.png
│     │  ├─ slide3.png
│     │  ├─ slide4.png
│     │  └─ 뉴진스01.jpg
│     ├─ login
│     │  ├─ login.css
│     │  ├─ login.html
│     │  └─ login.js
│     ├─ mypage
│     │  ├─ accountUpdate
│     │  │  ├─ accountUpdate.css
│     │  │  ├─ accountUpdate.html
│     │  │  └─ accountUpdate.js
│     │  ├─ mypage.css
│     │  ├─ mypage.html
│     │  ├─ mypage.js
│     │  ├─ mypageAccount
│     │  │  ├─ mypageAccount.css
│     │  │  ├─ mypageAccount.html
│     │  │  └─ mypageAccount.js
│     │  ├─ mypageCart
│     │  │  ├─ mypageCart.css
│     │  │  ├─ mypageCart.html
│     │  │  └─ mypageCart.js
│     │  ├─ mypageOrderList
│     │  │  ├─ mypageOrderList.css
│     │  │  ├─ mypageOrderList.html
│     │  │  └─ mypageOrderList.js
│     │  ├─ mypageReview
│     │  │  ├─ mypageReview.css
│     │  │  ├─ mypageReview.html
│     │  │  └─ mypageReview.js
│     │  └─ mypageWithdrawal
│     │     ├─ mypageWithdrawal.css
│     │     ├─ mypageWithdrawal.html
│     │     └─ mypageWithdrawal.js
│     ├─ notice
│     │  ├─ addNotice
│     │  │  ├─ addNotice.html
│     │  │  └─ addNotice.js
│     │  ├─ notice.css
│     │  ├─ notice.html
│     │  ├─ notice.js
│     │  ├─ noticeDetail
│     │  │  ├─ noticeDetail.html
│     │  │  └─ noticeDetail.js
│     │  └─ noticeEdit
│     │     ├─ footer.js
│     │     ├─ headerfooter.css
│     │     ├─ noticeEdit.css
│     │     ├─ noticeEdit.html
│     │     └─ noticeEdit.js
│     ├─ order
│     │  ├─ order.css
│     │  ├─ order.html
│     │  ├─ order.js
│     │  └─ order_now.js
│     ├─ productDetail
│     │  ├─ productDetail.css
│     │  ├─ productDetail.html
│     │  ├─ productDetail.js
│     │  └─ updateProduct
│     │     ├─ updateProduct.css
│     │     ├─ updateProduct.html
│     │     └─ updateProduct.js
│     ├─ register
│     │  ├─ register.css
│     │  ├─ register.html
│     │  └─ register.js
│     ├─ style
│     │  ├─ HeaderFooter.css
│     │  ├─ reset.css
│     │  └─ slideStyle.css
│     └─ utils
│        ├─ category.js
│        ├─ footer.js
│        ├─ header.js
│        ├─ searching.js
│        ├─ slideScript.js
│        └─ useful-functions.js
└─ webpack.config.js

```
