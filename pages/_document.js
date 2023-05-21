import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <link
        href="https://fonts.cdnfonts.com/css/montserrat"
        rel="stylesheet"
      ></link>
      <link href="open-sans.css" rel="stylesheet" type="text/css"></link>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
