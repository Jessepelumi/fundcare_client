"use client";

import { createGlobalStyle } from "styled-components";
import variables from "./variables";

const GlobalStyle = createGlobalStyle`
${variables};

* {
box-sizing: border-box;
padding: 0;
margin: 0;
scroll-behavior: smooth;
line-height: 1.5;
}
`;

export default GlobalStyle;
