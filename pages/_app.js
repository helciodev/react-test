import { createGlobalStyle } from "styled-components";
import Layout from "../components/Layout";

const GlobalStyles = createGlobalStyle`
*, *::after, *::before {
  box-sizing: inherit;
}
@font-face {
  font-family: Poppins;
  src: url(/public/static/Poppins-Regular.ttf);
  format:('ttf');
  font-weight: normal;
  font-style: normal;
}

:root{
  --call-to-action: #f05830;
  --th-green: #236e57;
  --black: #0d0d0d;
  --white: #fff;
  --text-color: #807d7d;
  --offWhite: #ededed;
  --boxShadow: 0 12px 24px 0 rgba(0, 0, 0, .9);
  box-sizing: border-box;
}

body {
  font-family: 'Poppins',--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.5;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: var(--black);
}


/* APPLY SAME FONT FAMILY TO BUTTONS */

button {
  font-family: 'Poppins',--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
