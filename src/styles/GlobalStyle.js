import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  /* CSS Variables */
  :root {
    --max-width: 1200px;
    --primary-color: #e8344e;
    --text-primary: #141617;
    --text-secondary: #3A3E41;
    --text-tertiary: #81898F;
    --text-quaternary: #9DA7AE;
    --bg-gray-primary: #e4ebf0;
    --bg-gray-secondary: #f6f9fa;
  }

  /* 폰트 설정 */
  @font-face {
    font-family: 'Pretendard Variable';
    font-weight: 45 920;
    font-style: normal;
    font-display: swap;
    src: url('/fonts/PretendardVariable.woff2') format('woff2-variations');
  }

  body {
    font-family: 'Pretendard Variable';
    color: var(--text-primary);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }

  /* 기본 스타일 제거 */
  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: 0;
    appearance: none;
    background-color: transparent;
    line-height: 1;
    cursor: pointer;
  }
`;
