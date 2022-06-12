import { createGlobalStyle } from "styled-components";
import Layout from "../components/Layout";

const GlobalStyles = createGlobalStyle`
*, *::after, *::before {
  box-sizing: inherit;
}
@font-face {
  font-family: radnikanext;
  src: url(/public/static/radnikanext-medium-webfont.woff2);
  format:('woff2');
  font-weight: normal;
  font-style: normal;
}

:root{
  --black: #393939;
  --red: #ff0000;
  --gray: #3a3a3a;
  --light-gray: #e1e1e1;
  --offWhite: #ededed;
  --max-width: 1000px;
  --boxShadow: 0 12px 24px 0 rgba(0, 0, 0, .9);
  box-sizing: border-box;
}

body {
  font-family: 'radnikanext',--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: var(--black);
}

a:hover {
  text-decoration: underline;
}

/* APPLY SAME FONT FAMILY TO BUTTONS */

button {
  font-family: 'radnikanext',--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`;

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <GlobalStyles />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
