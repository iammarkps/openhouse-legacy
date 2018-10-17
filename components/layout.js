import Head from 'next/head'
import React from 'react'
import { TypographicContext, GlobalStyle } from './design'

export const Layout = ({ children }) => (
  <div>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat:300,600,700|Kanit:400"
        rel="stylesheet"
      />
      <title>Triam Udom Open House</title>
    </Head>
    <GlobalStyle />
    <TypographicContext>{children}</TypographicContext>
  </div>
)
