// pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  // optional: server-side props override
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Place non-changing tags here (fonts, meta tags that MUST be server-rendered).
              DO NOT put <title> here. Use next/head in _app or page components instead. */}
          <meta charSet="utf-8" />
          {/* example: <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
