import Head from 'next/head'
import React from 'react'
import { TypographicContext, GlobalStyle } from './design'

export const Layout = ({ children }) => (
  <React.Fragment>
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/static/favicons/apple-touch-icon.png"
      />
      <link rel="manifest" href="/static/manifest.json" />
      <link
        rel="mask-icon"
        href="/static/favicons/safari-pinned-tab.svg"
        color="#000000"
      />
      <meta name="msapplication-TileColor" content="#2b5797" />
      <meta name="msapplication-config" content="/static/browserconfig.xml" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/favicons/32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/favicons/16x16.png"
      />
      <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
      <meta name="theme-color" color="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300,600,700|Kanit:400"
        rel="stylesheet"
      />
      <title>Triam Udom Open House</title>
    </Head>
    <GlobalStyle />
    <TypographicContext>{children}</TypographicContext>
  </React.Fragment>
)
