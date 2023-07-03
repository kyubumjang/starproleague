# STARCRAFT PRO LEAGUE

스타크래프트 프로리그 진행 사이트

### 소개

스타크래프트 프로리그 진행 시 메모장 혹은 스프레드 시트로 진행을 하고 있습니다.
항상 진행하는 것은 같은데 매번 메모장으로 같은 형식을 만들거나 시트를 수정합니다.
사용하고 있는 사다리타기, 랜덤 핀볼 같은 사이트를 매번 새 탭에서 켜서 사용합니다.
웹페이지로 만들어 불편함을 해소하고 더 나은 프로리그 진행을 위한 툴을 좋은 경기를 보는 선수들에게 제공하기 위해 개발합니다.

### 개발 일정

- 2023.07.03 ~

### 개발 환경

#### 언어

<div>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
</div>

#### 기술 스택

<div>
    <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
    <img src="https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=nextdotjs&logoColor=white"/>
  <br />
    <img src="https://img.shields.io/badge/Emotion-BB6BB5.svg?style=flat-square&logo=emotion&logoColor=white"/>
    <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white"/>
    <img src="https://img.shields.io/badge/Zustand-brown?style=flat-square&logo=Zerply&logoColor=white"/>
    <img src="https://img.shields.io/badge/Recoil-blue?style=flat-square&logo=Recoil&logoColor=white"/>
    <img src="https://img.shields.io/badge/React Query-FF4154?style=flat-square&logo=React Query&logoColor=white"/>
    <img src="https://img.shields.io/badge/React Hook Form-EC5990?style=flat-square&logo=reacthookform&logoColor=white"/>
    <img src="https://img.shields.io/badge/Sentry-362D59?style=flat-square&logo=sentry&logoColor=white"/>
</div>

#### 도구

<div>
    <img src="https://img.shields.io/badge/Visual%20Studio%20Code-007ACC.svg?&style=flat-square&logo=Visual%20Studio%20Code&logoColor=white" />
    <img src="https://img.shields.io/badge/yarn-%232C8EBB.svg?style=flat-square&logo=yarn&logoColor=white" />
    <img src="https://img.shields.io/badge/ESLint-4B32C3.svg?&style=flat-square&logo=ESLint&logoColor=white" />
    <img src="https://img.shields.io/badge/Git-F05032.svg?&style=flat-square&logo=Git&logoColor=white" />
    <img src="https://img.shields.io/badge/github-%23121011.svg?style=flat-square&logo=github&logoColor=white" />
    <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=flat-square&logo=figma&logoColor=white" />
    <img src="https://img.shields.io/badge/Notion-%23000000.svg?style=flat-square&logo=notion&logoColor=white" />
    <img src="https://img.shields.io/badge/Slack-4A154B?style=flat-square&logo=slack&logoColor=white" />
</div>

#### 주요 라이브러리

- 프레임워크: Next.js 13을 사용하여 개발
- 패키지 관리: Yarn
- 코드관리: Git, Github
- 컨벤션: Prettier, ESLint
- 스타일: emotion, mui를 사용하려 했으나 아직까지 지원이 원활하지 않은 것으로 판단하여 설치는 해두고 설정은 임시로 해놨으나 기본 셋업만 하고 사용은 보류하기로 결정, 대체하기 위해 Tailwind CSS와 CSS-in-JS로 vanilla-extract를 사용하기로 결정
- 전역 상태관리: recoil, Justand
- 비동기 과정 처리: Axios, React-Query
- 폼 상태관리: React-hook-form
- 에러 나는 부분 확인 및 로그: Sentry

### 핵심 기능

프로리그 진행을 위한 기능

- 개인 메모장 처럼 써놓고 저장이 되는 에디터 기능
- 권한(시청자, 매니저, BJ), (주최자, 참여자(꼴찌 권한 부여))
- 공지사항 올릴 수 있는 부분 만들기
- 진행 방식 쓸 수 있는 공간(경기 방식 ex: 1세트: 프로리그, 2세트: 프로리그, 3세트: 슈퍼에결)
- 라인업: 팀원 모집(프로토스, 테란, 저그)
- 후원금 합계, 총 합계, 후원인, 후원 랭킹, 선입금 여부, 각 방 별 순위(옵저버, 관전자), 폐지의 전당 => 스프레드 시트에서 사용하는 것 거의 그대로 가지고 올 수 있도록
- 팀 나누기(전체 나누기, 한 명 나누기, 던지기)
- 사다리
- 룰렛
- 핀 볼
- 링크(elo board, 사다리, 룰렛)
- 길쭉법 설명( 펀딩 순으로 옵저버 자리 가지기 )
- 맵 설명 및 링크
- 맵 사다리 자동으로 탈 수 있게 참여자 탭에 부여
- 경기 내 의리 사다리
- 경기 결과는 바로 랭킹에 반영

### 주요 탭

- 대시보드
- 공지사항
- 경기 준비
- 경기 진행
- 경기 결과
- 프로리그 랭킹
- 연결 사이트(ELO BOARD, 사다리, 룰렛)
- 운영자 문의하기

### 편의성 및 불편한 부분 해소를 위한 기능

- 접속해 있는 스타크래프트 BJ 확인
- 스타 메이저 프로리그를 진행할지 안할 지 여부 파악 시 편하도록 링크 제공
- 슬랙 처럼 매니저 혹은 BJ 권한을 가진 사람들이 운영자와 채팅할 수 있는 시스템

### 기대 효과

프로리그를 원활하게 진행 및 기록할 수 있음
