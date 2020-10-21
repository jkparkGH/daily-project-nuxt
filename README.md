# daily-project-nuxt

https://daily-beauty-house.netlify.app/

> 매일마다 조금씩 개발하는 Web App Project 입니다.
> 일반적인 기능들, 해보고 싶은 기능들 구현해보는 목적의 Project 입니다.
> Vue, Vuex, Nuxt, Axios ++

## Dependencies

1. "vue-awesome-swiper"
   | https://swiperjs.com/api/#events && https://github.com/surmon-china/vue-awesome-swiper

## Jest TEST MEMO

1. Dependencies: `npm install --save-dev babel-jest jest jest-vue-preprocessor @vue/test-utils typescript`

2. package.json setting

```json
  "babel": {
    "env": {
      "test": {
        "presets": [
          "@babel/preset-env"
        ]
      }
    }
  },
  "jest": {
    "verbose": true,
    "moduleFileExtensions": [
      "js",
      "json",
      "vue"
    ],
    "transform": {
      "^.+\\.js$": "<rootDir>/node_modules/babel-jest",
      ".*\\.(vue)$": "<rootDir>/node_modules/jest-vue-preprocessor"
    },
    "moduleNameMapper": {
      "^vue$": "vue/dist/vue.common.js",
      "^~/(.*)$": "<rootDir>/$1"
    },
    "collectCoverage": true,
    "collectCoverageFrom": [
      "**/components/**/*.{js, vue}",
      "**/server/utils/*.{js}",
      "!**/node_modules/**"
    ],
    "coverageReporters": [
      "text-summary"
    ]
  }
```

3. `test-utils api Document`: https://vue-test-utils.vuejs.org/api/

4. `뷰 유닛테스트 공식 document`: https://kr.vuejs.org/v2/guide/unit-testing.html
