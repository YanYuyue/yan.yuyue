import { css } from "@linaria/core";
import { darkModeQuery } from "../utils/style";

export const globalStyles = css`

  :global() {
    html {
      --gray-1: #262b33; 
      --gray-2: #3e4450;
      --gray-3: #565d6d;
      --gray-4: #8891a3;
      --gray-5: #bdc3d1;
      --gray-6: #d8dce6;
      --gray-7: #f5f6fa;

      --blue-1: #0a1b39;
      --blue-2: #0e2b5c;
      --blue-3: #1854b4;
      --blue-4: #2b7bd8;
      --blue-5: #5aa6f5;
      --blue-6: #89c3fa;
      --blue-7: #e6f4ff;

      --red-1: #391212;
      --red-2: #5c1e1e;
      --red-3: #b42424;
      --red-4: #d83b3b;
      --red-5: #f56a6a;
      --red-6: #fa9e9e;
      --red-7: #fff0f0;

      --purple-1: #2a1b3d;
      --purple-2: #432b63;
      --purple-3: #6b42a1;
      --purple-4: #8659c7;
      --purple-5: #aa85e4;
      --purple-6: #c9aef5;
      --purple-7: #f7f0ff;

      --cyan-1: #0a2d2d;
      --cyan-2: #134747;
      --cyan-3: #1a8181;
      --cyan-4: #28b7b7;
      --cyan-5: #4dd2d2;
      --cyan-6: #85e6e6;
      --cyan-7: #e6ffff;
    }

    ${darkModeQuery} {
      --gray-1: #d8dce6; 
      --gray-2: #bdc3d1;
      --gray-3: #8891a3;
      --gray-4: #565d6d;
      --gray-5: #3e4450;
      --gray-6: #262b33;
      --gray-7: #161921; 

      --blue-1: #89c3fa;
      --blue-2: #5aa6f5;
      --blue-3: #2b7bd8;
      --blue-4: #1854b4;
      --blue-5: #0e2b5c;
      --blue-6: #0a1b39;
      --blue-7: #050d1c;

      --red-1: #fa9e9e;
      --red-2: #f56a6a;
      --red-3: #d83b3b;
      --red-4: #b42424;
      --red-5: #5c1e1e;
      --red-6: #391212;
      --red-7: #1c0909;

      --purple-1: #c9aef5;
      --purple-2: #aa85e4;
      --purple-3: #8659c7;
      --purple-4: #6b42a1;
      --purple-5: #432b63;
      --purple-6: #2a1b3d;
      --purple-7: #150d1f;

      --cyan-1: #85e6e6;
      --cyan-2: #4dd2d2;
      --cyan-3: #28b7b7;
      --cyan-4: #1a8181;
      --cyan-5: #134747;
      --cyan-6: #0a2d2d;
      --cyan-7: #051616;
    }

    a {
      text-decoration: none;
      color: var(--blue-2);
      transition: all 0.1s ease;

      &:hover {
        color: var(--blue-1);
      }
      &:active {
        color: var(--blue-3);
      }
    }
    
    body {
      margin: 0;
      padding: 0;
      font-family: sans-serif;

      color: var(--gray-1);
      background-color: var(--gray-7);
    }

    * {
      box-sizing: border-box;
    }

    button {
      padding: 6px 12px;
      font-size: 16px;
      font-weight: 500;
      border: none;
      border-radius: 8px;
      background: linear-gradient(145deg, #4a90e2, #357abd);
      color: white;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      position: relative;
      overflow: hidden;
    }

    button:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      background: linear-gradient(145deg, #357abd, #2868a9);
    }

    button:active {
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    }

    button:focus {
      box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.3);
    }

    button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      background: var(--gray-6);
      transform: none;
      box-shadow: none;
    }
  }
  

  .clickable-icon {
    cursor: pointer;
    transition: all 0.1s ease;

    &:hover {
      opacity: 0.8;
    }
    &:active {
      opacity: 0.9;
    }
  }

  /* constants */
  --layout-max-width: 1024px;
`;