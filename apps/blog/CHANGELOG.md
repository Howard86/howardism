# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 2.9.0 (2023-07-21)

### ♻ Code Refactoring

- Add order detail page with revalidate logic ([8689520](https://github.com/Howard86/howardism/commit/8689520))
- Add server components to load products on checkout ([e9d8138](https://github.com/Howard86/howardism/commit/e9d8138))
- Detect user again for line pay redirect ([4eadd03](https://github.com/Howard86/howardism/commit/4eadd03))
- Update home page photos ([9398708](https://github.com/Howard86/howardism/commit/9398708))

### ✨ Features

- **checkout**: Add new checkout page ui with form ([f8fab19](https://github.com/Howard86/howardism/commit/f8fab19))
- **checkout**: Integrate checkout api and create order with seed ([238c70d](https://github.com/Howard86/howardism/commit/238c70d))
- **checkout**: Integrate line pay api with skeleton success & cancelled page ([814e52e](https://github.com/Howard86/howardism/commit/814e52e))
- Add commerce product, order & transaction schema ([ce64a54](https://github.com/Howard86/howardism/commit/ce64a54))

### 🎫 Chores

- Bump all depedencies to the latest ([f4aec40](https://github.com/Howard86/howardism/commit/f4aec40))
- Run formater & eslint ([7f44d4f](https://github.com/Howard86/howardism/commit/7f44d4f))

### 🐛 Bug Fixes

- **checkout**: Fix line pay integration with updated api flow ([9cb2081](https://github.com/Howard86/howardism/commit/9cb2081))
- **env**: Add vercel ui for preview env ([3860132](https://github.com/Howard86/howardism/commit/3860132))
- Add isLive to skip line pay app mode for sandbox ([dd28a38](https://github.com/Howard86/howardism/commit/dd28a38))
- Replace vercel env with custom site url ([32b30c9](https://github.com/Howard86/howardism/commit/32b30c9))

### 🔧 Continuous Integration

- Add required string check for vercel build env ([ed2659c](https://github.com/Howard86/howardism/commit/ed2659c))

## 2.8.1 (2023-07-02)

### ♻ Code Refactoring

- Migrate sudoku page to app router ([bde6e59](https://github.com/Howard86/howardism/commit/bde6e59))

### 🎫 Chores

- Bump all dependencies to the latest ([e6c4999](https://github.com/Howard86/howardism/commit/e6c4999))
- Remove and move files under app router structure ([03c9b05](https://github.com/Howard86/howardism/commit/03c9b05))
- Remove unused packages ([45f7159](https://github.com/Howard86/howardism/commit/45f7159))

# [2.8.0](https://github.com/Howard86/howardism/compare/@howardism/blog@2.7.10...@howardism/blog@2.8.0) (2023-06-24)

### ♻ Code Refactoring

- add striping element features ([8236b03](https://github.com/Howard86/howardism/commit/8236b03))
- implement theme toggles ([32c3fbf](https://github.com/Howard86/howardism/commit/32c3fbf))
- migrate mdx to app router with latest next ([8249214](https://github.com/Howard86/howardism/commit/8249214))
- move generating rss from /legacy to app router static routes ([2cfc7d8](https://github.com/Howard86/howardism/commit/2cfc7d8))
- remove tw colour with daisy colors ([8751900](https://github.com/Howard86/howardism/commit/8751900))
- replace custom css with daisy components ([babc6cc](https://github.com/Howard86/howardism/commit/babc6cc))
- update ArticleLayout to navigate between pages ([e863d1d](https://github.com/Howard86/howardism/commit/e863d1d))
- update form container & input style ([ce8857e](https://github.com/Howard86/howardism/commit/ce8857e))
- update FormInput component with atomic components ([e8d955a](https://github.com/Howard86/howardism/commit/e8d955a))
- update shared layout styles ([4b94f44](https://github.com/Howard86/howardism/commit/4b94f44))

### ✨ Features

- set up new theme & css ([e71e046](https://github.com/Howard86/howardism/commit/e71e046))
- **tools**: add design system page with color table & preview ([5b500fe](https://github.com/Howard86/howardism/commit/5b500fe))
- **tools**: add strip html tags page ([26a1a74](https://github.com/Howard86/howardism/commit/26a1a74))
- **tools**: add tool list page for public resources ([2d66d7e](https://github.com/Howard86/howardism/commit/2d66d7e))
- **tools**: enable fetching remote url ([a66974f](https://github.com/Howard86/howardism/commit/a66974f))
- **tools**: update html editor UI & add more features ([36039a7](https://github.com/Howard86/howardism/commit/36039a7))

### 🎫 Chores

- install daisyui ([5818e93](https://github.com/Howard86/howardism/commit/5818e93))
- install monaco packages ([d335006](https://github.com/Howard86/howardism/commit/d335006))
- move all blog under (blog) dir to skip global layout ([37125ae](https://github.com/Howard86/howardism/commit/37125ae))
- replace @next/font with natvie next/font ([1351363](https://github.com/Howard86/howardism/commit/1351363))

### 🐛 Bug Fixes

- use local react component to fix 500 page on mdx pages ([353b895](https://github.com/Howard86/howardism/commit/353b895))

## [2.7.10](https://github.com/Howard86/howardism/compare/@howardism/blog@2.7.9...@howardism/blog@2.7.10) (2023-05-17)

### ♻ Code Refactoring

- add react cache api for db call ([404dbd7](https://github.com/Howard86/howardism/commit/404dbd7))

### 🎫 Chores

- show /profile page for logged-in user ([7cbf418](https://github.com/Howard86/howardism/commit/7cbf418))

### 🐛 Bug Fixes

- replace next-auth deprecated api ([bd28060](https://github.com/Howard86/howardism/commit/bd28060))

## [2.7.9](https://github.com/Howard86/howardism/compare/@howardism/blog@2.7.8...@howardism/blog@2.7.9) (2023-05-16)

### ♻ Code Refactoring

- replace next.js head with meta api ([18dc19f](https://github.com/Howard86/howardism/commit/18dc19f))
- use t3-oss/env-next to refactor env ([4848e59](https://github.com/Howard86/howardism/commit/4848e59))

### 🎫 Chores

- bump all depedencies to the latest ([a0f38f3](https://github.com/Howard86/howardism/commit/a0f38f3))
- bump all depedencies to the latest again ([f1a04c6](https://github.com/Howard86/howardism/commit/f1a04c6))

### 🐛 Bug Fixes

- add missing required env vars in test environment ([dc14531](https://github.com/Howard86/howardism/commit/dc14531))
- update image css ([f34f272](https://github.com/Howard86/howardism/commit/f34f272))

## [2.7.8](https://github.com/Howard86/howardism/compare/@howardism/blog@2.7.7...@howardism/blog@2.7.8) (2023-04-05)

### 🎫 Chores

- bump all depedencies to the latest except typescript ([c7b59db](https://github.com/Howard86/howardism/commit/c7b59db))
- fix incorrect page wrap ([1fbecb2](https://github.com/Howard86/howardism/commit/1fbecb2))

## [2.7.7](https://github.com/Howard86/howardism/compare/@howardism/blog@2.7.6...@howardism/blog@2.7.7) (2023-03-27)

### 🎫 Chores

- **blog**: remove calling cms api when building /legacy page fon prod ([87ed3da](https://github.com/Howard86/howardism/commit/87ed3da))
- remove unused configs & mocks ([c8d3b68](https://github.com/Howard86/howardism/commit/c8d3b68))
- run formater & eslint ([26bd122](https://github.com/Howard86/howardism/commit/26bd122))

## [2.7.6](https://github.com/Howard86/howardism/compare/@howardism/blog@2.7.5...@howardism/blog@2.7.6) (2023-03-27)

### ♻ Code Refactoring

- clean up existed jest configs ([c7660dc](https://github.com/Howard86/howardism/commit/c7660dc))

## [2.7.5](https://github.com/Howard86/howardism/compare/@howardism/blog@2.7.4...@howardism/blog@2.7.5) (2023-03-27)

### 🎫 Chores

- update all projects tsconfig ([49bfcab](https://github.com/Howard86/howardism/commit/49bfcab))

## [2.7.4](https://github.com/Howard86/howardism/compare/@howardism/blog@2.7.3...@howardism/blog@2.7.4) (2023-03-26)

### 🐛 Bug Fixes

- fix eslint errors & jest with react-testing-library ([b0918c2](https://github.com/Howard86/howardism/commit/b0918c2))
- update next/image props with codmod ([ee4c411](https://github.com/Howard86/howardism/commit/ee4c411))

## [2.7.3](https://github.com/Howard86/howardism/compare/@howardism/blog@2.7.2...@howardism/blog@2.7.3) (2023-03-10)

### 🎫 Chores

- fix bugs caused by version changed ([643b28c](https://github.com/Howard86/howardism/commit/643b28c))
- **packages**: bump all dependencies to the latest ([a69c6ba](https://github.com/Howard86/howardism/commit/a69c6ba))

## [2.7.2](https://github.com/Howard86/howardism/compare/@howardism/blog@2.7.1...@howardism/blog@2.7.2) (2023-03-05)

### ♻ Code Refactoring

- make resume experience size field optional ([418bdac](https://github.com/Howard86/howardism/commit/418bdac))

## [2.7.1](https://github.com/Howard86/howardism/compare/@howardism/blog@2.7.0...@howardism/blog@2.7.1) (2023-02-27)

### 📝 Documentation

- add linked list post ([da5b5ff](https://github.com/Howard86/howardism/commit/da5b5ff))

# [2.7.0](https://github.com/Howard86/howardism/compare/@howardism/blog@2.6.1...@howardism/blog@2.7.0) (2023-02-26)

### ♻ Code Refactoring

- **resume**: add markdown support for descriptions ([280b95f](https://github.com/Howard86/howardism/commit/280b95f))

### ✨ Features

- **resume**: add companyUrl, companyDescription in db & form ([1a7fc98](https://github.com/Howard86/howardism/commit/1a7fc98))

### 🎫 Chores

- fix prettier format ([09fcbb0](https://github.com/Howard86/howardism/commit/09fcbb0))

## [2.6.1](https://github.com/Howard86/howardism/compare/@howardism/blog@2.6.0...@howardism/blog@2.6.1) (2023-02-24)

### 🎫 Chores

- **packages**: bump all dependencies to the latest ([5b6fd06](https://github.com/Howard86/howardism/commit/5b6fd06))
- update eslint config and fix eslint issues ([8243c20](https://github.com/Howard86/howardism/commit/8243c20))

# [2.6.0](https://github.com/Howard86/howardism/compare/@howardism/blog@2.5.2...@howardism/blog@2.6.0) (2023-02-18)

### ♻ Code Refactoring

- add form validation with zod & rhk resolver ([1a4e6ca](https://github.com/Howard86/howardism/commit/1a4e6ca))
- add resume schema with updated fields ([3f8eda1](https://github.com/Howard86/howardism/commit/3f8eda1))
- add Tabs to switch form sections ([ab6fb67](https://github.com/Howard86/howardism/commit/ab6fb67))
- extract WorkExperienceSection with fieldarray logic ([b011db1](https://github.com/Howard86/howardism/commit/b011db1))
- integrate forms with live preview ([5c4f6e3](https://github.com/Howard86/howardism/commit/5c4f6e3))
- replace css ResumeTemplate with pdf ([ab43a37](https://github.com/Howard86/howardism/commit/ab43a37))
- replace with TextareaAutoresize ([e626b66](https://github.com/Howard86/howardism/commit/e626b66))
- update ResumeDocument style and array section swap utility ([a72578d](https://github.com/Howard86/howardism/commit/a72578d))
- update ResumeDocument style and replace editor ([0e98e70](https://github.com/Howard86/howardism/commit/0e98e70))
- update ResumeForm with FormArraySection ([bd3907b](https://github.com/Howard86/howardism/commit/bd3907b))

### ✨ Features

- add clone resueme page to start from existed resume ([c38a6ea](https://github.com/Howard86/howardism/commit/c38a6ea))
- add POST /api/resume & add resume logic ([e684351](https://github.com/Howard86/howardism/commit/e684351))
- add PUT /api/resume with new edit page ([b801e81](https://github.com/Howard86/howardism/commit/b801e81))
- add resume form with react-hook-form ([fd2b6d4](https://github.com/Howard86/howardism/commit/fd2b6d4))
- add resume profile database schema ([d467f03](https://github.com/Howard86/howardism/commit/d467f03))
- add resume template page & resume profile page ([66f693e](https://github.com/Howard86/howardism/commit/66f693e))
- add resume template with sections & @next/font ([72645a0](https://github.com/Howard86/howardism/commit/72645a0))
- set up next-auth with profile page ([ee1560d](https://github.com/Howard86/howardism/commit/ee1560d))
- set up prisma with scripts ([a9ba72d](https://github.com/Howard86/howardism/commit/a9ba72d))

### 🎫 Chores

- fix typo on asset url ([27a0f45](https://github.com/Howard86/howardism/commit/27a0f45))
- **packages**: install @react-pdf/renderer ([7bd3514](https://github.com/Howard86/howardism/commit/7bd3514))
- **packages**: install next-auth & prisma adapter ([91e999e](https://github.com/Howard86/howardism/commit/91e999e))
- **packages**: install prisma & prisma client ([5cd62e0](https://github.com/Howard86/howardism/commit/5cd62e0))
- update prisma logger ([b0c76dd](https://github.com/Howard86/howardism/commit/b0c76dd))

### 🐛 Bug Fixes

- add missin postinstall scripts for prisma type ([6dc7329](https://github.com/Howard86/howardism/commit/6dc7329))
- add missing ordering of blocks ([d8e877f](https://github.com/Howard86/howardism/commit/d8e877f))
- fix incorrect id from mapper ([7f22356](https://github.com/Howard86/howardism/commit/7f22356))
- fix incorrect update resume nested logic ([c480922](https://github.com/Howard86/howardism/commit/c480922))

## [2.5.2](https://github.com/Howard86/howardism/compare/@howardism/blog@2.5.1...@howardism/blog@2.5.2) (2023-01-25)

### 📝 Documentation

- add common js datastructure ([837aa2a](https://github.com/Howard86/howardism/commit/837aa2a))

## [2.5.1](https://github.com/Howard86/howardism/compare/@howardism/blog@2.5.0...@howardism/blog@2.5.1) (2023-01-09)

### 🎫 Chores

- update article page texts ([9a6692b](https://github.com/Howard86/howardism/commit/9a6692b))
- update home page work experience ([25f4b1e](https://github.com/Howard86/howardism/commit/25f4b1e))

### 📝 Documentation

- add react monorepo blog post ([19094d3](https://github.com/Howard86/howardism/commit/19094d3))

# [2.5.0](https://github.com/Howard86/howardism/compare/@howardism/blog@2.4.0...@howardism/blog@2.5.0) (2023-01-03)

### ♻ Code Refactoring

- split home page into components ([2812cd4](https://github.com/Howard86/howardism/commit/2812cd4))

### ✨ Features

- add thank-you page with subscription api ([4d07755](https://github.com/Howard86/howardism/commit/4d07755))

### 🎫 Chores

- **packages**: install sendgrid client & next api handler ([4f01696](https://github.com/Howard86/howardism/commit/4f01696))

### 🐛 Bug Fixes

- fix failing to redirect after subscription ([077e54d](https://github.com/Howard86/howardism/commit/077e54d))

# [2.4.0](https://github.com/Howard86/howardism/compare/@howardism/blog@1.4.2...@howardism/blog@2.4.0) (2023-01-02)

### ♻ Code Refactoring

- **about**: update animation with SlideBox ([d66806b](https://github.com/Howard86/howardism/commit/d66806b))
- clean up theme files ([df5a8ec](https://github.com/Howard86/howardism/commit/df5a8ec))
- **home**: update animations for texts & buttons ([0346db7](https://github.com/Howard86/howardism/commit/0346db7))
- move home page to next appDir ([8145c66](https://github.com/Howard86/howardism/commit/8145c66))
- replace react-animated-cursor with framer motion spring ([9f1afa1](https://github.com/Howard86/howardism/commit/9f1afa1))
- replace ScrollToTop wiht ScrollProgress & click ([959404c](https://github.com/Howard86/howardism/commit/959404c))
- **ui**: update AboutSection ([c5f3817](https://github.com/Howard86/howardism/commit/c5f3817))
- **ui**: update ExperienceSection ([d5f96b0](https://github.com/Howard86/howardism/commit/d5f96b0))
- **ui**: update header with rwd & dark mode ([4631434](https://github.com/Howard86/howardism/commit/4631434))
- **ui**: update HomeSection ([df91a78](https://github.com/Howard86/howardism/commit/df91a78))
- **ui**: update other styles with tw ([0614caa](https://github.com/Howard86/howardism/commit/0614caa))
- **ui**: update ResourceSection ([396cda7](https://github.com/Howard86/howardism/commit/396cda7))
- update Header scrollspy with custom hooks ([a0c737c](https://github.com/Howard86/howardism/commit/a0c737c))
- update parallax background with next/image ([42fc8e9](https://github.com/Howard86/howardism/commit/42fc8e9))
- update social links on home page ([df6879a](https://github.com/Howard86/howardism/commit/df6879a))

### ⚡ Performance Improvements

- improve bundle size with LazyMotion & next/dynamic ([f99a0af](https://github.com/Howard86/howardism/commit/f99a0af))
- update next config with faster build ([520ffde](https://github.com/Howard86/howardism/commit/520ffde))

### ✨ Features

- add AboutSection ([410545d](https://github.com/Howard86/howardism/commit/410545d))
- add Experience section ([ccc93db](https://github.com/Howard86/howardism/commit/ccc93db))
- add HomeSection ([df9fdb6](https://github.com/Howard86/howardism/commit/df9fdb6))
- integrate with local cms ([ce34f82](https://github.com/Howard86/howardism/commit/ce34f82))
- integrate with local mdx & add article page ([9b0bd9e](https://github.com/Howard86/howardism/commit/9b0bd9e))
- **layout**: update layout with header ([bd23c74](https://github.com/Howard86/howardism/commit/bd23c74))
- replace with tailwindui template ([abec147](https://github.com/Howard86/howardism/commit/abec147))
- **resource**: add ResourceSection ([5286871](https://github.com/Howard86/howardism/commit/5286871))
- set up graphql codegen with updated env ([46af8b7](https://github.com/Howard86/howardism/commit/46af8b7))
- set up mdx support with first blog article ([c2ad598](https://github.com/Howard86/howardism/commit/c2ad598))
- set up rss feed generation ([725f0d5](https://github.com/Howard86/howardism/commit/725f0d5))
- set up tailwincss theme & dev tools ([717aab5](https://github.com/Howard86/howardism/commit/717aab5))
- update home page contents ([9e57334](https://github.com/Howard86/howardism/commit/9e57334))

### 🎫 Chores

- add npm scripts clean ([3c5c751](https://github.com/Howard86/howardism/commit/3c5c751))
- add priority for home page next/image for FCP ([1088440](https://github.com/Howard86/howardism/commit/1088440))
- install aos, lodash.throttle, react-animated-cursor, react-scrollspy ([36f00ca](https://github.com/Howard86/howardism/commit/36f00ca))
- install react-parallax react-typed ([de3eebc](https://github.com/Howard86/howardism/commit/de3eebc))
- **packages**: bump all dependencies to the latest ([1a5379d](https://github.com/Howard86/howardism/commit/1a5379d))
- **packages**: install feed & react-dom types ([af0964e](https://github.com/Howard86/howardism/commit/af0964e))
- **packages**: install graphql, graphql-request & related codegen pacakges ([5888177](https://github.com/Howard86/howardism/commit/5888177))
- **packages**: install markdown related packages for mdx ([5e34d96](https://github.com/Howard86/howardism/commit/5e34d96))
- **packages**: install react-markdown with peer deps ([da16c0f](https://github.com/Howard86/howardism/commit/da16c0f))
- **packages**: install tailwindcss relateds packages ([c0a7f0c](https://github.com/Howard86/howardism/commit/c0a7f0c))
- **packages**: install ts-essentials for utility types ([45df897](https://github.com/Howard86/howardism/commit/45df897))
- **packages**: remove aos, react-parallax & react-scrollspy" ([7132d2a](https://github.com/Howard86/howardism/commit/7132d2a))
- **packages**: remove react-animated-cursor ([b070c2b](https://github.com/Howard86/howardism/commit/b070c2b))
- **packages**: remove unused packages with config ([6ba0e97](https://github.com/Howard86/howardism/commit/6ba0e97))
- polyfill focus-visible ([0245868](https://github.com/Howard86/howardism/commit/0245868))
- remove framer motion lazyLoad features ([60b04cf](https://github.com/Howard86/howardism/commit/60b04cf))
- remove unused components ([29a040b](https://github.com/Howard86/howardism/commit/29a040b))
- remove unused files ([a159a54](https://github.com/Howard86/howardism/commit/a159a54))
- remove unused pages ([55eb9cf](https://github.com/Howard86/howardism/commit/55eb9cf))
- temporary hide markdown introduction ([6345971](https://github.com/Howard86/howardism/commit/6345971))
- update eslint & prettier config ([b718310](https://github.com/Howard86/howardism/commit/b718310))
- update head scipts ([16c07c6](https://github.com/Howard86/howardism/commit/16c07c6))
- update layout margins & paddings ([043f6db](https://github.com/Howard86/howardism/commit/043f6db))
- update logo, favicons & sitemap ([8ec72fc](https://github.com/Howard86/howardism/commit/8ec72fc))

### 🐛 Bug Fixes

- fix incorrect strategy for legacy theme changes ([e8c90ea](https://github.com/Howard86/howardism/commit/e8c90ea))
- **ui**: fix missing overflow causing inconsistent ui ([150120c](https://github.com/Howard86/howardism/commit/150120c))
- update incorrect seciont ids & header ([bae2618](https://github.com/Howard86/howardism/commit/bae2618))

### 📝 Documentation

- add tags ([4697fdb](https://github.com/Howard86/howardism/commit/4697fdb))
- add tags ([87e70e5](https://github.com/Howard86/howardism/commit/87e70e5))
- add tags ([51a1450](https://github.com/Howard86/howardism/commit/51a1450))
- add tags & changelog ([6fd2f33](https://github.com/Howard86/howardism/commit/6fd2f33))
- initialise changelog in each package instead ([c732d3b](https://github.com/Howard86/howardism/commit/c732d3b))

### 🔧 Continuous Integration

- fix failing to deploy on vercel ([1b4d582](https://github.com/Howard86/howardism/commit/1b4d582))

# [2.3.0](https://github.com/Howard86/howardism/compare/@howardism/blog@1.4.2...@howardism/blog@2.3.0) (2023-01-01)

### ♻ Code Refactoring

- **about**: update animation with SlideBox ([d66806b](https://github.com/Howard86/howardism/commit/d66806b))
- clean up theme files ([df5a8ec](https://github.com/Howard86/howardism/commit/df5a8ec))
- **home**: update animations for texts & buttons ([0346db7](https://github.com/Howard86/howardism/commit/0346db7))
- move home page to next appDir ([8145c66](https://github.com/Howard86/howardism/commit/8145c66))
- replace react-animated-cursor with framer motion spring ([9f1afa1](https://github.com/Howard86/howardism/commit/9f1afa1))
- replace ScrollToTop wiht ScrollProgress & click ([959404c](https://github.com/Howard86/howardism/commit/959404c))
- **ui**: update AboutSection ([c5f3817](https://github.com/Howard86/howardism/commit/c5f3817))
- **ui**: update ExperienceSection ([d5f96b0](https://github.com/Howard86/howardism/commit/d5f96b0))
- **ui**: update header with rwd & dark mode ([4631434](https://github.com/Howard86/howardism/commit/4631434))
- **ui**: update HomeSection ([df91a78](https://github.com/Howard86/howardism/commit/df91a78))
- **ui**: update other styles with tw ([0614caa](https://github.com/Howard86/howardism/commit/0614caa))
- **ui**: update ResourceSection ([396cda7](https://github.com/Howard86/howardism/commit/396cda7))
- update Header scrollspy with custom hooks ([a0c737c](https://github.com/Howard86/howardism/commit/a0c737c))
- update parallax background with next/image ([42fc8e9](https://github.com/Howard86/howardism/commit/42fc8e9))

### ⚡ Performance Improvements

- improve bundle size with LazyMotion & next/dynamic ([f99a0af](https://github.com/Howard86/howardism/commit/f99a0af))
- update next config with faster build ([520ffde](https://github.com/Howard86/howardism/commit/520ffde))

### ✨ Features

- add AboutSection ([410545d](https://github.com/Howard86/howardism/commit/410545d))
- add Experience section ([ccc93db](https://github.com/Howard86/howardism/commit/ccc93db))
- add HomeSection ([df9fdb6](https://github.com/Howard86/howardism/commit/df9fdb6))
- integrate with local cms ([ce34f82](https://github.com/Howard86/howardism/commit/ce34f82))
- integrate with local mdx & add article page ([9b0bd9e](https://github.com/Howard86/howardism/commit/9b0bd9e))
- **layout**: update layout with header ([bd23c74](https://github.com/Howard86/howardism/commit/bd23c74))
- replace with tailwindui template ([abec147](https://github.com/Howard86/howardism/commit/abec147))
- **resource**: add ResourceSection ([5286871](https://github.com/Howard86/howardism/commit/5286871))
- set up graphql codegen with updated env ([46af8b7](https://github.com/Howard86/howardism/commit/46af8b7))
- set up mdx support with first blog article ([c2ad598](https://github.com/Howard86/howardism/commit/c2ad598))
- set up tailwincss theme & dev tools ([717aab5](https://github.com/Howard86/howardism/commit/717aab5))
- update home page contents ([9e57334](https://github.com/Howard86/howardism/commit/9e57334))

### 🎫 Chores

- add npm scripts clean ([3c5c751](https://github.com/Howard86/howardism/commit/3c5c751))
- add priority for home page next/image for FCP ([1088440](https://github.com/Howard86/howardism/commit/1088440))
- install aos, lodash.throttle, react-animated-cursor, react-scrollspy ([36f00ca](https://github.com/Howard86/howardism/commit/36f00ca))
- install react-parallax react-typed ([de3eebc](https://github.com/Howard86/howardism/commit/de3eebc))
- **packages**: bump all dependencies to the latest ([1a5379d](https://github.com/Howard86/howardism/commit/1a5379d))
- **packages**: install graphql, graphql-request & related codegen pacakges ([5888177](https://github.com/Howard86/howardism/commit/5888177))
- **packages**: install markdown related packages for mdx ([5e34d96](https://github.com/Howard86/howardism/commit/5e34d96))
- **packages**: install react-markdown with peer deps ([da16c0f](https://github.com/Howard86/howardism/commit/da16c0f))
- **packages**: install tailwindcss relateds packages ([c0a7f0c](https://github.com/Howard86/howardism/commit/c0a7f0c))
- **packages**: install ts-essentials for utility types ([45df897](https://github.com/Howard86/howardism/commit/45df897))
- **packages**: remove aos, react-parallax & react-scrollspy" ([7132d2a](https://github.com/Howard86/howardism/commit/7132d2a))
- **packages**: remove react-animated-cursor ([b070c2b](https://github.com/Howard86/howardism/commit/b070c2b))
- **packages**: remove unused packages with config ([6ba0e97](https://github.com/Howard86/howardism/commit/6ba0e97))
- polyfill focus-visible ([0245868](https://github.com/Howard86/howardism/commit/0245868))
- remove framer motion lazyLoad features ([60b04cf](https://github.com/Howard86/howardism/commit/60b04cf))
- remove unused components ([29a040b](https://github.com/Howard86/howardism/commit/29a040b))
- remove unused files ([a159a54](https://github.com/Howard86/howardism/commit/a159a54))
- remove unused pages ([55eb9cf](https://github.com/Howard86/howardism/commit/55eb9cf))
- temporary hide markdown introduction ([6345971](https://github.com/Howard86/howardism/commit/6345971))
- update eslint & prettier config ([b718310](https://github.com/Howard86/howardism/commit/b718310))
- update layout margins & paddings ([043f6db](https://github.com/Howard86/howardism/commit/043f6db))
- update logo, favicons & sitemap ([8ec72fc](https://github.com/Howard86/howardism/commit/8ec72fc))

### 🐛 Bug Fixes

- **ui**: fix missing overflow causing inconsistent ui ([150120c](https://github.com/Howard86/howardism/commit/150120c))
- update incorrect seciont ids & header ([bae2618](https://github.com/Howard86/howardism/commit/bae2618))

### 📝 Documentation

- add tags ([4697fdb](https://github.com/Howard86/howardism/commit/4697fdb))
- add tags ([87e70e5](https://github.com/Howard86/howardism/commit/87e70e5))
- add tags ([51a1450](https://github.com/Howard86/howardism/commit/51a1450))
- initialise changelog in each package instead ([c732d3b](https://github.com/Howard86/howardism/commit/c732d3b))

### 🔧 Continuous Integration

- fix failing to deploy on vercel ([1b4d582](https://github.com/Howard86/howardism/commit/1b4d582))

# [2.2.0](https://github.com/Howard86/howardism/compare/v1.0.24...v2.2.0) (2023-01-01)

### ♻ Code Refactoring

- move home page to next appDir ([8145c66](https://github.com/Howard86/howardism/commit/8145c66))
- replace gitmojig-changelog with gitmoji-config for lerna ([ff160d8](https://github.com/Howard86/howardism/commit/ff160d8))
- **ui**: update AboutSection ([c5f3817](https://github.com/Howard86/howardism/commit/c5f3817))
- **ui**: update ExperienceSection ([d5f96b0](https://github.com/Howard86/howardism/commit/d5f96b0))
- **ui**: update header with rwd & dark mode ([4631434](https://github.com/Howard86/howardism/commit/4631434))
- **ui**: update HomeSection ([df91a78](https://github.com/Howard86/howardism/commit/df91a78))
- **ui**: update other styles with tw ([0614caa](https://github.com/Howard86/howardism/commit/0614caa))
- **ui**: update ResourceSection ([396cda7](https://github.com/Howard86/howardism/commit/396cda7))

### ⚡ Performance Improvements

- improve bundle size with LazyMotion & next/dynamic ([f99a0af](https://github.com/Howard86/howardism/commit/f99a0af))

### ✨ Features

- integrate with local mdx & add article page ([9b0bd9e](https://github.com/Howard86/howardism/commit/9b0bd9e))
- replace with tailwindui template ([abec147](https://github.com/Howard86/howardism/commit/abec147))
- set up mdx support with first blog article ([c2ad598](https://github.com/Howard86/howardism/commit/c2ad598))
- set up tailwincss theme & dev tools ([717aab5](https://github.com/Howard86/howardism/commit/717aab5))
- update home page contents ([9e57334](https://github.com/Howard86/howardism/commit/9e57334))

### 🎫 Chores

- add priority for home page next/image for FCP ([1088440](https://github.com/Howard86/howardism/commit/1088440))
- **packages**: bump all dependencies to the latest ([1a5379d](https://github.com/Howard86/howardism/commit/1a5379d))
- **packages**: install markdown related packages for mdx ([5e34d96](https://github.com/Howard86/howardism/commit/5e34d96))
- **packages**: install tailwindcss relateds packages ([c0a7f0c](https://github.com/Howard86/howardism/commit/c0a7f0c))
- **packages**: remove unused packages with config ([6ba0e97](https://github.com/Howard86/howardism/commit/6ba0e97))
- polyfill focus-visible ([0245868](https://github.com/Howard86/howardism/commit/0245868))
- remove framer motion lazyLoad features ([60b04cf](https://github.com/Howard86/howardism/commit/60b04cf))
- remove unused files ([a159a54](https://github.com/Howard86/howardism/commit/a159a54))
- update eslint & prettier config ([b718310](https://github.com/Howard86/howardism/commit/b718310))

### 🐛 Bug Fixes

- **ui**: fix missing overflow causing inconsistent ui ([150120c](https://github.com/Howard86/howardism/commit/150120c))

### 📝 Documentation

- update CHANGELOG ([dc3f987](https://github.com/Howard86/howardism/commit/dc3f987))

## [1.0.24](https://github.com/Howard86/howardism/compare/v1.0.23...v1.0.24) (2022-10-25)

### ✨ Features

- integrate with local cms ([ce34f82](https://github.com/Howard86/howardism/commit/ce34f82))
- set up graphql codegen with updated env ([46af8b7](https://github.com/Howard86/howardism/commit/46af8b7))

### 🎫 Chores

- **packages**: install graphql, graphql-request & related codegen pacakges ([5888177](https://github.com/Howard86/howardism/commit/5888177))
- **packages**: install react-markdown with peer deps ([da16c0f](https://github.com/Howard86/howardism/commit/da16c0f))
- **packages**: install ts-essentials for utility types ([45df897](https://github.com/Howard86/howardism/commit/45df897))
- temporary hide markdown introduction ([6345971](https://github.com/Howard86/howardism/commit/6345971))

### 📝 Documentation

- add tags ([4697fdb](https://github.com/Howard86/howardism/commit/4697fdb))
- update CHANGELOG ([7697f1a](https://github.com/Howard86/howardism/commit/7697f1a))

## [1.0.23](https://github.com/Howard86/howardism/compare/v1.0.22...v1.0.23) (2022-10-13)

### ♻ Code Refactoring

- **about**: update animation with SlideBox ([d66806b](https://github.com/Howard86/howardism/commit/d66806b))
- clean up theme files ([df5a8ec](https://github.com/Howard86/howardism/commit/df5a8ec))
- **home**: update animations for texts & buttons ([0346db7](https://github.com/Howard86/howardism/commit/0346db7))
- replace react-animated-cursor with framer motion spring ([9f1afa1](https://github.com/Howard86/howardism/commit/9f1afa1))
- replace ScrollToTop wiht ScrollProgress & click ([959404c](https://github.com/Howard86/howardism/commit/959404c))
- update Header scrollspy with custom hooks ([a0c737c](https://github.com/Howard86/howardism/commit/a0c737c))
- update parallax background with next/image ([42fc8e9](https://github.com/Howard86/howardism/commit/42fc8e9))

### ⚡ Performance Improvements

- update next config with faster build ([520ffde](https://github.com/Howard86/howardism/commit/520ffde))

### ✨ Features

- add AboutSection ([410545d](https://github.com/Howard86/howardism/commit/410545d))
- add Experience section ([ccc93db](https://github.com/Howard86/howardism/commit/ccc93db))
- add HomeSection ([df9fdb6](https://github.com/Howard86/howardism/commit/df9fdb6))
- **layout**: update layout with header ([bd23c74](https://github.com/Howard86/howardism/commit/bd23c74))
- **resource**: add ResourceSection ([5286871](https://github.com/Howard86/howardism/commit/5286871))

### 🎫 Chores

- install aos, lodash.throttle, react-animated-cursor, react-scrollspy ([36f00ca](https://github.com/Howard86/howardism/commit/36f00ca))
- install react-parallax react-typed ([de3eebc](https://github.com/Howard86/howardism/commit/de3eebc))
- **packages**: remove aos, react-parallax & react-scrollspy" ([7132d2a](https://github.com/Howard86/howardism/commit/7132d2a))
- **packages**: remove react-animated-cursor ([b070c2b](https://github.com/Howard86/howardism/commit/b070c2b))
- remove unused components ([29a040b](https://github.com/Howard86/howardism/commit/29a040b))
- remove unused pages ([55eb9cf](https://github.com/Howard86/howardism/commit/55eb9cf))
- update layout margins & paddings ([043f6db](https://github.com/Howard86/howardism/commit/043f6db))
- update logo, favicons & sitemap ([8ec72fc](https://github.com/Howard86/howardism/commit/8ec72fc))

### 🐛 Bug Fixes

- update incorrect seciont ids & header ([bae2618](https://github.com/Howard86/howardism/commit/bae2618))

### 📝 Documentation

- add tags ([87e70e5](https://github.com/Howard86/howardism/commit/87e70e5))
- add tags ([51a1450](https://github.com/Howard86/howardism/commit/51a1450))
- update CHANGELOG ([cf1b438](https://github.com/Howard86/howardism/commit/cf1b438))
- update CHANGELOG ([effb417](https://github.com/Howard86/howardism/commit/effb417))

## [1.0.22](https://github.com/Howard86/howardism/compare/v1.0.21...v1.0.22) (2022-09-25)

### ♻ Code Refactoring

- **blog**: update based on deps changes ([5155dfd](https://github.com/Howard86/howardism/commit/5155dfd))
- **github**: update based on deps changes ([14c64c1](https://github.com/Howard86/howardism/commit/14c64c1))
- **minecraft**: update based on deps changes ([5ad1a27](https://github.com/Howard86/howardism/commit/5ad1a27))
- **recipe**: update based on deps changes ([c9b11f6](https://github.com/Howard86/howardism/commit/c9b11f6))
- **template**: update based on deps changes ([592603e](https://github.com/Howard86/howardism/commit/592603e))
- update based on new eslint config ([94f090a](https://github.com/Howard86/howardism/commit/94f090a))

### ✅ Tests

- fix jest config & mocks with next/jest ([f20b3ac](https://github.com/Howard86/howardism/commit/f20b3ac))

### ✨ Features

- add peer & update all dependencies ([602f8b5](https://github.com/Howard86/howardism/commit/602f8b5))
- improve build time with nx ([9ceb543](https://github.com/Howard86/howardism/commit/9ceb543))
- migrate circleci to github actions for pnpm support ([b0c5f92](https://github.com/Howard86/howardism/commit/b0c5f92))
- migrate to pnpm ([3d75f57](https://github.com/Howard86/howardism/commit/3d75f57))

### 🎫 Chores

- install gitmoji changelog ([d892d2e](https://github.com/Howard86/howardism/commit/d892d2e))
- install more eslint rules ([537e4fb](https://github.com/Howard86/howardism/commit/537e4fb))
- install nextjs bundle analyzer ([c36f2dc](https://github.com/Howard86/howardism/commit/c36f2dc))
- install nx ([b3a65cb](https://github.com/Howard86/howardism/commit/b3a65cb))
- support analyze script for apps ([4e7c673](https://github.com/Howard86/howardism/commit/4e7c673))
- update root script ([94ad98c](https://github.com/Howard86/howardism/commit/94ad98c))

### 🐛 Bug Fixes

- remove over use of memo ([7ec2ad0](https://github.com/Howard86/howardism/commit/7ec2ad0))

### 📝 Documentation

- add tags ([faf18ea](https://github.com/Howard86/howardism/commit/faf18ea))
- update CHANGELOG ([40b5ecb](https://github.com/Howard86/howardism/commit/40b5ecb))

### 🔧 Continuous Integration

- update circleci with pnpm config ([908e130](https://github.com/Howard86/howardism/commit/908e130))

## [1.0.21](https://github.com/Howard86/howardism/compare/v1.0.20...v1.0.21) (2021-08-28)

### 🐛 Bug Fixes

- **service**: update ITERATION_MAX_COUNT for generating Sudoku ([621dc83](https://github.com/Howard86/howardism/commit/621dc83))

### 📝 Documentation

- add tags ([a3001cb](https://github.com/Howard86/howardism/commit/a3001cb))
- bump version to 1.0.21 ([507936b](https://github.com/Howard86/howardism/commit/507936b))
- update CHANGELOG ([0107382](https://github.com/Howard86/howardism/commit/0107382))

## [1.0.20](https://github.com/Howard86/howardism/compare/v1.0.19...v1.0.20) (2021-08-28)

### ♻ Code Refactoring

- **api**: update sudoku generate api ([6c059c7](https://github.com/Howard86/howardism/commit/6c059c7))
- replace usage of theme ([cd0c01c](https://github.com/Howard86/howardism/commit/cd0c01c))

### ✨ Features

- **hook**: add useSudoku with useReducer ([4d2dee8](https://github.com/Howard86/howardism/commit/4d2dee8))
- **ui**: add difficulty menu to generate sudoku ([5a72156](https://github.com/Howard86/howardism/commit/5a72156))
- **ui**: add skeloton SudokuPage ([01d9f83](https://github.com/Howard86/howardism/commit/01d9f83))

### 🎫 Chores

- **assets**: add sudoku related image ([51da256](https://github.com/Howard86/howardism/commit/51da256))
- **deps**: upgrade all dependencies by ncu ([4972710](https://github.com/Howard86/howardism/commit/4972710))
- **style**: copy theme from share package ([2b9b9e7](https://github.com/Howard86/howardism/commit/2b9b9e7))
- **type**: add next/image global type ([834bc0f](https://github.com/Howard86/howardism/commit/834bc0f))
- update tsconfig for module resolution ([f3af857](https://github.com/Howard86/howardism/commit/f3af857))

### 💄 Styles

- **ui**: update sudoku styles ([c60f69e](https://github.com/Howard86/howardism/commit/c60f69e))

### 📝 Documentation

- add tags ([0757a93](https://github.com/Howard86/howardism/commit/0757a93))
- bump version to 1.0.20 ([5291b7a](https://github.com/Howard86/howardism/commit/5291b7a))
- update CHANGELOG ([02b6872](https://github.com/Howard86/howardism/commit/02b6872))

## [1.0.19](https://github.com/Howard86/howardism/compare/v1.0.18...v1.0.19) (2021-07-24)

### ♻ Code Refactoring

- update util to generate day tag ([ef89244](https://github.com/Howard86/howardism/commit/ef89244))

### ✨ Features

- update texture for zh_CN ([2f0bf64](https://github.com/Howard86/howardism/commit/2f0bf64))

### 🎫 Chores

- **deps**: uninstall react-stickynode ([d2cac5a](https://github.com/Howard86/howardism/commit/d2cac5a))

### 🐛 Bug Fixes

- remove dynamic sticky header ([307ced2](https://github.com/Howard86/howardism/commit/307ced2))

### 💄 Styles

- update Home page style ([693ac81](https://github.com/Howard86/howardism/commit/693ac81))
- update Recipe page styling ([31a99c7](https://github.com/Howard86/howardism/commit/31a99c7))

### 📝 Documentation

- add tags ([50540a6](https://github.com/Howard86/howardism/commit/50540a6))
- bump version to 1.0.19 ([d5c6c61](https://github.com/Howard86/howardism/commit/d5c6c61))
- update CHANGELOG ([31ef8ce](https://github.com/Howard86/howardism/commit/31ef8ce))

## [1.0.18](https://github.com/Howard86/howardism/compare/v1.0.17...v1.0.18) (2021-07-18)

### ♻ Code Refactoring

- replace Sudoku.zeroCount with Sudoku.difficulty ([bdf638b](https://github.com/Howard86/howardism/commit/bdf638b))
- update ARRAY_FROM_ONE_TO_NINE to be static ([a674339](https://github.com/Howard86/howardism/commit/a674339))
- update Sudoku modal ([f398fdd](https://github.com/Howard86/howardism/commit/f398fdd))
- updtate sudoku internal helper variables ([42b8359](https://github.com/Howard86/howardism/commit/42b8359))

### ✨ Features

- add /api/sudoku api endpoints ([c20c697](https://github.com/Howard86/howardism/commit/c20c697))
- add array util sampleSize with unit test ([9e8ead3](https://github.com/Howard86/howardism/commit/9e8ead3))
- add generateBaseOnDifficulty ([89ed02b](https://github.com/Howard86/howardism/commit/89ed02b))
- add generateFullBoard refactoring iterate algorithm ([e582fb1](https://github.com/Howard86/howardism/commit/e582fb1))
- add getNumber & serNumber helper ([2212341](https://github.com/Howard86/howardism/commit/2212341))
- add getSudokuStatus to verify solution count ([68cd883](https://github.com/Howard86/howardism/commit/68cd883))
- add implementation of generate ([7cbc9a5](https://github.com/Howard86/howardism/commit/7cbc9a5))
- add service to solve sudoku ([712932f](https://github.com/Howard86/howardism/commit/712932f))
- add Sudoku.from to generate from code ([1b1152a](https://github.com/Howard86/howardism/commit/1b1152a))
- **config**: set up jest for blog ([81a302b](https://github.com/Howard86/howardism/commit/81a302b))
- **lib**: add Sudoku model ([cb3c6bd](https://github.com/Howard86/howardism/commit/cb3c6bd))
- update GET & POST /api/sudoku ([5152547](https://github.com/Howard86/howardism/commit/5152547))

### 🎫 Chores

- **deps**: install jest, babel jest & test utils ([f735194](https://github.com/Howard86/howardism/commit/f735194))
- fix api response typo ([d3439c0](https://github.com/Howard86/howardism/commit/d3439c0))
- remove sudoku iterate log ([3c31242](https://github.com/Howard86/howardism/commit/3c31242))
- **test**: add unit test for Sudoku model ([4c960e0](https://github.com/Howard86/howardism/commit/4c960e0))
- **type**: add GET & POST /api/sudoku types ([3cee3ff](https://github.com/Howard86/howardism/commit/3cee3ff))
- update typos on jsdoc ([a36ad0f](https://github.com/Howard86/howardism/commit/a36ad0f))

### 🐛 Bug Fixes

- invalid conditional check on /api/sudoku ([8a107e9](https://github.com/Howard86/howardism/commit/8a107e9))

### 📝 Documentation

- add tags ([b0c08a6](https://github.com/Howard86/howardism/commit/b0c08a6))
- bump version to 1.0.18 ([4abd948](https://github.com/Howard86/howardism/commit/4abd948))
- update CHANGELOG ([d08474a](https://github.com/Howard86/howardism/commit/d08474a))

## [1.0.17](https://github.com/Howard86/howardism/compare/v1.0.16...v1.0.17) (2021-07-17)

### ♻ Code Refactoring

- copy existed common components ([707b115](https://github.com/Howard86/howardism/commit/707b115))

### ✨ Features

- add Footer in Layout ([2c53e60](https://github.com/Howard86/howardism/commit/2c53e60))
- add package components-common ([3e46176](https://github.com/Howard86/howardism/commit/3e46176))
- create Home template ([c5ea61a](https://github.com/Howard86/howardism/commit/c5ea61a))
- create SocialIconLink ([4cfd811](https://github.com/Howard86/howardism/commit/4cfd811))
- **server**: update /blug/[slug] generation via slug instead of id ([3aae237](https://github.com/Howard86/howardism/commit/3aae237))

### 🎫 Chores

- **asset**: add default post image from unsplash ([95538a5](https://github.com/Howard86/howardism/commit/95538a5))
- **deps**: install dayjs ([3605c91](https://github.com/Howard86/howardism/commit/3605c91))
- **deps**: install next-tranpile-moudles in root ([b7af4d5](https://github.com/Howard86/howardism/commit/b7af4d5))
- set up next-transpile-modules in blog ([0f723e3](https://github.com/Howard86/howardism/commit/0f723e3))
- update cms schema ([fdbc5c5](https://github.com/Howard86/howardism/commit/fdbc5c5))

### 💄 Styles

- remove SideBar in Layout ([e9539e0](https://github.com/Howard86/howardism/commit/e9539e0))
- update HomePage style ([b7c5d03](https://github.com/Howard86/howardism/commit/b7c5d03))
- update PostCard styles ([44f85c6](https://github.com/Howard86/howardism/commit/44f85c6))

### 📝 Documentation

- add tags ([0a30933](https://github.com/Howard86/howardism/commit/0a30933))
- bump version to 1.0.17 ([7a3226f](https://github.com/Howard86/howardism/commit/7a3226f))
- update CHANGELOG ([0e243bb](https://github.com/Howard86/howardism/commit/0e243bb))

## [1.0.16](https://github.com/Howard86/howardism/compare/v1.0.15...v1.0.16) (2021-06-27)

### 🐛 Bug Fixes

- update commit rules to bypass gitmoji commit ([c9f06b4](https://github.com/Howard86/howardism/commit/c9f06b4))

### 📝 Documentation

- add tags ([6ab1cdb](https://github.com/Howard86/howardism/commit/6ab1cdb))
- bump version to 1.0.16 ([8e04944](https://github.com/Howard86/howardism/commit/8e04944))
- update CHANGELOG ([bd2c76b](https://github.com/Howard86/howardism/commit/bd2c76b))

## [1.0.15](https://github.com/Howard86/howardism/compare/v1.0.14...v1.0.15) (2021-06-27)

### ⏪ Reverts

- ":memo: chore: update CHANGELOG" ([277a61b](https://github.com/Howard86/howardism/commit/277a61b))

### 🎫 Chores

- remove gitmoji-changelog genric presets ([201f228](https://github.com/Howard86/howardism/commit/201f228))
- update CHANGELOG ([b852696](https://github.com/Howard86/howardism/commit/b852696))
- update version & doc commit message ([d61c443](https://github.com/Howard86/howardism/commit/d61c443))

### 📝 Documentation

- bump version to 1.0.15 ([4bd6b02](https://github.com/Howard86/howardism/commit/4bd6b02))

## [1.0.14](https://github.com/Howard86/howardism/compare/v1.0.13...v1.0.14) (2021-06-26)

### ♻ Code Refactoring

- update image usage with next static import ([dc92f0b](https://github.com/Howard86/howardism/commit/dc92f0b))

### ✨ Features

- **server**: update getStaticProps revalidate logic ([e45ca1f](https://github.com/Howard86/howardism/commit/e45ca1f))
- **ui**: add Footer ([318023f](https://github.com/Howard86/howardism/commit/318023f))
- **ui**: add Layout ([f0a9d40](https://github.com/Howard86/howardism/commit/f0a9d40))
- **ui**: add Logo & Horizontal Logo components ([d8d09ea](https://github.com/Howard86/howardism/commit/d8d09ea))
- **ui**: add MobileDrawer ([52dd532](https://github.com/Howard86/howardism/commit/52dd532))
- **ui**: add new NavBar ([ffd9f2f](https://github.com/Howard86/howardism/commit/ffd9f2f))
- **ui**: update Home page ([06d8674](https://github.com/Howard86/howardism/commit/06d8674))

### 🎫 Chores

- add borderColor to checkbox ([af503d2](https://github.com/Howard86/howardism/commit/af503d2))
- add tags ([bf43fd6](https://github.com/Howard86/howardism/commit/bf43fd6))
- adjust UI ([ea38441](https://github.com/Howard86/howardism/commit/ea38441))
- **assets**: update logo & favicon ([2939f79](https://github.com/Howard86/howardism/commit/2939f79))
- bump version ([1f32738](https://github.com/Howard86/howardism/commit/1f32738))
- **deps**: install next-router-mock ([3e1221d](https://github.com/Howard86/howardism/commit/3e1221d))
- **deps**: install react-stickynode ([f3cf972](https://github.com/Howard86/howardism/commit/f3cf972))
- **deps**: upgrade chakra-ui ([66d58f9](https://github.com/Howard86/howardism/commit/66d58f9))
- update CHANGELOG ([d877491](https://github.com/Howard86/howardism/commit/d877491))
- update jest config & mock image & router ([c3c037f](https://github.com/Howard86/howardism/commit/c3c037f))

### 🐛 Bug Fixes

- showing recipes filtered by image ([fdfb525](https://github.com/Howard86/howardism/commit/fdfb525))
- update getRecipes array order ([5740ddd](https://github.com/Howard86/howardism/commit/5740ddd))

### 💄 Styles

- adjust UI styling ([715f237](https://github.com/Howard86/howardism/commit/715f237))

## [1.0.13](https://github.com/Howard86/howardism/compare/v1.0.12...v1.0.13) (2021-06-20)

### ♻ Code Refactoring

- create root tsconfig ([20e255e](https://github.com/Howard86/howardism/commit/20e255e))

### ✨ Features

- set up commitlint ([e9a609b](https://github.com/Howard86/howardism/commit/e9a609b))
- upate eslint config ([23a4e3e](https://github.com/Howard86/howardism/commit/23a4e3e))

### 🎫 Chores

- add tags ([aebb638](https://github.com/Howard86/howardism/commit/aebb638))
- bump version ([1ff7831](https://github.com/Howard86/howardism/commit/1ff7831))
- ignore tsbuild info ([ce99840](https://github.com/Howard86/howardism/commit/ce99840))
- install eslint import sort plugin ([248dff3](https://github.com/Howard86/howardism/commit/248dff3))
- update codes based on prettier ([b441418](https://github.com/Howard86/howardism/commit/b441418))
- update root prettier script ([fbe6d2a](https://github.com/Howard86/howardism/commit/fbe6d2a))

### 🐛 Bug Fixes

- remove newly typescript error ([d9212e5](https://github.com/Howard86/howardism/commit/d9212e5))
- run eslint --fix on all ([61e5798](https://github.com/Howard86/howardism/commit/61e5798))
- update auto-generated commit messgaes ([58c3d4e](https://github.com/Howard86/howardism/commit/58c3d4e))

## [1.0.12](https://github.com/Howard86/howardism/compare/v1.0.11...v1.0.12) (2021-06-19)

## [1.0.11](https://github.com/Howard86/howardism/compare/v1.0.10...v1.0.11) (2021-05-31)

## [1.0.10](https://github.com/Howard86/howardism/compare/v1.0.9...v1.0.10) (2021-05-31)

## [1.0.9](https://github.com/Howard86/howardism/compare/v1.0.8...v1.0.9) (2021-05-03)

## [1.0.8](https://github.com/Howard86/howardism/compare/v1.0.7...v1.0.8) (2021-04-22)

## [1.0.7](https://github.com/Howard86/howardism/compare/v1.0.6...v1.0.7) (2021-04-20)

## [1.0.6](https://github.com/Howard86/howardism/compare/v1.0.5...v1.0.6) (2021-04-10)

## [1.0.5](https://github.com/Howard86/howardism/compare/v1.0.4...v1.0.5) (2021-04-05)

## [1.0.4](https://github.com/Howard86/howardism/compare/v1.0.3...v1.0.4) (2021-04-05)

## [1.0.3](https://github.com/Howard86/howardism/compare/v1.0.2...v1.0.3) (2021-04-04)

## [1.0.2](https://github.com/Howard86/howardism/compare/v1.0.1...v1.0.2) (2021-03-21)

## [1.0.1](https://github.com/Howard86/howardism/compare/v1.0.0...v1.0.1) (2021-03-13)

# [1.0.0](https://github.com/Howard86/howardism/compare/v0.5.1...v1.0.0) (2021-02-27)

## [0.5.1](https://github.com/Howard86/howardism/compare/v0.5.0...v0.5.1) (2021-02-26)

# [0.5.0](https://github.com/Howard86/howardism/compare/v0.4.0...v0.5.0) (2020-11-03)

# [0.4.0](https://github.com/Howard86/howardism/compare/v0.3.1...v0.4.0) (2020-11-01)

## [0.3.1](https://github.com/Howard86/howardism/compare/v0.3.0...v0.3.1) (2020-10-28)

# [0.3.0](https://github.com/Howard86/howardism/compare/v0.2.0...v0.3.0) (2020-10-21)

# [0.2.0](https://github.com/Howard86/howardism/compare/v0.1.2...v0.2.0) (2020-10-06)

## [0.1.2](https://github.com/Howard86/howardism/compare/v0.1.1...v0.1.2) (2020-10-03)

## 0.1.1 (2020-09-29)
